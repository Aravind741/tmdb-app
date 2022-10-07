import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native'
import React from 'react'

const MovieCard = (props) => {
const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}


  return (

    <SafeAreaView>
    <View style={{height:270, width:600, marginLeft:5, borderWidth:0.5, borderColor:'#dddddd', backgroundColor:"black"}}>
   
   <ScrollView horizontal={true} >
    {props.movies.map((movie, index) => 
    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true} >
        <TouchableOpacity  style={styles.buttonStyle}>
     
            <Image
               style={{flex:1, height:null, width:150}}
        source={{uri:getPostURL(movie.poster_path)}} 
      />

</TouchableOpacity>
     </ScrollView>
     
     </View>
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight onPress={() =>addFavourites(movie)}>
        <View style={styles.button}>
          <Text>Add To Favourites</Text>
          <Text>{movie.title}</Text>
        </View>
        </TouchableHighlight>
        </TouchableOpacity>
        </TouchableOpacity>

     
     )}
       </ScrollView>
     </View>
    
     </SafeAreaView>
      

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
        height:200,
         width:500,
         borderWidth:1,
         borderColor:'#dddddd',
         position:'relative',
      
         
      },
      buttonStyle: {
        marginLeft:2,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: '#141414',
        width: 150
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },

})