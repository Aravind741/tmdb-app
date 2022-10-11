import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import Details from './Components/Details';
import React, { useEffect,useState, createContext } from 'react'
import axios from 'axios';

const Stack = createNativeStackNavigator();

export const AppContext = createContext({})

 function App() {


  const[movies,setMovies] = useState([]);
  const[top,setTop] = useState([]);
  const[nows,setNows] = useState([]);




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
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1`)
  
  .then((response)=>{setNows(response.data.results)})

  .catch(err =>{console.log(err)})


},[])
  
 

  

  return (
    <AppContext.Provider value={{ movies,setMovies,top,setTop,nows,setNows }} >
   
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen  name="Home" component={HomeScreen}  />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>

    </AppContext.Provider>
  );
}          

export default App