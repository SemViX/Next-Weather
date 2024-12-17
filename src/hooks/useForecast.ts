import { IForecastData } from "@/types/forecastData";
import { IWeatherData } from "@/types/weatherData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useForecast(cityName:string){
    const forecastData = useQuery({
        queryKey: ['forecast'],
        queryFn: async () => {
            return (await axios.get<IForecastData>(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=ua&units=metric`)).data
        },
        select: (data) => data.list
    })

    return forecastData
}