export const getWeatherForecast = async (endpoint: string) => {
    const response = await fetch(endpoint)
    const responseData = await response.json()
    return responseData;
} 
 
