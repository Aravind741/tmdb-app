import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import { HStack } from '@react-native-material/core';

const SearchingMovieList = () => {
    const navigation = useNavigation()
    const { searchValue, setSearchValue, movieList, setMovieList } = useContext(AppContext);

    const getPostURL = (posterpath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
    }


    return (
      <SafeAreaView>


      <View style={{height:300, width:600,}}>
     
     
     <ScrollView horizontal={true} >
  
     <HStack m={0} spacing={10}>
  
      {movieList.map((mov, index) => 
      <TouchableOpacity  style={styles.buttonStyle} >
      <View style={styles.imagecontainer}>
      
          <ScrollView horizontal={true}>
            
          <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
            navigation.navigate('Details',{ 
              id:`${mov.id}`
              }) 
              } } >
       
          
  
              <Image
                 style={{flex:1, height:null, width:150,}}
          source={{uri: getPostURL(mov.poster_path)}} >
        </Image>
  
  
  
       
        <View style={styles.button}>
  
  <Text style={styles.title}>
    {mov.title}
    </Text>
  
  <View style={styles.others}>
    {mov.release_date}
    </View>
  
  </View>
  
  
  </TouchableOpacity>
       </ScrollView>
       
       </View>
          
          </TouchableOpacity>
  
       
       )}
            </HStack>
  
         </ScrollView>
       </View>
       </SafeAreaView>
        
    )
}

export default SearchingMovieList

const styles = StyleSheet.create({

    
  container: {
    flex: 1,
      paddingTop: 50,
      height:400,
      width:500,
      backgroundColor:'black',
  },
  imagecontainer: {
    height:"100%",
     width:"100%",
     
     
  },
  buttonStyle: {
    marginLeft:2,
    borderWidth: 1,
    width: 150,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#051E34",
    color:'white',
    padding:10,

  },

  title:{
    textAlign:'center',
    color:'white',
    fontFamily:'verdana',
    marginTop:15,
    

  },
  others:{
    fontSize:15,
    margin:10,
  },
  rate:{
    backgroundColor:'green',
    borderRadius:10,
    width:40,
    textAlign:'center',
  }

})                                                                                      

