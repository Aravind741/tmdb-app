import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React, { useContext,useState,useEffect } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import { Flex, HStack,Spacer , Box,Button} from "@react-native-material/core";

import axios from 'axios';
import MovieCard from './MovieCard';

const Trending = () => {
  const navigation = useNavigation()


  const {todayMovies,weekMovies} =useContext(AppContext);   
 
  const title='Trending Movies';
  const buttonTitle1='Today';
  const buttonTitle2='thisWeek';
  const mov = 'movie';
  const tv = 'movie'
  
console.log("TodayMovies",todayMovies)
  return (
   < View>
    <MovieCard movies={todayMovies} movieUpdate={weekMovies} title={title} buttonTitle1={buttonTitle1} buttonTitle2={buttonTitle2} mov={mov} tv={tv} />
     </View>
      

  )
}


export default Trending

const styles = StyleSheet.create({


})

