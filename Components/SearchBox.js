import { StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'
import React, {useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App'
import { HStack,Flex,Box } from '@react-native-material/core';

const SearchBox = () => {
    
    const navigation = useNavigation()

    const { searchValue, setSearchValue} =useContext(AppContext);

  return (



    
    <SafeAreaView >
    <View  style={styles.full}>
  
    <Flex fill>
  


<TextInput  style={{ height: 40 , borderColor: '#fdf102', borderWidth: 2, textAlign:'center',backgroundColor:'#242526',borderRadius:10,textDecorationColor:'#fdf102',color:'#fdf102'  }}
        placeholder='Type to search movies..' placeholderTextColor={'#a79f069a'} 

    onChangeText={(val) => setSearchValue(val) } onSubmitEditing={() => navigation.navigate('Searching Details')} >
        
 </TextInput>
 
 </Flex>
</View>
</SafeAreaView> 



  )
}

export default SearchBox

const styles = StyleSheet.create({

  full:{
    backgroundColor:'#242526',
   
  }

})