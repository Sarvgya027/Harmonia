'use client'

import { createClient } from '@/utils/supabase/client'
import { Provider } from '@supabase/supabase-js'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function LoginPage() {


  const handleGitHubLogin = async (provider : Provider) => {
    const supabase = createClient();
    
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }
  

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900/50 rounded-xl border border-slate-800 p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-200 mb-4">
            Welcome to <span className="text-indigo-400">Harmonia</span>
          </h1>
          <p className="text-slate-400 mb-8">
            Sign in to continue to your personalized music experience
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleGitHubLogin('github')}
            className="w-full flex items-center justify-center space-x-3 
                       bg-indigo-600 hover:bg-indigo-700 
                       text-white font-semibold py-3 rounded-lg 
                       transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <FaGithub className="text-2xl" />
            <span>Continue with GitHub</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm">
            By signing in, you agree to our{' '}
            <a href="#" className="text-indigo-400 hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage