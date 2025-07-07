import axios from "axios";

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/weather?city=${city}`
    );
    if (response.data.cod === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
