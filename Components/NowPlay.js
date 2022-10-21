import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useContext} from 'react'
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { HStack, } from "@react-native-material/core";


const NowPlay = () => {

 
  const { nows, setNows} =useContext(AppContext);  

  const navigation = useNavigation()


 const getPostURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}





  return (

    <SafeAreaView>
   <View style={{height:300, width:600,}}>
   
   <ScrollView horizontal={true} >

   <HStack m={0} spacing={10}>

    {nows.map((now, index) => 
    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true} >
        <TouchableOpacity  style={styles.buttonStyle} onPress={() => {
          navigation.navigate('Details',{ 
            id:`${now.id}`
            }) 
            } }>
     
            <Image
               style={{flex:1, height:null, width:150}}
        source={{uri:getPostURL(now.poster_path)}} 
      />




<View style={styles.button}>

<Text style={styles.title}> 
  {now.title}
  </Text>

  <View style={styles.others}>
{now.release_date}
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
        height:300,
        width:600,
    
         
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
      }

})