import { StyleSheet, View, SafeAreaView, Text,ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App'
import {  Button,HStack } from '@react-native-material/core';
import {
  Backdrop,
 
  AppBar,
  
} from "@react-native-material/core";


const BackdropPath = () => {

  const navigation = useNavigation()
  const [revealed, setRevealed] = useState(true);
  const {  genre, setGenre,setTvGenre } = useContext(AppContext);

  const onPress1 = () => {
    setGenre(28)


  }
  const onPress2 = () => {
    setGenre(12)


  }
  const onPress3 = () => {
    setGenre()


  }
  const onPress4 = () => {
    setGenre(16)


  }
  const onPress5 = () => {
    setGenre(35)

  }
  const onPress6 = () => {
    setGenre(80)


  }
  const onPress7 = () => {
    setGenre(10751)


  }
  const onPress8 = () => {
    setGenre(27)


  }

 
  const onPressed1 = () => {
    setTvGenre(18)


  }
  const onPressed2 = () => {
    setTvGenre(16)


  }
  const onPressed3 = () => {
    setTvGenre(35)


  }
  const onPressed4 = () => {
    setTvGenre(80)

  }
  const onPressed5 = () => {
    setTvGenre(10751)


  }
  const onPressed6 = () => {
    setTvGenre(10762)


  }
  const onPressed7 = () => {
    setTvGenre(10763)


  }



  return (




    <SafeAreaView >
     
      <ScrollView horizontal={true} style={{ alignContent: 'space-around'}}  >
      <View style={styles.full}>

      

          <Backdrop style={styles.backdropp}
            revealed={revealed}
            header={
              <AppBar
                
                transparent
                
              />
            }
            backLayer={
              <View>
                 <HStack m={4} spacing={10}>
                  <View style={{width:110,height:40,marginHorizontal:4}}>
                 <Text style={styles.text}>Movie Genres</Text>
                 </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Action' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15
                }} onPress={onPress1} />
                </View>
                
                <View style={{ width: 90, height: 40, }}>
                  <Button title='Adventure' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 9, borderColor: '#fdf102'
                }} onPress={onPress2} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Animation' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 9, borderColor: '#fdf102'
                }} onPress={onPress4} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Comedy' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPress5} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Crime' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPress6} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Family' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPress7} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Horror' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPress8} />
                </View>
                </HStack>

                <HStack m={4} spacing={10}>
                <View style={{width:110,height:40,marginHorizontal:4}}>
                 <Text style={styles.text}>Tv Genres</Text>
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Drama' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15
                }} onPress={onPressed1} />
                </View>

                <View style={{ width: 90, height: 40, }}>
                  <Button title='Animation' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 9, borderColor: '#fdf102'
                }} onPress={onPressed2} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Comedy' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 9, borderColor: '#fdf102'
                }} onPress={onPressed3} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Crime' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPressed4} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Family' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPressed5} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='Kids' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPressed6} />
                </View>
                <View style={{ width: 90, height: 40, }} >
                  <Button title='News' variant="text" color='#fdf102' style={{
                  textAlign: "center", fontSize: 15, borderColor: '#fdf102'
                }} onPress={onPressed7} />
                </View>
                </HStack>
              </View>
            
            }
          >
     

           
          </Backdrop>

         

        
      </View>
      </ScrollView>
      
    </SafeAreaView>



  )
}

export default BackdropPath

const styles = StyleSheet.create({

  full: {
    backgroundColor: '#242526',

  },
  backdropp: {
    backgroundColor: '#242526',
    textDecorationColor: '#fdf102',
    borderColor: '#fdf102'
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginHorizontal: 4
  }

})