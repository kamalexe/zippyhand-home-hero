import { useState, useEffect } from "react";

interface WeatherData {
    temp: number | null;
    loading: boolean;
    error: string | null;
}

export const useWeather = (): WeatherData => {
    const [weather, setWeather] = useState<WeatherData>({
        temp: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // 1. Get location via IP
                const locResponse = await fetch("https://ipapi.co/json/");
                if (!locResponse.ok) throw new Error("Failed to fetch location");
                const locData = await locResponse.json();
                const { latitude, longitude } = locData;

                // 2. Get weather via Open-Meteo (Free, no key required)
                const weatherResponse = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                );

                if (!weatherResponse.ok) {
                    const errorText = await weatherResponse.text();
                    console.error("Open-Meteo Error Response:", errorText);
                    throw new Error(`Failed to fetch weather data: ${weatherResponse.status}`);
                }

                const weatherData = await weatherResponse.json();
                const currentTemp = Math.round(weatherData.current_weather.temperature);

                setWeather({
                    temp: currentTemp,
                    loading: false,
                    error: null,
                });
            } catch (err: any) {
                console.error("Weather fetch error:", err);
                setWeather({
                    temp: null,
                    loading: false,
                    error: err.message || "An error occurred",
                });
            }
        };

        fetchWeather();
    }, []);

    return weather;
};
