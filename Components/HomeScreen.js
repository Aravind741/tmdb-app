import { StyleSheet, Text, View } from 'react-native'
import TopRated from '../Components/TopRated';
import NowPlay from '../Components/NowPlay';
import Popular from '../Components/Popular';
import { useNavigation } from '@react-navigation/native';
import { Button,HStack,Flex } from "@react-native-material/core";
import SearchBox from '../Components/SearchBox';
import { signOut, getAuth } from 'firebase/auth';
import Trending from '../Components/Trending'
import TvTrending from '../Components/TvTrending';
import BackdropPath from '../Components/BackdropPath';
import { ScrollView,Image } from 'react-native';
import logo from './Images/tmdb.jpg'


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

<Flex style={{ flexDirection: 'row-reverse' }}>
<HStack m={4} spacing={8} style={{ alignContent: 'space-around' }}  >




<Image
        style={{height:40,width:40,marginTop:50,borderRadius:20,}}
        source={logo}
      />
      <Text style={styles.text}>TMDB MOVIE APP</Text>


      <View style={{ justifyContent: 'flex-start', borderRadius: 10 }}>
        <Button title="logout" color='#fdf102' variant="text" compact style={{
        textAlign: "center", fontSize: 11, margin:'auto', borderRadius: 10,marginTop:10
      }} onPress={handlelogout} />

      </View>


      </HStack>
      </Flex>
      <ScrollView vertical='true'>
      <BackdropPath />
      <SearchBox />

      
      <Popular />


      <TopRated />




      <NowPlay />


      <Trending />

      <TvTrending />



      </ScrollView>

    </View>


  )
}

export default HomeScreen

const styles = StyleSheet.create({


  container: {
    backgroundColor: '#242526',
    margin:'auto',
    alignContent: 'flex-end',
    
    

  },
  text: {
    color: 'black',
    fontSize: 20,
    color:'white',
    marginTop:55,
    
   
  },



})