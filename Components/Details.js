
import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useState,useEffect} from 'react'

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';




const Details = ({route}) => {

  const navigation = useNavigation()

  const {id} = route.params;

  const [movieDetails, setMovieDetails] = useState([]);

console.log('HI',id)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US`)
    .then((response)=>{setMovieDetails(response.data)})

    .catch(err =>{console.log(err)})
  }, [id]);


  const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}





    
  return (
    <SafeAreaView>


    <View  style={styles.container}>
   

    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    

            <Image
               style={{flex:1, height:null, borderRadius:50,width:300,margin:40,}}
        source={{uri: getPostURL(movieDetails.poster_path)}} >
      </Image>
     
     
     
     </View>
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight >

     
        <View style={styles.button}>

        <Text style={styles.title}>
          {movieDetails.title}
          </Text>

        <View style={styles.others}>
          {movieDetails.release_date}
          </View>

        <View style={styles.overview}>
          {movieDetails.overview}
        </View>
       
        <View>
         Popularity:{movieDetails.popularity}
        </View>
        

        </View>

        </TouchableHighlight>
        </TouchableOpacity>
        </TouchableOpacity>

     
     
     
       
     </View>



</SafeAreaView>


  )
}


export default Details


const styles = StyleSheet.create({
  container: {
   backgroundColor:'black',
   width:'fit-content',


  },
  imagecontainer: {
    height:500,
     width:500,
  
     
  },
  
  button: {
    alignItems: "center",
    backgroundColor: '#024E6F',
    color:'white',


  },

  title:{
    textAlign:'center',
    color:'white',
    fontFamily:'verdana',
    marginTop:15,
    fontSize:40,
    

  },
  others:{
    fontFamily:'cursive',
  },
  rate:{
    backgroundColor:'green',
    borderRadius:10,
    width:40,
    textAlign:'center',
  },

  overview:{
    width:300,
    border:5,
    borderColor:'green',
    borderRadius:10,

  }

})