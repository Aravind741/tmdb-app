import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../App';

import MovieCard from '../Components/MovieCard';

const TopRated = () => {

  const { top, setTop, movieTop, setMovieTop } = useContext(AppContext);

  const title = 'Top Rated';
  const buttonTitle1 = 'movies';
  const buttonTitle2 = 'onTv'
  const mov = 'movie';
  const tv = 'tv'
  return (

    <View style={styles.container}>
      <MovieCard movies={top} movieUpdate={movieTop} title={title} buttonTitle1={buttonTitle1} buttonTitle2={buttonTitle2} mov={mov} tv={tv} />
    </View>

  )
}


export default TopRated

const styles = StyleSheet.create({
  container:{
    marginTop:60,
      height:300,
      width:400
  }


})