import React from 'react'
import AnimatedSection from './AnimatedSection'
import { savedCities } from '@/store/store'

interface Props{
    onClick: Function
}

const SavedSection = ({onClick}:Props) => {
    const {saved} = savedCities()
    
  return (
    <AnimatedSection className='md:max-w-[500px] w-full shadow-sm shadow-accent rounded-xl flex flex-col p-4 items-center'>
        <p className='font-bold text-2xl'>
            Збережені
        </p>
       <ul className='w-full'>
            {saved.slice(0, 8).map((city) => (
                <li
                    onClick={() => onClick(city)}
                    key={city}
                    className='text-xl font-bold mt-4 border-b-2 border-borders cursor-pointer hover:text-secondary-text hover:border-b-accent transition-colors duration-300'
                >
                    {city}
                </li>
            ))}
       </ul>
    </AnimatedSection>
  )
}

export default SavedSection