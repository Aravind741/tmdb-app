import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen'
import LoginScreen from './Components/LoginScreen';
import Details from './Components/Details';
import SearchScreen from './Components/SearchScreen';
import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios';
import config from './config';

const Stack = createNativeStackNavigator();

export const AppContext = createContext({})

function App() {



  const [movies, setMovies] = useState([]);
  const [top, setTop] = useState([]);
  const [nows, setNows] = useState([]);
  const [movieList, setMovieList] = useState('')

  const [searchValue, setSearchValue] = useState('')
  const [movieUpdate, setMovieUpdate] = useState([]);
  const [movieTop, setMovieTop] = useState([]);
  const [todayTrending, setTodayTrending] = useState([]);
  const [weekTrending, setWeekTrending] = useState([]);
  const [todayMovies, setTodayMovies] = useState([]);
  const [weekMovies, setweekMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [tvGenre, setTvGenre] = useState([]);




  useEffect(() => {
    axios.get(`${config.MAIN_URL}/trending/movie/day?api_key=${config.API_KEY}&with_genres=${genre}`)

      .then((response) => { setTodayMovies(response.data.results) })

      .catch(err => { console.log(err) })


  }, [genre])


  useEffect(() => {
    axios.get(`${config.MAIN_URL}/trending/movie/week?api_key=${config.API_KEY}&with_genres=${genre}`)

      .then((response) => { setweekMovies(response.data.results) })

      .catch(err => { console.log(err) })


  }, [genre])
  useEffect(() => {
    axios.get(`${config.MAIN_URL}/trending/tv/day?api_key=${config.API_KEY}`)

      .then((response) => { setTodayTrending(response.data.results) })

      .catch(err => { console.log(err) })


  }, [])


  useEffect(() => {
    axios.get(`${config.MAIN_URL}/trending/tv/week?api_key=${config.API_KEY}`)

      .then((response) => { setWeekTrending(response.data.results) })

      .catch(err => { console.log(err) })


  }, [])


  useEffect(() => {
    axios.get(`${config.MAIN_URL}/tv/top_rated?api_key=${config.API_KEY}&language=en-US&page=1&with_genres=${tvGenre}`)

      .then((response) => { setMovieTop(response.data.results) })

      .catch(err => { console.log(err) })


  }, [tvGenre])

  useEffect(() => {
    axios.get(`${config.MAIN_URL}/tv/popular?api_key=${config.API_KEY}&language=en-US&page=1&with_genres=${tvGenre}`)

      .then((response) => { setMovieUpdate(response.data.results) })

      .catch(err => { console.log(err) })


  }, [tvGenre])
 


  useEffect(() => {
    axios.get(`${config.MAIN_URL}/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1&with_genres=${genre}`)

      .then((response) => { setMovies(response.data.results) })

      .catch(err => { console.log(err) })


  }, [genre])



  useEffect(() => {
    axios.get(`${config.MAIN_URL}/movie/top_rated?api_key=${config.API_KEY}&language=en-US&page=1&with_genres=${genre}`)

      .then((response) => { setTop(response.data.results) })
      .catch(err => { console.log(err) })


  }, [genre])







  useEffect(() => {
    axios.get(`${config.MAIN_URL}/search/movie?api_key=${config.API_KEY}&query=${searchValue}`)

      .then((response) => { setMovieList(response.data.results) })

      .catch(err => { console.log(err) })


  }, [searchValue])



  useEffect(() => {
    axios.get(`${config.MAIN_URL}/movie/now_playing?api_key=${config.API_KEY}&language=en-US&page=1&with_genres=${genre}`)

      .then((response) => { setNows(response.data.results) })

      .catch(err => { console.log(err) })


  }, [genre])






  return (

    <AppContext.Provider value={{ movies, setMovies, top, setTop, nows, setNows, searchValue, setSearchValue, movieList, setMovieList, setMovieUpdate, movieUpdate, movieTop, setMovieTop, todayTrending, weekTrending, todayMovies, weekMovies,genre,setGenre,setTvGenre }} >


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />

          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen name="Searching Details" component={SearchScreen} />
          <Stack.Screen name="Details" component={Details} />
          


        </Stack.Navigator>
      </NavigationContainer>

    </AppContext.Provider>

  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App