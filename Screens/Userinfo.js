import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import database, { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';



const UserInfo = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        getDataFromFireStore()
    }, [])


    const usersCollection = firestore().collection('Users');

    const getDataFromFireStore = async () => {
        const res = await usersCollection.get()
        // res.forEach((rest)=>{
        //     setUserData(rest)

        // })
        console.log(res)
      setUserData(res._docs)
    }

    console.log(userData, "data from UserList")


    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: "blue" }}>
                <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}>Show Information</Text>
            </TouchableOpacity>


            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginHorizontal: 15 }}>
                <Text>Username</Text><Text>email</Text><Text>address</Text><Text>phone</Text>
            </View>

            {userData && userData.map((element, i) => {
                return (
                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginHorizontal: 15, marginVertical: 15 }} key={i}>
                        <Text>{element._data.username}</Text>
                        <Text>{element._data.email}</Text>
                        <Text>{element._data.address}</Text>
                        <Text>{element._data.phone}</Text>
                    </View>
                )
            })}

        </View>
    )
}
export default UserInfo;