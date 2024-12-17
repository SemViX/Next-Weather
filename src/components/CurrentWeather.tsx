import { DropletIcon, ThermometerIcon, Wind } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import AnimatedSection from './AnimatedSection'
import { ICurrentWeatherProps } from '@/types/currentWeather'
import { useWeather } from '@/hooks/useWeather'

const CurrentWeather = ({cityName}:ICurrentWeatherProps) => {
    const weatherData = useWeather(cityName)    

  return (
    <AnimatedSection className='max-w-[850px] rounded-xl bg-background shadow-sm shadow-accent w-full p-4 flex flex-col items-center sm:flex-row '>
        {weatherData.data?.weather && <div className='w-full flex flex-col justify-center items-center'>
            <Image src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}.png`} width={100} height={100} alt=''/>
            <p className='font-bold capitalize text-3xl'>
                {weatherData.data.weather[0].description}
            </p>
        </div>}
        <div className='w-full flex flex-col gap-2 text-secondary-text'>
            <div className='font-bold'>
                <div className='flex gap-2 items-center'>
                    <p className='text-2xl' >{Math.round(weatherData?.data?.main?.temp ?? 0)} &deg;C </p>
                    <ThermometerIcon size={30}/>
                </div>
                Відчувається як {Math.round(weatherData?.data?.main?.feels_like ?? 0)} &deg;C

            </div>
            <div className='font-bold'>
            </div>
            <div className='font-bold flex gap-3 items-center'>
                Вологість: {weatherData.data?.main?.humidity} %
                <DropletIcon/>
            </div>
            <div className='font-bold flex gap-3 items-center'>
                Швидкість вітру: {weatherData.data?.wind?.speed} м/с
                <Wind/>
            </div>
        </div>
    </AnimatedSection>
  )
}

export default CurrentWeather