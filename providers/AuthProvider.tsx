'use client'

import { AuthContext } from "@/context/AuthContext"
import { createClient } from "@/utils/supabase/client"
import { createClient as serverCLient } from "@/utils/supabase/server"
import { User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient() || serverCLient();

  useEffect(() => {
    // setLoading(true);

    console.log('user checking starts')

    const checkUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      console.log('line 26', user)

      if (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    checkUser();

    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('line 46', session);
      
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Correct cleanup function
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [user, supabase]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}