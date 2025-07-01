'use client'
import { IProviderProps } from '@/types/provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const queryClient = new QueryClient()

const Provider = ({children}:IProviderProps) => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setTheme(savedTheme)
  }, [])

  if (theme === null) {
    return setTheme('light')
  }
  return (
    <ThemeProvider defaultTheme={theme ?? 'light'} storageKey='theme'>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
    </ThemeProvider>
   
  )
}

export default Provider