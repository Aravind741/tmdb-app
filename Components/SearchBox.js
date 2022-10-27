import { StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'
import React, {useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App'
import { HStack } from '@react-native-material/core';

const SearchBox = () => {
    
    const navigation = useNavigation()

    const { searchValue, setSearchValue} =useContext(AppContext);

  return (


    <HStack m={0} spacing={10}>
    <SafeAreaView>
    <View  style={styles.full}>


<TextInput  style={{ height: 30, borderColor: '#fdf102', borderWidth: 2,width:300, textAlign:'center',backgroundColor:'#242526',borderRadius:5,textDecorationColor:'#fdf102' }}
        placeholder='Type to search movies..' placeholderTextColor={'#a79f069a'}

    onChangeText={(val) => setSearchValue(val) } onSubmitEditing={() => navigation.navigate('Searching Details')} >
        
 </TextInput>


</View>
</SafeAreaView> 
</HStack>
  )
}

export default SearchBox

const styles = StyleSheet.create({

  full:{
    backgroundColor:'#242526',
    width:'100%',
    padding:30
  }

})