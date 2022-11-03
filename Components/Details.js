
import { StyleSheet, Text,Image, View,SafeAreaView,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import config from '../config';


 
const Details = ({route}) => {

  const navigation = useNavigation()

  const {id,movie} = route.params;

  const [movieDetails, setMovieDetails] = useState([]);

console.log('HI',id)
  useEffect(() => {
    axios.get(`${config.MAIN_URL}/${movie}/${id}?api_key=${config.API_KEY}&language=en-US`)
    .then((response)=>{setMovieDetails(response.data)})

    .catch(err =>{console.log(err)})
  }, [id]);


  const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}


const getURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}




    
  return ( 
  <SafeAreaView>


    <View  style={styles.container}>
  
    

    <TouchableOpacity  style={styles.buttonStyle}>
    
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight >

     
    
        <View style={styles.button}>

{/* backdrop img part */}
        <ImageBackground
           style={{opacity:1}}
           source={{uri: getURL(movieDetails.backdrop_path)}}
        >


{/* image part */}
<View style={styles.imagecontainer}>
    <Image
       style={{flex:1,opacity:1, borderRadius:20,}}
source={{uri: getPostURL(movieDetails.poster_path)}} >
</Image>
</View>


{/* details card part */}
      <View style={{margin: '20px',
  backgroundColor: '#ffffff',
  opacity: 0.8,borderRadius:20,padding:10}}>

        <Text style={styles.title}>
          {movieDetails.title||movieDetails.name}
          </Text>

        <View style={styles.others}>
        {movieDetails.release_date||movieDetails.first_air_date}
          </View>

<br />

        <View style={styles.overview}>
      <Text style={{fontFamily:'times-new-roman',color:'black',marginLeft:10,fontSize:20,fontWeight:'bold'}}>Overview:</Text> <br></br> 
      <View style={{marginLeft:10}}>  {movieDetails.overview}</View>
        </View>
       <br />

        <View>
       <Text style={{fontFamily:'times-new-roman',color:'black',fontSize:20,fontWeight:'bold'}}> Popularity:</Text> 
       <View style={{marginLeft:10}}> {movieDetails.popularity}</View>
        </View>

        <br />

        <View>
        <Text  style={{fontFamily:'times-new-roman',color:'black',fontSize:20,fontWeight:'bold'}}> Vote Count:</Text>
        <View style={{marginLeft:10}}> {movieDetails.vote_count}</View>
        </View>
<br />
        
       <View>
        <Text  style={{fontFamily:'times-new-roman',color:'black',fontSize:20,fontWeight:'bold'}}> Status:</Text>
        <View style={{marginLeft:10}}> {movieDetails.status}</View>
        </View>
<br />
        <View>
        <Text  style={{fontFamily:'times-new-roman',color:'black',fontSize:20,fontWeight:'bold'}}> Rating:</Text>
        
        
        <View style={{marginLeft:10}}>{movieDetails.vote_average}
        </View>
        </View>

        </View>
      </ImageBackground>
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
    height:500,
     width:350,
     margin:'auto',
     padding:20,
    
     
  },
  
  button: {
    alignItems: "center",
    backgroundColor: '#242526',
    color:'black',
   
    

  },

  title:{
    textAlign:'center',
    color:'black',
    fontFamily:'sans-serif',
    marginTop:15,
     fontWeight:'bold',
     fontSize:20
   
      

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