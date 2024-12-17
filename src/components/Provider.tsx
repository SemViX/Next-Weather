'use client'
import { IProviderProps } from '@/types/provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const queryClient = new QueryClient()

const Provider = ({children}:IProviderProps) => {
  const theme = localStorage.getItem('theme')
  return (
    <ThemeProvider defaultTheme={theme ?? 'light'} storageKey='theme'>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
    </ThemeProvider>
   
  )
}

export default Provider