import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useContext} from 'react'
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { HStack,Flex,Box } from "@react-native-material/core";
import MovieCard from './MovieCard';


const NowPlay = () => {

  const title="Now Playing";
  const { nows} =useContext(AppContext);  
  const mov = 'movie';
  const tv = 'tv'
 



  return (
    <View>
    <MovieCard  movies={nows}  title={title}   mov={mov} tv={tv}/>
     </View>

  )
}


export default NowPlay

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
            marginHorizontal:4,
        alignItems:'center'
      },

})