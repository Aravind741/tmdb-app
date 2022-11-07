import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {  useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { HStack, Flex, Button } from "@react-native-material/core";


const MovieCard = ({ movies, movieUpdate, title, buttonTitle1, buttonTitle2, mov, tv }) => {
  const navigation = useNavigation()


 
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(0);

  const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }

  const onClick1 = () => {
    setCount(count - count + 1)
   

  }
  const onClick = () => {
    setCount(count - count + 0)
    

  }





  return (
    < View>
      <HStack m={4} spacing={6}>
        <Text style={styles.text}>{title}</Text>
        <View style={{ width: 80, height: 40, }} >
          <Button title={buttonTitle1} variant="text" color='#fdf102' style={{
          textAlign: "center", fontSize: 15
        }} onPress={onClick} />
        </View>

        <View style={{ width: 80, height: 40, }}>
          <Button title={buttonTitle2} variant="text" color='#fdf102' style={{
          textAlign: "center", fontSize: 15, borderColor: '#fdf102'
        }} onPress={onClick1} />
        </View>

      </HStack>
      <Flex fill>


        <SafeAreaView>
          {/*Here we will return the view when state is true 
        and will return false if state is false*/}



          <View style={{ height: 300 }}>


            <ScrollView horizontal={true} >




              {count === 0 ? movies.map((movie, index) =>
                <TouchableOpacity style={styles.buttonStyle} >
                  <View style={styles.imagecontainer}>

                    <ScrollView horizontal={true}>

                      <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                        {
                          count === 0 ? navigation.navigate('Details', {
                            id: `${movie.id}`,
                            movie: `${mov}`

                          }):null
                        }
                      }} >



                        <Image
                          style={{ flex: 1, height: null, width: 150, }}
                          source={{ uri: getPostURL(movie.poster_path) }} >
                        </Image>




                        <View style={styles.button}>

                          <Text style={styles.title}>{movie.title || movie.name}</Text>

                          <Text style={styles.others}>{movie.release_date || movie.first_air_date}</Text>

                        </View>


                      </TouchableOpacity>
                    </ScrollView>

                  </View>

                </TouchableOpacity>


              ):null}

              {count === 1 ? movieUpdate.map((movieup, index) =>
                <TouchableOpacity style={styles.buttonStyle} >
                  <View style={styles.imagecontainer}>

                    <ScrollView horizontal={true}>

                      <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                        {
                          count === 1 ? navigation.navigate('Details', {
                            id: `${movieup.id}`,
                            movie: `${tv}`

                          }):null
                        }
                      }} >


                        <Image
                          style={{ flex: 1, height: null, width: 150, }}
                          source={{ uri: getPostURL(movieup.poster_path) }} >
                        </Image>




                        <View style={styles.button}>

                          <Text style={styles.title}>{movieup.name || movieup.title}</Text>

                          <Text style={styles.others}>{movieup.first_air_date || movieup.release_date}</Text>

                        </View>


                      </TouchableOpacity>
                    </ScrollView>

                  </View>

                </TouchableOpacity>


              ):null}






            </ScrollView>
          </View>





        </SafeAreaView>


      </Flex>
    </View>



  )
}


export default MovieCard

const styles = StyleSheet.create({


  container: {
    flex: 1,
    paddingTop: 50,
    height: 400,
    width: 500,


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
    padding: 10,
  },

  title: {
    textAlign: 'center',
    color: 'white',



  },
  others: {
    fontSize: 15,
    margin: 10,
    color:'white',
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
    marginHorizontal: 4
  }


})

