import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MovieCard from './MovieCard';
import TopRated from './TopRated';
import NowPlay from './NowPlay';

import { Badge,  } from "@react-native-material/core";

import {WidthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Stack, Avatar } from "@react-native-material/core";
import { Surface, FAB } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-native-material/core";

import SearchBox from './SearchBox';
import { signOut, getAuth } from 'firebase/auth';
import Trending from './Trending'
import TvTrending from './TvTrending';
import { HStack, Flex, Box, Spacer } from "@react-native-material/core";


const HomeScreen = ({ route }) => {

  const navigation = useNavigation()

  const { UID } = route.params;
  console.log('hiiiii', UID)
  const auth = getAuth();
  const handlelogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login')
      })

  }


  return (


    <View style={styles.container}>
     
  <Flex style={{flexDirection:'row-reverse'}}>
 <HStack m={4} spacing={8} style={{alignContent:'space-around'}}  >
    <View style={{ width: 150,   }} > <h1 style={styles.text}>TMDB MOVIE APP </h1> </View>

   
    <View style={{ justifyContent:'flex-start', borderRadius:10}} ><Button title="logout" color='#fdf102' variant="text"  compact style={{
       textAlign: "center", fontSize:11, marginEnd: 4 , borderRadius:10
    }}    onPress={handlelogout} />
    
    </View>
  </HStack>
</Flex>
      
<SearchBox />


      

      <MovieCard />


      <Trending />
      
      <TvTrending />


      <TopRated />


      

      <NowPlay />



    </View>


  )
}

export default HomeScreen

const styles = StyleSheet.create({


  container:{
    backgroundColor:'#242526',
   
    alignContent:'flex-end'
  

  },
  text: {
    color: 'white',
        fontSize:15,
        marginHorizontal:4,
    alignItems:'center'
  },
  


})