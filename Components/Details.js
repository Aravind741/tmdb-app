
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import config from '../config';
import { ScrollView } from 'react-native';



const Details = ({ route, navigation }) => {

 

  const { id, movie } = route.params;

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    axios.get(`${config.MAIN_URL}/${movie}/${id}?api_key=${config.API_KEY}&language=en-US`)
      .then((response) => { setMovieDetails(response.data) })

      .catch(err => { console.log(err) })
  }, [id]);


  const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }


  const getURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }





  return (
    <SafeAreaView>


      <View style={styles.container}>



        <TouchableOpacity style={styles.buttonStyle}>

          <TouchableOpacity style={styles.buttonStyle}>
            <TouchableHighlight >


            
              <View style={styles.button} >
<ScrollView>
                {/* backdrop img part */}
                <ImageBackground
                  style={{ opacity: 1 }}
                  source={{ uri: getURL(movieDetails.backdrop_path) }}
                  
                >


                  {/* image part */}
                  <View style={styles.imagecontainer}>
                    <Image
                      style={{ flex: 1, opacity: 1, borderRadius: 20, }}
                      source={{ uri: getPostURL(movieDetails.poster_path) }} >
                    </Image>
                  </View>


                  {/* details card part */}
                  <View style={{
                    margin:'auto',
                    backgroundColor: '#ffffff',
                    opacity: 0.8,padding:10, 
                  }}>

                    <Text style={styles.title}>{movieDetails.title || movieDetails.name}</Text>

                    <Text style={styles.title}>{movieDetails.release_date || movieDetails.first_air_date}</Text>

                    

                    <View style={styles.overview}>
                      <Text style={{ color: 'black', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Overview:</Text>
                      <Text style={{ marginLeft: 10 }}>{movieDetails.overview}</Text>
                    </View>
                    

                    <View>
                      <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 10,marginTop:10 }}>Popularity:</Text>
                      <Text style={{ marginLeft: 10 }}>{movieDetails.popularity}</Text>
                    </View>

                   

                    <View>
                      <Text style={{  color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 10,marginTop:10 }}>Vote Count:</Text>
                      <Text style={{ marginLeft: 10 }}>{movieDetails.vote_count}</Text>
                    </View>
                 

                    <View>
                      <Text style={{  color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 10,marginTop:10 }}>Status:</Text>
                      <Text style={{ marginLeft: 10 }}>{movieDetails.status}</Text>
                    </View>
                    
                    <View>
                      <Text style={{  color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 10,marginTop:10 }}>Rating:</Text>

                      <Text style={{ marginLeft: 10 }}>{movieDetails.vote_average}</Text>
                    </View>
                    
                  </View>
                  
                </ImageBackground>
                </ScrollView>
              </View>
            
            </TouchableHighlight>
          </TouchableOpacity>
        </TouchableOpacity>




      </View>




    </SafeAreaView>

  )
}


export default Details


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242526',


  },
  imagecontainer: {
    height: 500,
    margin:'auto',
    padding:40
   


  },

  button: {
    alignItems: "center",
    backgroundColor: '#242526',
    color: 'black',



  },

  title: {
    textAlign: 'center',
    color: 'black',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20



  },
  others: {

   textAlign:'center',
   
  },
  rate: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 40,
    textAlign: 'center',
  },

  overview: {
  
    fontWeight: '50',

  }

})