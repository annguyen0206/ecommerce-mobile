import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import {useState} from 'react'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'
import {apiUrl} from '../contexts/constants'
const SignupScreen = ({navigation}) => {
    const [user, setUsername] = useState('')
    const [pass, setPassword] = useState('')
    const [conPass, setConPassword] = useState('')
    const handleSubmit = () => {
        if (pass === conPass)
        {
            fetch(`${apiUrl}/auth/register`,{
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
                   navigation.navigate("Login")
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
        else
        {
            Alert.alert('Error', 'Confirm Failed', 
            [{text: 'Try Again', onPress: () => console.log('alert closed')}])
        }
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
                    <TextInput 
                        placeholder="Confirm Password"
                        value={conPass}
                        onChangeText={text => setConPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Text}> Already have an account ?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
        
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:150
    },
    inputContainer: {
        width: '60%'
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40 
    },
    button: {
        backgroundColor: '#314DD7',
        width: '100%',
        padding: 15,
        borderRadius: 10, 
        alignItems: 'center'
    },
    buttonOutline:{
        backgroundColor: '#FFFFFF',
        borderColor: "#314DD7",
        borderWidth: 3
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
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