import React, { useEffect, useState } from "react";
import {View , Text, TextInput , StyleSheet , TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';



const OtpScreen =({navigation})=>{
    const [phoneNumber , setPhoneNumber] = useState("")
    // const [countryCode , setCountryCode] = useState("")s
    const [confirm, setConfirm] = useState(null);
    const [otpscreen, setOtpScreen] = useState(false);
    const [confirmOtp , setConfirmOtp] = useState("")
    const [userinfo , setuserInfo] = useState("")
   const [otpGenrate , setOtpGenrate] = useState(false)


    useEffect(()=>{
        try {
            GoogleSignin.configure({
                scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
                webClientId:"877179004561-j22q3fsui8jq11hd7k2t2ms360gnviaq.apps.googleusercontent.com"})
        } catch (error) {
            console.log('Error while configure google signin: ', error);
        }
    })
    
   const _googleSignIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
        //   console.log(userInfo, 'userInfo+++++++++++++');
          navigation.navigate("Home")   
        //   this.setuserInfo({ userInfo });
        } catch (error) {
          console.log(error , "errrrrrrrrrrrrrr")
        }
      };


    const genrateOtp = () => {
        
        // if(typeof parseInt(phoneNumber) === "number" && phoneNumber > 999999999 ){
        if(phoneNumber){
            signInWithPhoneNumber(phoneNumber)
        }else{
            console.log("inncorrect number")
        }
    }

// console.log(confirmOtp)
    async function signInWithPhoneNumber(phone) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phone);
            setConfirm(confirmation);
            setOtpScreen(true)
            setOtpGenrate(true)
            // console.log(confirmation);
            // setScr(true)
          } catch (error) {
            error
            console.log(error)
          }
      }

      const confirmVerificationCode = async (confirmOtp)=>{
        try {
            await confirm.confirm(confirmOtp);
            // setConfirmOtp(null);
            // console.log("successssssssssss")
            navigation.navigate('Home')

          } catch (error) {
           console.log(error , "error")
          }
      }

      const _googleSignOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        //   setloggedIn(false);
        //   setuserInfo([]);
        //   console.log('sign out successssssssssss')
        } catch (error) {
          console.error(error);
        }
      };
     

    return(
        <View >

       <View style={styles.container}>
            <View style={{display : "flex"}}>
            
            <TextInput placeholder="Phone Number" value={phoneNumber} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setPhoneNumber(e)} />
            </View>
            <View style={{display : "flex", flexDirection :"row" , justifyContent : "center"}}>
            <TouchableOpacity style={styles.FormBtn} onPress={genrateOtp}><Text style={styles.FormBtnText}>Phone Number</Text></TouchableOpacity>
            </View>
        </View> 
        
        <View style={styles.container}>
         <View style={{display : "flex"}}>
        <TextInput placeholder="OTP ...." value={confirmOtp} style={styles.InputType} placeholderTextColor={'#ff8000ed'} onChangeText={(e)=>setConfirmOtp(e)} />
        </View>
        <View style={{display : "flex", flexDirection :"row" , justifyContent : "center"}}>
        <TouchableOpacity style={styles.FormBtn} onPress={()=>confirmVerificationCode(confirmOtp)}><Text style={styles.FormBtnText} disabled={otpGenrate}>confirm otp</Text></TouchableOpacity>
        </View> 
        </View>

        <View style={{display :"flex" , justifyContent : "center" , flexDirection : "row"}}><TouchableOpacity style={styles.googleBtn} onPress={_googleSignIn}><Text style={styles.FormText}>sign in with google</Text></TouchableOpacity></View> 
        <View style={{display :"flex" , justifyContent : "center" , flexDirection : "row"}}><TouchableOpacity style={styles.googleBtn} onPress={_googleSignOut}><Text style={styles.FormText}>sign out</Text></TouchableOpacity></View>
        <View style={styles.container}>
        <View style={{display :"flex" , justifyContent : "space-between" , flexDirection : "row" , marginTop : 20}}>
        <TouchableOpacity style={{width : 180 , backgroundColor : "red"}} onPress={()=>navigation.navigate('Login')} ><Text style={{color : "#fff" , textAlign : "center", fontSize : 18}}>Login with username</Text></TouchableOpacity> 
        <TouchableOpacity style={{width : 100, backgroundColor : "red"}} onPress={()=>navigation.navigate('SignUp')}><Text style={{color : "#fff" , textAlign : "center", fontSize : 18}}>Sign up</Text></TouchableOpacity></View>
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
        borderRadius : 5,
        paddingHorizontal : 15,
        marginTop : 15
    },
    InputTypeB : {
        width : 50,
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
        fontSize : 18,
        
    },
    googleBtn :{
        marginTop:30,
        padding : 15,
        backgroundColor : "#88eeff",
        width : 200,
        borderRadius : 5
    }
})

export default OtpScreen