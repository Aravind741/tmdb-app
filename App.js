import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen'
import LoginScreen from './Components/LoginScreen';
import Details from './Components/Details';

import SearchScreen from './Components/SearchScreen';
import React, { useEffect,useState, createContext } from 'react'
import axios from 'axios';

const Stack = createNativeStackNavigator();

export const AppContext = createContext({})

 function App() {



  const[movies,setMovies] = useState([]);
  const[top,setTop] = useState([]);
  const[nows,setNows] = useState([]);
  const [movieList,setMovieList] = useState('')
  
  const [searchValue,setSearchValue] = useState('')






  useEffect(()=> {
     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1')
     
     .then((response)=>{setMovies(response.data.results)})

     .catch(err =>{console.log(err)})


  },[])



  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1`)
    
    .then((response)=>{setTop(response.data.results)})
    .catch(err =>{console.log(err)})


  },[])


  
 


  
  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=de93eb585060bf0531bc637876b11f0e&query=${searchValue}`)
    
    .then((response)=>{setMovieList(response.data.results)})

    .catch(err =>{console.log(err)})


  },[searchValue])



 useEffect(()=> {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1`)
  
  .then((response)=>{setNows(response.data.results)})

  .catch(err =>{console.log(err)})


},[])
  
 

 
  

  return (

    <AppContext.Provider value={{ movies,setMovies,top,setTop,nows,setNows , searchValue, setSearchValue, movieList,setMovieList}} >
  

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />

        <Stack.Screen options={{headerShown:false}}  name="Home" component={HomeScreen}  />
        <Stack.Screen name="Searching Details" component={SearchScreen}  />
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