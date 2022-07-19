export const getWeatherForecast = async (city: string) => {
    const API_KEY= "e4e930ec2b141d3f95fccc9f633b7ca0"; 
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(endpoint)
    const responseData = await response.json()
    return responseData;
} 
 
