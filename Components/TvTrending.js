import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import MovieCard from './MovieCard';

const TvTrending = () => {
  const navigation = useNavigation()


  const { todayTrending, weekTrending } = useContext(AppContext);

  const title = 'Trending Tv shows';
  const buttonTitle1 = 'Today';
  const buttonTitle2 = 'thisWeek';
  const mov = 'tv';
  const tv = 'tv'
  return (
    < View>
      <MovieCard movies={todayTrending} movieUpdate={weekTrending} title={title} buttonTitle1={buttonTitle1} buttonTitle2={buttonTitle2} mov={mov} tv={tv} />
    </View>


  )
}


export default TvTrending

const styles = StyleSheet.create({



})

