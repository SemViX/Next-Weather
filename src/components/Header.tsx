'use client'
import { CloudyIcon, Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const Header = () => {
    const {theme, setTheme} = useTheme()
    const icon = theme == 'dark'? <Sun size={40}/> : <Moon size={40}/> 
    const handleChangeTheme = () => {
        if (theme == 'dark') {
            setTheme('light')
        }
        else{
            setTheme('dark')
        }
    }
  return (
    <header className='p-3 flex justify-between items-center text-main-text border-b-2 border-borders shadow-md shadow-borders/80 '>
        <div className='flex items-center justify-center gap-3 text-2xl font-bold'>
            <CloudyIcon size={50}/>
            NextWeather
        </div>
        <div className='hover:text-accent' onClick={handleChangeTheme}>
            {icon}
        </div>
    </header>
  )
}

export default Header