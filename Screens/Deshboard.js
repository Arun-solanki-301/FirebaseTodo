import React , {useEffect, useState} from "react";
import {View , Text, TouchableOpacity , TextInput , StyleSheet , ActivityIndicator , ScrollView} from 'react-native'
import { SendButton } from "react-native-fbsdk";

// import { SafeAreaView } from "react-native-safe-area-context";
import TodoComp from "../Component/TodoComp";
import axios from "axios";
// import { ScrollView } from "react-native-gesture-handler";


const Deshboard = ({navigation})=>{
    const [TodoInput , setTodoInput] = useState("")
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false)
   
    const Url = "https://myfirebaseapp1-9cb9d-default-rtdb.firebaseio.com/MyfirebaseApp.json";
    const obj = {
        title: TodoInput, checked: false, id: Math.random()
    }

    useEffect(()=>{
        getDataFrom()
    })
    const AddTodo = () =>{
       
        if(TodoInput){
            setLoading(true)
            PostDataToFirebase()
            getDataFrom()
        }
        setTodoInput("")
    }
    
    
    // console.log(data)

    const PostDataToFirebase = async () => {
        const response = await axios.post(Url , JSON.stringify(
            obj,
        ))
       
    }

    const getDataFrom = async ()=>{
        const res = await axios.get(Url)
        setData(Object.values(res.data))
        setLoading(false)
    }

    return(
        
        <View style={{marginVertical : 20 }} >
            <Text style={{color : "#cacaca" , fontSize : 35, backgroundColor:"blue" , textAlign : "center" }}>Write your task Here</Text>
        <View style={styles.container}>
            <View style={{display : "flex", flexDirection:"row" , alignItems : "center"}}>
            <TextInput placeholder="Write Here" value={TodoInput} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setTodoInput(e)} />
                <TouchableOpacity style={styles.FormBtn} onPress={AddTodo}><Text style={styles.FormBtnText}>ADD</Text></TouchableOpacity>
            </View>
            <Text style={{fontSize : 40, color : "#000" , fontWeight : "800", marginBottom : 20}}>My List</Text>

            <ScrollView height={285}>
            {data?.map((item , index) => {
                return (
                    <TodoComp item = {item} key={item.id} data={data} loading={loading}/>
                )
            })}
            </ScrollView>

            {loading && <ActivityIndicator size="large" color="#ff8000ed" />}

            <TouchableOpacity style={{backgroundColor :"blue"}} onPress={()=>navigation.navigate('ContactInfo')}><Text style={{fontSize : 25 , textAlign : "center" , color:"#fff"}}>Add contact details</Text></TouchableOpacity>

        </View>
        </View>
       
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
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
        borderTopLeftRadius : 5,
        borderBottomLeftRadius : 5,
        paddingHorizontal : 15,
        // marginTop : 15,
        width : "80%",
        height : 60
    },
    FormBtn : {
        backgroundColor : "#ff8000ed",
        padding : 17,
        width : "20%",
        borderTopRightRadius : 5,
        borderBottomRightRadius : 5,
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
    },
    btnActivationTrue : {
        borderWidth : 2 , 
        width :"8%" ,
         height : 30,
         backgroundColor : "#ff8000ed"
    },
    btnActivationFalse : {
        borderWidth : 2 , 
        width :"8%" ,
         height : 30
    }
})
export default Deshboard;