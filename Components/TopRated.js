import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { Flex, HStack,Spacer,Box,Button } from "@react-native-material/core";
import axios from 'axios';

const TopRated = () => {

  const { top, setTop} =useContext(AppContext);  
  const[movieTop,setMovieTop] = useState([]);
  const[count,setCount] = useState(0);


  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=de93eb585060bf0531bc637876b11f0e&language=en-US&page=1')
    
    .then((response)=>{setMovieTop(response.data.results)})

    .catch(err =>{console.log(err)})


 },[])
  const navigation = useNavigation()


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

    <View>
      <HStack m={4} spacing={6}>
    <View style={{ width: 80, height: 40,   marginHorizontal:4 }} > <h1 style={styles.text}>TopRated </h1> </View>
    <View style={{ width: 80, height: 40, }} > <Button title="movies" variant="text" color='#fdf102'   style={{
       textAlign: "center", fontSize:15,
    }}   onPress={onClick}  />
      
    </View> 
    <View style={{ width: 80, height: 40, }} > <Button title="onTV"  variant="text" color='#fdf102' style={{
       textAlign: "center", fontSize:15,
    }}   onPress={onClick1}  /></View>
    <View style={{ width: 80, height: 40, }} ></View>
  </HStack>
  <Flex fill>
  <Box  m={4} style={{alignContent:'flex-end'}}  >
    <SafeAreaView>
    <View style={{height:300}}>
   
   <ScrollView horizontal={true} >
   <HStack m={0} spacing={10}>

    {count===0 && top.map((top, index) => 
    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true} >
        <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
          navigation.navigate('Details',{ 
            id:`${top.id}`,
           
            }) 
            } }>
     
            <Image
               style={{flex:1, height:null, width:150,}}
        source={{uri:getPostURL(top.poster_path)}} 
      />





<View style={styles.button}>

<Text style={styles.title}> 
  {top.title}
  </Text>

  <View style={styles.others}>
{top.release_date}
</View>




</View>






</TouchableOpacity>
     </ScrollView>
     
     </View>
     <TouchableOpacity  >

      
        </TouchableOpacity>
        </TouchableOpacity>

     
     )}

{count===1 && movieTop.map((topmov, index) => 
           <TouchableOpacity  style={styles.buttonStyle} >
           <View style={styles.imagecontainer}>
           
               <ScrollView horizontal={true}>
                 
               <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
                 navigation.navigate('Tvdetails',{ 
                   id:`${topmov.id}`,
                   
                   }) 
                   } } >
            
               
       
                   <Image
                      style={{flex:1, height:null, width:150,}}
               source={{uri: getPostURL(topmov.poster_path)}} >
             </Image>
       
       
       
            
             <View style={styles.button}>
       
       <Text style={styles.title}>
         {topmov.name}
         </Text>
       
       <View style={styles.others}>
         {topmov.first_air_date}
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
     </Flex>
     </View> 

  )
}


export default TopRated

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
      },
      text: {
        color: 'white',
        fontSize:15,
        marginHorizontal:4
      }

})