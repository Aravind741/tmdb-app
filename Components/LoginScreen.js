import React ,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import {  getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../datastore/Firebase';
import { useNavigation } from '@react-navigation/native';


// import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(user =>{
        if (user) {
            
                navigation.navigate('Home',{
            UID:`${user.email}`
        })
        }
    })
    return  unsubscribe
},[])


    const auth = getAuth();
    const handleSignUp = () => {
 
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user =userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log('Login succes',user.email);
    
  })
  .catch(error => alert(error.message))

    }
   

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            <View style={styles.inputContainer}>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText = {text => setEmail(text) }
                    style={styles.input}
                />



                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText = {text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />



            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}> Login</Text>
                </TouchableOpacity>


                <TouchableOpacity
                 style={[styles.button, styles.buttonOutline]}
                 onPress= {handleSignUp}  
                >
                    <Text style={styles.buttonOutlineText}> Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%'
    },

    input: {

        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5



    },
    buttonContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,

    },
    button: {

        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {

        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: '2'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {

        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },


})