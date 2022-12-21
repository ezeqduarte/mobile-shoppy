import { View, Text  } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ShippingScreen from "../Screens/ShippingScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import PlaceOrderScreen from "../Screens/PlaceOrderScreen";
import PapaNoel from "../Screens/PapaNoel";



const Stack= createNativeStackNavigator()

const StackNav = () => {
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown:false
          }}
           >
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Single" component={SingleProductScreen} />
<Stack.Screen name="Shipping" component={ShippingScreen} />
<Stack.Screen name="Checkout" component={PaymentScreen} />
<Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
<Stack.Screen name="PapaNoelScreen" component={PapaNoel} />


           </Stack.Navigator>



    )
}

export default StackNav