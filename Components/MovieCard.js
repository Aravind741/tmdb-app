import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import { HStack,Box } from "@react-native-material/core";


const MovieCard = () => {
  const navigation = useNavigation()


  const { movies, setMovies} =useContext(AppContext);   




const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}






  return (

    <Box  m={4} >

    <SafeAreaView>


    <View style={{height:300, width:600,}}>
   
   
   <ScrollView horizontal={true} >

   <HStack m={0} spacing={10}>

    {movies.map((movie, index) => 
    <TouchableOpacity  style={styles.buttonStyle} >
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true}>
          
        <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
          navigation.navigate('Details',{ 
            id:`${movie.id}`
            }) 
            } } >
     
        

            <Image
               style={{flex:1, height:null, width:150,}}
        source={{uri: getPostURL(movie.poster_path)}} >
      </Image>



     
      <View style={styles.button}>

<Text style={styles.title}>
  {movie.title}
  </Text>

<View style={styles.others}>
  {movie.release_date}
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
     </Box>

  )
}


export default MovieCard

const styles = StyleSheet.create({


    container: {
        flex: 1,
      paddingTop: 50,
      height:400,
      width:500,


      },
      imagecontainer: {
        height:"100%",
         width:"100%",
         
      
         
      },
      buttonStyle: {
        marginLeft:2,
        borderWidth: 1,
        borderColor: '#141414',
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