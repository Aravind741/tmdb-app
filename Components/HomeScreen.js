import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';

const HomeScreen = () => {

  const[movies,setMovies] = useState([]);

  useEffect(()=> {
     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1')
     
     .then((response)=>{setMovies(response.data.results)})

     .catch(err =>{console.log(err)})


  },[])

 





  return (

   
<View>
  <h1>Popular</h1>

   <MovieCard  movies={movies} />

  
</View>
      
       
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  

})