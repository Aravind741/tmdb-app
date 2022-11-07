import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../App';
import MovieCard from '../Components/MovieCard';


const NowPlay = () => {

  const title = "Now Playing";
  const { nows } = useContext(AppContext);
  const mov = 'movie';
  const tv = 'tv'




  return (
    <View style={styles.container}>
      <MovieCard movies={nows} title={title} mov={mov} tv={tv} />
    </View>

  )
}


export default NowPlay

const styles = StyleSheet.create({


  container: {
   
      marginTop:60,
      height:300,
      width:400
  

  },
  imagecontainer: {
    height: "100%",
    width: "100%",
    borderRadius: 10


  },
  buttonStyle: {

    borderWidth: 2,
    borderColor: '#fdf102',
    width: 150,
    borderRadius: 10,
    marginHorizontal: 4
  },
  button: {
    alignItems: "center",
    backgroundColor: "#051E34",
    color: 'white',
  },

  title: {
    textAlign: 'center',
    color: 'white',

    marginTop: 15,

  },
  others: {
    fontSize: 15,
    margin: 10,

  },
  rate: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 40,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginHorizontal: 4,
    alignItems: 'center'
  },

})