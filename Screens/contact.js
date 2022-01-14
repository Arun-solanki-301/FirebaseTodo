import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import database , {firebase} from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

const ContactInfo = ({ navigation }) => {
    const [user , setUser] = useState({
        username : "",
        email : "",
        address  : "",
        phone : "",
        unique : ""

    })
    const handleInputs = (value , key) => {
        setUser({
            ...user,
            [key] : value,
        })
    }
    const usersCollection = firestore().collection('Users');
    const handleFormSubmit = () => {
        try{

            if(user.username && user.email && user.address && user.phone && user.unique){
                usersCollection.doc(user.unique).set(user)
            }
        }
        catch(error){
            console.log(error)
        }

    }
    const deletedatafromfirestore = ()=>{
        try{
            usersCollection.doc('heXiBcI9u4QOFPJyRg9p').delete()
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{backgroundColor :"blue"}} onPress={()=>navigation.navigate('User info')}><Text style={{fontSize : 25 , textAlign : "center" , color:"#fff"}}>all users</Text></TouchableOpacity>
            <Text style={styles.headerText}>Contact Information</Text>
            <TextInput placeholder="UserName" value={user.username} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(text)=> handleInputs(text , "username")}/>
            <TextInput placeholder="Email" value={user.email} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(text)=>handleInputs(text , "email")}/>
            <TextInput placeholder="address" value={user.address} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(text)=>handleInputs(text , "address")}/>
            <TextInput placeholder="phone Number" value={user.phone} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(text)=>handleInputs(text , "phone")}/>
            <TextInput placeholder="unique key" value={user.unique} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(text)=>handleInputs(text , "unique")}/>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity style={styles.FormBtn} onPress={handleFormSubmit}><Text style={styles.FormBtnText}>Submit</Text></TouchableOpacity>
            </View>
            {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity style={styles.FormBtn} onPress={getDataFromFireStore}><Text style={styles.FormBtnText}>get data</Text></TouchableOpacity>
            </View> */}
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity style={styles.FormBtn} onPress={deletedatafromfirestore}><Text style={styles.FormBtnText}>delete data</Text></TouchableOpacity>
            </View>
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

export default ContactInfo;