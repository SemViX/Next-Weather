interface weather{
    icon:string;
    description: string;
}

export interface IWeatherData{
    dt_txt?:string
    main?: {
        feels_like: number;
        temp: number;
        humidity: number;
        
    } | undefined;
    weather?: weather[];
    wind?:{
        speed: number;
    };
}
