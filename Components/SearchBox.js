import { StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'
import React, {useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App'
import { HStack } from '@react-native-material/core';

const SearchBox = () => {
    
    const navigation = useNavigation()

    const { searchValue, setSearchValue} =useContext(AppContext);

  return (

    <SafeAreaView>
    <View  style={styles.full}>


<TextInput  style={{ height: 30, borderColor: 'black', borderWidth: 2,width:300, textAlign:'center',backgroundColor:'white',borderRadius:5, }}
        placeholder='Type to search movies..'

    onChangeText={(val) => setSearchValue(val) } onSubmitEditing={() => navigation.navigate('Searching Details')} >
        
 </TextInput>


</View>
</SafeAreaView> 

  )
}

export default SearchBox

const styles = StyleSheet.create({

  full:{
    backgroundColor:'orange',
    width:'100%',
    padding:30
  }

})