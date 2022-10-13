import { StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'
import React, {useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App'


const SearchBox = () => {
    
    const navigation = useNavigation()

    const { searchValue, setSearchValue} =useContext(AppContext);

  return (

    <SafeAreaView>
    <View  style={styles.full}>


<TextInput  style={{ height: 50, borderColor: 'red', borderWidth: 2,width:380, textAlign:'center',backgroundColor:'white',marginLeft:100,borderRadius:5,marginTop:80, }}
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
    backgroundColor:'#024E6F',
    padding:60,
    width:'fit-content',

  }

})