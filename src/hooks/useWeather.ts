import { IWeatherData } from "@/types/weatherData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useWeather(cityName:string){
    const weatherData = useQuery({
        queryKey: ['weather data'],
        queryFn: async () => {
            return (await axios.get<IWeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=uk&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`)).data
        }
    })
    return weatherData
}