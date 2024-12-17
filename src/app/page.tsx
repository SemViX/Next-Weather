'use client'
import CurrentWeather from "@/components/CurrentWeather";
import ForecastSection from "@/components/ForecastSection";
import SavedSection from "@/components/SavedSection";
import { useForecast } from "@/hooks/useForecast";
import { useWeather } from "@/hooks/useWeather";
import { savedCities } from "@/store/store";
import { Search, Star } from "lucide-react";
import { FormEvent, useState } from "react";


export default function Home() {
  const [value, setValue] = useState('London')
  const {refetch:refetchForecast} = useForecast(value)
  const {refetch:refetchCurrent} = useWeather(value)
  const {setSave, saved, deleteFromSave} = savedCities()

  const handleSave = () => {
    if (saved.includes(value)){
      deleteFromSave(value)
    }
    else{
      setSave(value)
    }
  }

  const setCity = (cityName:string) => {
    setValue(cityName)
    refetchCurrent()
    refetchForecast()
  }

  const onSubmit = (e:FormEvent) => {
    e.preventDefault()
    refetchCurrent()
    refetchForecast()
  }

  return (
    <div className="min-h-screen p-5">
      <form onSubmit={onSubmit} className="flex items-center gap-3 flex-wrap" >
        <input 
          type="text"
          placeholder="Введіть назву міста"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-main-text focus:outline-none text-2xl font-bold"
        />
        <button 
          className="bg-accent transition-colors duration-300 p-2 rounded-xl hover:bg-hover text-white font-semibold hover:text-secondary-text
            flex gap-2 items-center justify-center"
          type="submit"
        >
          Шукати
          <Search size={20}/>
        </button>
        <Star 
          size={30} 
          className={`text-yellow-600 hover:fill-yellow-600 ${saved.includes(value) && 'fill-yellow-600'}`}
          onClick={handleSave} 
        />
      </form>
      <div className="flex flex-col md:flex-row gap-2 items-stretch justify-stretch md:justify-between mt-5 ">
        <div>
          <CurrentWeather cityName={value}/>  
          <ForecastSection cityName={value}/>
        </div>
        <SavedSection onClick={setCity}/>
      </div>
    </div>
  );
}
