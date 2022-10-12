import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import React,{useState,useEffect} from 'react'

import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const Details = ({ route}) => {

  const navigation = useNavigation()
  const { id } = route.params;
    const[movieDetails,setMovieDetails] = useState([]);
console.log("huui", id)
    useEffect(()=> {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US`)
      
      .then((response)=>{setMovieDetails(response.data)})
      .catch(err =>{console.log(err)})
  
  
    },[id])

    const getPostURL = (posterpath) => {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }


    
  return (
    <SafeAreaView>


            
   
  <View style={styles.fixToText}>  
                
<TouchableOpacity style={styles.imagecontainer} >


<ScrollView horizontal={true} >
<TouchableOpacity  style={styles.buttonStyle} >

<Image
style={{flex:1, height:null, width:150}}
source={{uri:getPostURL(movieDetails.poster_path)}} 
/>

</TouchableOpacity>
</ScrollView>

<TouchableOpacity style={styles.buttonStyle}>

                <TouchableHighlight >
                    <View style={styles.button}>
                        <Text>Add To Favourites</Text>
                        <Text>{movieDetails.title}</Text>
                    </View>
                </TouchableHighlight>
            </TouchableOpacity>
            </TouchableOpacity>
                       
            </View>         
          



</SafeAreaView>

  )
}


export default Details


const styles = StyleSheet.create({})