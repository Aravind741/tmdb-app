import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';

const SearchingMovieList = () => {
  const navigation = useNavigation()
  const { searchValue, setSearchValue, movieList, setMovieList } = useContext(AppContext);

  const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }
  const movie1 = 'movie';

  return (
    <View style={styles.container}>



      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop:70


        }}>

<>
        {movieList.map((mov, index) =>


          <TouchableOpacity onPress={() => {
            navigation.navigate('Details', {
              id: `${mov.id}`,
              movie: `${movie1}`
            })
          }} >



            <Image
              style={{ height: 300, width: 200, margin: 'auto' }}
              source={{ uri: getPostURL(mov.poster_path) }} >
            </Image>




            <View style={styles.button}>

              <Text style={styles.title}>{mov.title}</Text>
              <Text style={styles.others}>{mov.release_date}</Text>

            </View>

          </TouchableOpacity>









        )}
         </>
      </ScrollView>
    </View>


  )
}

export default SearchingMovieList

const styles = StyleSheet.create({


  container: {

  },

  buttonStyle: {
    marginLeft: 2,
    borderWidth: 1,
    width: 150,

  },
  button: {
    alignItems: "center",
    backgroundColor: "#051E34",
    color: 'white',
    padding: 10,
    width: 200,
    margin: 'auto',

  },

  title: {
    textAlign: 'center',
    color: 'white',
    marginTop: 15,


  },
  others: {
    fontSize: 15,
    margin: 10,
    color:'white'
  },
  rate: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 40,
    textAlign: 'center',
  },



})

