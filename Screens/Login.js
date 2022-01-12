import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet , ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
// import { useState } from 'react';


const Login = ({navigation}) => {
    const [email , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [loading , setLoading] = useState(false)
    console.log(email , password)
    const handleFormSubmit = ()=>{
        if(email && password){
            setLoading(true)
            firebaseAuthentication(email , password)
        }
        setUsername("")
        setPassword("")
    }

    const firebaseAuthentication = async (email , password) => {
        console.log('responseresponseresponseresponse________________firebaseAuthentication', );
        const response = await auth().signInWithEmailAndPassword(email, password)
        try{
            setLoading(false)
            if(response){
            console.log('User account created & signed in!' , response)
            navigation.navigate("Home")
            }
        }catch{
            setLoading(false)
            console.log("error")
        } 
      };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Login page</Text>
            <TextInput placeholder="Email" value={email} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setUsername(e)} />
            <TextInput placeholder="Password" value={password} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setPassword(e)} />
            <View style={{display : "flex", flexDirection :"row" , justifyContent : "center"}}>
            <TouchableOpacity style={styles.FormBtn} onPress={handleFormSubmit}><Text style={styles.FormBtnText}>Login</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}><Text style={styles.FormText}>new user? sign up instead</Text></TouchableOpacity>
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
    InputType : {
        borderWidth : 1,
        borderColor : "#ccc",
        borderRadius : 5,
        paddingHorizontal : 15,
        marginTop : 15
    },
    FormBtn : {
        backgroundColor : "#ff8000ed",
        padding : 15,
        width : 150,
        borderRadius : 5,
        marginVertical : 15

    },
    FormBtnText : {
        fontSize : 18,
        color : "#fff",
        fontWeight : "600",
        textAlign : "center"
    },
    FormText : {
        color : "#ff8000ed",
        textAlign : "center",
        fontSize : 18
    }
})

export default Login;