import React from "react";
import {View , Text} from 'react-native'
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Deshboard from "./Screens/Deshboard";
import OtpScreen from "./Screens/OtpScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const ScreenContainer = () =>{
    return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="OTP" component={OtpScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Deshboard}  options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
    )
}
export default ScreenContainer;