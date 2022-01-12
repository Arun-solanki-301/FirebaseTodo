import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [loading , setLoading] = useState(false)

    const handleFormSubmit = ()=>{
        if(username && email && password && confirmPassword){
            if(password === confirmPassword){
                setLoading(true)
                firebaseAuthentication()
               
            }
            setUsername("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
    }

    const firebaseAuthentication = async () => {
        console.log('responseresponseresponseresponse________________firebaseAuthentication');
        const response = await auth().createUserWithEmailAndPassword(email,password)
        try{
            if(response){
                console.log('User account created & signed in!');
                navigation.navigate('Login');
            }
            setLoading(false)
        }catch{
            console.log('That email address is already in use!');
            setLoading(false)
        } 
      }; 

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Sign up page</Text>
            <TextInput placeholder="UserName" value={username} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=> setUsername(e)}/>
            <TextInput placeholder="Email" value={email} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setEmail(e)}/>
            <TextInput placeholder="Password" value={password} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setPassword(e)}/>
            <TextInput placeholder="Confirm Password" value={confirmPassword} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setConfirmPassword(e)}/>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity style={styles.FormBtn} onPress={handleFormSubmit}><Text style={styles.FormBtnText}>Sign Up</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.FormText}>already a user? login instead</Text></TouchableOpacity>
            {loading && <ActivityIndicator size="large" color="#ff8000ed" />}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    headerText: {
        textAlign: "center",
        fontSize: 40,
        color: "#ff8000ed",
        fontWeight: "800",
        marginVertical: 25
    },
    InputType: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 15,
        marginTop: 15
    },
    FormBtn: {
        backgroundColor: "#ff8000ed",
        padding: 15,
        width: 150,
        borderRadius: 5,
        marginVertical: 15

    },
    FormBtnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600",
        textAlign: "center"
    },
    FormText: {
        color: "#ff8000ed",
        textAlign: "center",
        fontSize: 18
    }
})

export default SignUp;