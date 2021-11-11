import React from 'react'
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, Alert } from 'react-native'
import {useState} from 'react'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'
import {apiUrl} from '../contexts/constants'
const LoginScreen = ({navigation}) => {
    const [user, setUsername] = useState('')
    const [pass, setPassword] = useState('')
    const handleSubmit = () => {
        console.log('click')
        fetch(`${apiUrl}/auth/login`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })
        .then((response) => response.json())
        .then(data => {
           if(data.success){
               navigation.navigate("Home")
               console.log("Success")
           }
           else{
            Alert.alert('Error', data.message, 
            [{text: 'Try Again', onPress: () => console.log('alert closed')}])
           }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <KeyboardAvoidingWrapper>
            <View style={styles.container}>
                <View style={styles.inputContainer}>    
                    <TextInput 
                        placeholder="Username"
                        value={user}
                        onChangeText={text => setUsername(text)}
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Password"
                        value={pass}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={[styles.button]}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Text}> Don't have an account yet ?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        zIndex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:200
    },
    inputContainer: {
        zIndex: 1,
        width: '60%'
    },
    input: {
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        zIndex: 1,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40 
    },
    button: {
        flex: 1,
        zIndex: 1,
        backgroundColor: '#314DD7',
        width: '100%',
        padding: 15,
        borderRadius: 10, 
        alignItems: 'center'
    },
    buttonOutline:{
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        borderColor: "#314DD7",
        borderWidth: 3
    },
    buttonText: {
        zIndex: 1,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        zIndex: 1,
        color: '#314DD7',
        fontWeight: '700',
        fontSize: 16
    },
    Text: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
        color: '#314DD7',
        fontWeight: '700',
        fontSize: 16
    }
})
