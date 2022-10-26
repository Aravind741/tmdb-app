import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MovieCard from './MovieCard';
import TopRated from './TopRated';
import NowPlay from './NowPlay';
import { Stack, Avatar } from "@react-native-material/core";
import { Surface, FAB } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-native-material/core";
import SearchBox from './SearchBox';
import { signOut, getAuth } from 'firebase/auth';
import Trending from './Trending'
import TvTrending from './TvTrending';
import { HStack,Spacer } from "@react-native-material/core";


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
 <HStack m={4} spacing={8}>
    <View style={{ width: 150, height: 40,  }} > <h1 style={styles.text}>TMDB MOVIE APP </h1> </View>

    <View style={{ width: 120, height: 40, }} ></View>
    <View style={{ width: 80, height: 30, }} ><Button title="logout" color='#fdf102' style={{
       textAlign: "center", fontSize:11, 
    }}  onPress={handlelogout} />
    
    </View>
  </HStack>

      
      <SearchBox />

      

      <MovieCard />


      <Trending />
      
      <TvTrending />


      <TopRated />


      <h1 style={styles.text}>Now Playing</h1>

      <NowPlay />



    </View>


  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#242526',
  },

  text: {
    color: '#fdf102',
    fontSize:15,
    alignItems:'center'
  },
  


})