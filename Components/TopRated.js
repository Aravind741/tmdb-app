import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App';

import MovieCard from './MovieCard';

const TopRated = () => {

  const { top, setTop, movieTop, setMovieTop } = useContext(AppContext);

  const title = 'Top Rated';
  const buttonTitle1 = 'movies';
  const buttonTitle2 = 'onTv'
  const mov = 'movie';
  const tv = 'tv'
  return (

    <View>
      <MovieCard movies={top} movieUpdate={movieTop} title={title} buttonTitle1={buttonTitle1} buttonTitle2={buttonTitle2}  mov={mov} tv={tv} />
    </View>

  )
}


export default TopRated

const styles = StyleSheet.create({



})