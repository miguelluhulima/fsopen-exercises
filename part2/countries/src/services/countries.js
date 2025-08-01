import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getQuery = (query) => {
  const request = axios.get(`${baseUrl}/${query}`)
  return request.then(response => response.data)
}

export default {
  getQuery
}