const API_KEY = 'b0e2627be270f36dc46cbdd395428825';

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      console.error('Failed to fetch current weather:', await response.text());
      return null;
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching current weather:', error);
    return null;
  }
};

export const getHistoricalWeather = async (lat, lon, timestamp) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&appid=${API_KEY}`);
    if (!response.ok) {
      console.error('Failed to fetch historical weather:', await response.text());
      return null;
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching historical weather:', error);
    return null;
  }
};
