import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import MovieCard from '../Components/MovieCard';

const Trending = () => {
  const navigation = useNavigation()


  const {todayMovies,weekMovies} =useContext(AppContext);   
 
  const title='Trending Movies';
  const buttonTitle1='Today';
  const buttonTitle2='thisWeek';
  const mov = 'movie';
  const tv = 'movie'
  

  return (
   < View style={styles.container}>
    <MovieCard movies={todayMovies} movieUpdate={weekMovies} title={title} buttonTitle1={buttonTitle1} buttonTitle2={buttonTitle2} mov={mov} tv={tv} />
     </View>
      

  )
}


export default Trending

const styles = StyleSheet.create({
container:{
     marginTop:60,
      height:300,
      width:400
}

})

