import { StyleSheet, Text,Image, View,SafeAreaView,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useContext} from 'react'
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';


const TopRated = () => {

  const { top, setTop} =useContext(AppContext);  

  const navigation = useNavigation()


 const getPostURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}





  return (

    <SafeAreaView>
    <View style={{height:300, width:600, marginLeft:5, borderWidth:1, borderColor:'#dddddd',}}>
   
   <ScrollView horizontal={true} >
    {top.map((top, index) => 
    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true} >
        <TouchableOpacity  style={styles.buttonStyle}  onPress={() => {
          navigation.navigate('Details',{ 
            id:`${top.id}`
            }) 
            } }>
     
            <Image
               style={{flex:1, height:null, width:150}}
        source={{uri:getPostURL(top.poster_path)}} 
      />

</TouchableOpacity>
     </ScrollView>
     
     </View>
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight onPress={() =>addFavourites(top)}>

        <View style={styles.button}>

          <Text style={styles.title}> 
            {top.title}
            </Text>

            <View style={styles.others}>
          {top.release_date}
          </View>

          <View style={styles.rate}>
          {top.vote_average}*
          </View>


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


export default TopRated

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
        backgroundColor: "#051E34",
        color:'white',
        paddingBottom:40,
      },

      title:{
        textAlign:'center',
        color:'white',
        fontFamily:'verdana',
        marginTop:15,

      },
      others:{
        fontFamily:'cursive',
      },
      rate:{
        backgroundColor:'green',
        borderRadius:10,
        width:40,
        textAlign:'center',
      }

})