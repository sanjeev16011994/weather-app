import { createContext } from "react";
interface DataContextType {
  weatherData: any;
  setWeatherData: React.Dispatch<React.SetStateAction<any>>;
}

export const DataContext = createContext<DataContextType | null>(null);

