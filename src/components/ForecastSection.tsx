import { useForecast } from '@/hooks/useForecast'
import AnimatedSection from './AnimatedSection'
import { IForecastSectionProps } from '@/types/ForecastSection'
import ForecastItem from './ForecastItem'

const ForecastSection = ({cityName}:IForecastSectionProps) => {
    const forecastData = useForecast(cityName) 
    console.log(forecastData.data)
  return (
    <AnimatedSection
        className='max-w-[850px] rounded-xl bg-background shadow-sm shadow-accent w-full p-4 mt-5 flex justify-center flex-row gap-3 flex-wrap'
    >
        {forecastData.data?.slice(0, 8).map((item) => (
           <ForecastItem key={item.dt_txt} {...item}/>
        ))}
    </AnimatedSection>
  )
}

export default ForecastSection