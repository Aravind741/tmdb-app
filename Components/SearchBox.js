import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App'
import {  Flex, } from '@react-native-material/core';


const SearchBox = (values) => {

  const navigation = useNavigation()
  const [revealed, setRevealed] = useState(false);
  const { searchValue, setSearchValue, } = useContext(AppContext);




  return (




    <SafeAreaView >
      <View style={styles.full}>

        <Flex fill>



          <TextInput style={{ height: 40, borderColor: '#fdf102', borderWidth: 2, textAlign: 'center', backgroundColor: '#242526', borderRadius: 10, textDecorationColor: '#fdf102', color: '#fdf102',marginTop:20, }}
            placeholder={searchValue} placeholderTextColor={'white'} onTextInput={searchValue}

            onChangeText={(val) => setSearchValue(val)} onSubmitEditing={() => navigation.navigate('Searching Details'

            )} >


          </TextInput>

        </Flex>
      </View>
    </SafeAreaView>



  )
}

export default SearchBox

const styles = StyleSheet.create({

  full: {
    backgroundColor: '#242526',
      
  },
  backdropp: {
    backgroundColor: '#242526',
    textDecorationColor: '#fdf102',
    borderColor: '#fdf102',
    
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginHorizontal: 4
  }

})