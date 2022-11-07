import { StyleSheet, View, } from 'react-native'
import React from 'react'

import SearchBox from '../Components/SearchBox';
import SearchingMovieList from '../Components/SearchingMovieList';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const SearchScreen = () => {



  return (


    <View style={styles.container}>
     
      <SearchBox />
      
<SearchingMovieList />
</View>




  )
}

export default SearchScreen

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#242526',
    
    alignContent: 'flex-end'

  },
  text: {
    color: '#fdf102',
    fontSize: 15,
    alignItems: 'center'
  },
})