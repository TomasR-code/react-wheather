const location = "Buenos Aires,ar";
const api_key = "1198377a143dad1eef70be0b815e305d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}?&appid=${api_key}`;