import React  , {useState} from "react";
import {View , Text, TouchableOpacity , TextInput , StyleSheet , ActivityIndicator} from 'react-native';

const TodoComp = ({item})=>{
    const [Btn, setBtn] = useState(false);
    const hanclechecks = (item)=>{
        setBtn(!Btn)
    }
    return (
        <View  style={{display :"flex" , flexDirection : "row" ,marginTop : 10 }} key={item.id}>
                <TouchableOpacity style={Btn ? styles.btnActivationTrue : styles.btnActivationFalse} onPress={()=>hanclechecks(item)}><Text></Text></TouchableOpacity>
                <Text style={{width : "90%" , marginLeft : 10 , fontSize : 22}}>{item.title}</Text>
               
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
        borderColor : "#ff8000ed",
        width :"8%" ,
         height : 30,
         backgroundColor : "#ff8000ed"
    },
    btnActivationFalse : {
        borderWidth : 2, 
        width :"8%" ,
         height : 30,
         borderColor : "#ff8000ed",
    }
})

export default TodoComp;