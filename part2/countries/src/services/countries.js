import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const apiKey = import.meta.env.VITE_SOME_KEY
const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const getQuery = (query) => {
  const request = axios.get(`${baseUrl}/${query}`)
  return request.then(response => response.data)
}

const getWeather = (cityName) => {
  const request = axios.get(`${baseWeatherUrl}${cityName}&units=metric&appId=${apiKey}`)
  return request.then(response => response.data)
}

export default {
  getQuery,
  getWeather
}