import { StyleSheet, Text, View } from 'react-native'
import MovieCard from './MovieCard';
import TopRated from './TopRated';
import NowPlay from './NowPlay';

const HomeScreen = () => {




  return (

    

<View style={styles.container}>

 
  <h1 style={styles.text}>Popular</h1>

   <MovieCard   />

  
  <h1 style={styles.text}>Top Rated</h1>

    <TopRated />


    <h1 style={styles.text}>Now Playing</h1>

<NowPlay />



</View>
       
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container:{
    backgroundColor:'black',

  },
  text:{
    color:'white',
  }


})