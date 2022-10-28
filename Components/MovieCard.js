import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React, { useContext,useState,useEffect } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import { HStack,Box,Flex , Button} from "@react-native-material/core";

import axios from 'axios';

const MovieCard = () => {
  const navigation = useNavigation()


  const { movies, setMovies} =useContext(AppContext);   
  const[movieUpdate,setMovieUpdate] = useState([]);
  const[count,setCount] = useState(0);


  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1')
    
    .then((response)=>{setMovieUpdate(response.data.results)})

    .catch(err =>{console.log(err)})


 },[])
 console.log("list", movieUpdate)

const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const onClick1  = () => {
 setCount(count-count+1)
console.log("onclick", count)
 
}
const onClick  = () => {
  setCount(count-count+0)
 console.log("onclick", count)
  
 }





  return (
   < View>
    <HStack m={4} spacing={6}>
    <View style={{ width: 80, height: 40, marginHorizontal:4,  }} > <h1 style={styles.text}>Popular </h1> </View>
    <View style={{ width: 80, height: 40, }} ><Button title="movies" variant="text" color='#fdf102' style={{
       textAlign: "center", fontSize:15
    }}  onPress={onClick} />
    
    </View> 
    <View style={{ width: 80, height: 40, }}> <Button title="onTV" variant="text" color='#fdf102' style={{
       textAlign: "center", fontSize:15, borderColor:'#fdf102'
    }}  onPress={onClick1} /></View>
    <View style={{ width: 80, height: 40, }} ></View>
  </HStack>
  <Flex fill>
    <Box  m={4} style={{alignContent:'flex-end'}}  >

    <SafeAreaView>
{/*Here we will return the view when state is true 
        and will return false if state is false*/}
      


    <View style={{height:300}}>
  
   
   <ScrollView horizontal={true} >

   <HStack m={0} spacing={10}>
    
<>
    {count===0 && movies.map((movie, index) => 
    <TouchableOpacity  style={styles.buttonStyle} >
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true}>
          
        <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
          navigation.navigate('Details',{ 
            id:`${movie.id}`,
        
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
     
     {count===1 && movieUpdate.map((movieup, index) => 
           <TouchableOpacity  style={styles.buttonStyle} >
           <View style={styles.imagecontainer}>
           
               <ScrollView horizontal={true}>
                 
               <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
                 navigation.navigate('Tvdetails',{ 
                   id:`${movieup.id}`,
         
                   }) 
                   } } >
            
               
       
                   <Image
                      style={{flex:1, height:null, width:150,}}
               source={{uri: getPostURL(movieup.poster_path)}} >
             </Image>
       
       
       
            
             <View style={styles.button}>
       
       <Text style={styles.title}>
         {movieup.title}
         </Text>
       
       <View style={styles.others}>
         {movieup.release_date}
         </View>
       
       </View>
       
       
       </TouchableOpacity>
            </ScrollView>
            
            </View>
               
               </TouchableOpacity>
       
            
            )}


        </>
        
          </HStack>

       </ScrollView>
     </View> 
       

      

       
     </SafeAreaView>

     </Box>
     </Flex>
     </View>
      


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
         
         borderRadius:10
      
         
      },
      buttonStyle: {
        
        borderWidth: 2,
        borderColor: '#fdf102',
        width: 150,
        borderRadius:10,
        marginHorizontal:4
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
      },
      text: {
        color: 'white',
        fontSize:15,
        marginHorizontal:4
      }
    

})

