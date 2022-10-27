import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,Button } from 'react-native'
import React, { useContext,useState,useEffect } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';
import { HStack,Spacer } from "@react-native-material/core";

import axios from 'axios';

const TvTrending = () => {
  const navigation = useNavigation()


  const { movies, setMovies} =useContext(AppContext);   
  const[todayTrending,setTodayTrending] = useState([]);
  const[weekTrending,setWeekTrending] = useState([]);

  const[count,setCount] = useState(0);


  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=de93eb585060bf0531bc637876b11f0e')
    
    .then((response)=>{setTodayTrending(response.data.results)})

    .catch(err =>{console.log(err)})


 },[])
 console.log("list", todayTrending)

 useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=de93eb585060bf0531bc637876b11f0e')
    
    .then((response)=>{setWeekTrending(response.data.results)})

    .catch(err =>{console.log(err)})


 },[])
 console.log("list", weekTrending)

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
    <View style={{ width: 130, height: 40,  }} > <h1 style={styles.text}>Trending Tv shows</h1> </View>
    <View style={{ width: 80, height: 40, }} ><Button title="Today" style={{
       textAlign: "center", fontSize:15
    }}  onPress={onClick} />
    
    </View> 
    <View style={{ width: 90, height: 40, }}> <Button title="thisWeek" style={{
       textAlign: "center", fontSize:15
    }}  onPress={onClick1} /></View>
    <View style={{ width: 80, height: 40, }} ></View>
  </HStack>

    <SafeAreaView>
{/*Here we will return the view when state is true 
        and will return false if state is false*/}
      


    <View style={{height:300, width:600,}}>
  
   
   <ScrollView horizontal={true} >

   <HStack m={0} spacing={10}>
    
<>
    {count===0 && todayTrending.map((today, index) => 
    <TouchableOpacity  style={styles.buttonStyle} >
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true}>
          
        <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
          navigation.navigate('Tvdetails',{ 
            id:`${today.id}`,
           
            }) 
            } } >
     
        

            <Image
               style={{flex:1, height:null, width:150,}}
        source={{uri: getPostURL(today.poster_path)}} >
      </Image>



     
      <View style={styles.button}>

<Text style={styles.title}>
  {today.title}
  </Text>

<View style={styles.others}>
  {today.release_date}
  </View>

</View>


</TouchableOpacity>
     </ScrollView>
     
     </View>
        
        </TouchableOpacity>

     
     )}
     
     {count===1 && weekTrending.map((week, index) => 
           <TouchableOpacity  style={styles.buttonStyle} >
           <View style={styles.imagecontainer}>
           
               <ScrollView horizontal={true}>
                 
               <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
                 navigation.navigate('Tvdetails',{ 
                   id:`${week.id}`,
                  
                   }) 
                   } } >
            
               
       
                   <Image
                      style={{flex:1, height:null, width:150,}}
               source={{uri: getPostURL(week.poster_path)}} >
             </Image>
       
       
       
            
             <View style={styles.button}>
       
       <Text style={styles.title}>
         {week.title}
         </Text>
       
       <View style={styles.others}>
         {week.release_date}
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
     </View>
      

  )
}


export default TvTrending

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
      },
      text: {
        color: 'white',
        fontSize:15
      }
    

})
