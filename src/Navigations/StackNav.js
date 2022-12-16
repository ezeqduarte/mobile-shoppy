import { View, Text  } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ShippingScreen from "../Screens/ShippingScreen";



const Stack= createNativeStackNavigator()

const StackNav = () => {
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown:false
          }}
           >
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Shipping" component={ShippingScreen} />

           </Stack.Navigator>



    )
}

export default StackNav