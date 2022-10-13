import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MovieCard from './MovieCard';

import TopRated from './TopRated';
import NowPlay from './NowPlay';
import { useNavigation } from '@react-navigation/native';

import SearchBox from './SearchBox';
import { signOut, getAuth } from 'firebase/auth';

const HomeScreen = ({route}) => {

  const navigation = useNavigation()

  const {UID} = route.params;
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
 <TouchableOpacity style={styles.text} onPress={handlelogout}
                    
                >
                    <Text style={styles.text}> Logout</Text>
                </TouchableOpacity>
 <SearchBox />
  <h1 style={styles.text}>Popular</h1>

   <MovieCard   />

  <h1 style={styles.text}>Top Rated</h1>

    <TopRated />


    <h1 style={styles.text}>Now Playing</h1>

<NowPlay />



</View>
       
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container:{
    backgroundColor:'black',

  },

  text:{
    color:'white',
  }


})