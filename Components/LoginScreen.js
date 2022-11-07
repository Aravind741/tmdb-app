import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../datastore/Firebase';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";




// import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {

                navigation.navigate('Home', {
                    UID: `${user.email}`
                })
            }
        })
        return unsubscribe
    }, [])


    const auth = getAuth();
    const handleSignUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log('Login succes', user.email);

            })
            .catch(error => alert(error.message))

    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            <IconButton
                icon={props => <Icon name="account" {...props} />}
                color="black"
                style={{ backgroundColor: 'yellow', padding: 20 }}
            />

            <Text>Login</Text>



            <View style={styles.inputContainer}>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}

                />



                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />



            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={[styles.button]}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242526',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
        margin: 20,


    },

    input: {

        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20



    },
    buttonContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',



    },
    button: {

        backgroundColor: 'yellow',
        width: '50%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    },
    buttonOutline: {

        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: '2'
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,

    },
    buttonOutlineText: {

        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },


})