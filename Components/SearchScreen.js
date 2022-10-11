import { StyleSheet, Text, View, ScrollView, SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

import SearchBox from './SearchBox';
import SearchingMovieList from './SearchingMovieList';


const SearchScreen = () => {



  return (
   
  
<View>
<SearchBox  />


   
<SearchingMovieList />



</View>

    

 
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  
})