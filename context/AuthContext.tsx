'use client'

import { User } from '@supabase/supabase-js'
import { createContext } from "react"

const AuthContext = createContext<{
  user: User | null
  loading: boolean
}>({
  user: null,
  loading: true,
})

export { AuthContext }
