import React , {useState} from "react";
import {View , Text, TouchableOpacity , TextInput , StyleSheet} from 'react-native'
import { SendButton } from "react-native-fbsdk";
// import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoComp from "../Component/TodoComp";

const Deshboard = ({navigation})=>{
    const [TodoInput , setTodoInput] = useState("")
    const [newTodo, setnewTodo] = useState([]);
   

    const obj = {
        title: TodoInput, checked: false, id: Math.random()
    }

    const AddTodo = () =>{
        let newArr = Object.assign([], newTodo);
        if(TodoInput){
            newArr.push(obj)  
        }
        // console.log(TodoArray , "fghjkgsjdbajskghdu")
        setnewTodo(newArr);
        setTodoInput("")
    }
    

console.log(newTodo , "new todo")



    return(
        <View style={{marginVertical : 15}}>
            <Text style={{color : "#cacaca" , fontSize : 35, backgroundColor:"blue" , textAlign : "center" }}>Write your task Here</Text>
        <View style={styles.container}>
            <View style={{display : "flex", flexDirection:"row" , alignItems : "center"}}>
            <TextInput placeholder="Write Here" value={TodoInput} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setTodoInput(e)} />
                <TouchableOpacity style={styles.FormBtn} onPress={AddTodo}><Text style={styles.FormBtnText}>ADD</Text></TouchableOpacity>
            </View>


            {newTodo.map((item) => {
                return (
                    <TodoComp item = {item}/>
                )
            })}
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