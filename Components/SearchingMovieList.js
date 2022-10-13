import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'

import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigation } from '@react-navigation/native';


const SearchingMovieList = () => {
    const navigation = useNavigation()
    const { searchValue, setSearchValue, movieList, setMovieList } = useContext(AppContext);

    const getPostURL = (posterpath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
    }


    return (
        <SafeAreaView>


            
                    {movieList.map((mov, index) =>
                  <View style={styles.fixToText}>  
                                
<TouchableOpacity style={styles.imagecontainer} >

    
    <ScrollView horizontal={true} >
    <TouchableOpacity  style={styles.buttonStyle} onPress={() => {
        navigation.navigate('Details', {
            id:`${mov.id}` 
            });
             }} >
 
        <Image
           style={{flex:1, height:300, width:150}}
    source={{uri:getPostURL(mov.poster_path)}} 
  />

</TouchableOpacity>
 </ScrollView>





                <TouchableOpacity style={styles.buttonStyle}>

                                <TouchableHighlight >
                                    <View style={styles.button}>
                                        <Text>Add To Favourites</Text>
                                        <Text>{mov.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            </TouchableOpacity>
                            </TouchableOpacity>
                                       
                            </View>         
                          


                    )}
             
        </SafeAreaView>
    )
}

export default SearchingMovieList

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
        backgroundColor: "#DDDDDD",
        padding: 10
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})                                                                                      