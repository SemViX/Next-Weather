import { create } from "zustand"


interface IStoreState{
    saved: string[],
    setSave: (newCity:string) => void,
    deleteFromSave: (cityName:string) => void
}


export const savedCities = create<IStoreState>()((set) => ({
    saved:[],
    setSave: (newCity) => set((state) => {
        if (!state.saved.includes(newCity)) {
            return {saved:[newCity, ...state.saved]}
        }
        else{
            return {saved:[...state.saved]}
        }
    }),
    deleteFromSave: (cityName) => set((state) => {
        return {saved: state.saved.filter((city) => city !== cityName)}
    })
}))