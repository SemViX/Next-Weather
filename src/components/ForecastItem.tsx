import { IWeatherData } from '@/types/weatherData'
import Image from 'next/image'
import React from 'react'

const ForecastItem = (weatherData:IWeatherData) => {
  return (
    <div className='max-w-[100px] w-full bg-background shadow-sm shadow-borders p-2 rounded-xl flex flex-col justify-center items-center text-secondary-text capitalize'>
        {weatherData.weather && 
            <Image 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
                width={50} 
                height={50} 
                alt=''
            />
        }
        <p className='font-bold'>
            {Math.round(weatherData.main?.temp ?? 0)} &deg;C
        </p>
        {weatherData.weather && <p className='text-center font-bold'>
            {weatherData.weather[0].description}
        </p>}
    </div>
  )
}

export default ForecastItem