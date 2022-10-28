import { StyleSheet, Text, View, ScrollView, SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

import SearchBox from './SearchBox';
import SearchingMovieList from './SearchingMovieList';


const SearchScreen = () => {



  return (
   
  
<View style={styles.container}>
<SearchBox  />


   
<SearchingMovieList />



</View>

    

 
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  
  container:{
    backgroundColor:'#242526',
   
    alignContent:'flex-end'

  },
  text: {
    color: '#fdf102',
    fontSize:15,
    alignItems:'center'
  },
})