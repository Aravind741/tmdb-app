
import { StyleSheet, Text,Image, View,SafeAreaView,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Surface, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



 
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
               style={{flexDirection:'row',flex:1}}
        source={{uri: getPostURL(movieDetails.poster_path)}} >
      </Image>
    
    
      
     </View>
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight >

     
    
        <View style={styles.button}>


        <Surface
      elevation={6}
      category="medium"
     style={{backgroundColor:'yellow',padding:30}}
    >
      
        <Text style={styles.title}>
          {movieDetails.title}
          </Text>

        <View style={styles.others}>
        {movieDetails.release_date}
          </View>

<br />

        <View style={styles.overview}>
      <Text style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Overview:</Text> <br></br> 
          {movieDetails.overview}
        </View>
       <br />

        <View>
       <Text style={{fontWeight:'bold',fontFamily:'sans-serif'}}> Popularity:</Text> {movieDetails.popularity}
        </View>

        <br />

        <View>
        <Text  style={{fontWeight:'bold',fontFamily:'sans-serif'}}> Vote Count:</Text>{movieDetails.vote_count}
        </View>
<br />
        
       <View>
        <Text  style={{fontWeight:'bold',fontFamily:'sans-serif'}}> Status:</Text>{movieDetails.status}
        </View>
<br />
        <View>
        <Text  style={{fontWeight:'bold',fontFamily:'sans-serif'}}> Rating:</Text>{movieDetails.vote_average}
        </View>

      </Surface>
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
   backgroundColor:'#242526',
    

  },
  imagecontainer: {
    height:400,
     width:300,
     margin:'auto',
     padding:20,
  
     
  },
  
  button: {
    alignItems: "center",
    backgroundColor: '#242526',
    color:'black',
    padding:40,


  },

  title:{
    textAlign:'center',
    color:'black',
    fontFamily:'sans-serif',
    marginTop:15,
     fontWeight:'bold',
     fontSize:25,    

  },
  others:{
    fontFamily:'cursive',
    alignItems:'center',
  },
  rate:{
    backgroundColor:'green',
    borderRadius:10,
    width:40,
    textAlign:'center',
  },

  overview:{
    fontFamily:'sans-serif',
    fontWeight:'50',

  }

})