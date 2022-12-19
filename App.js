import { NativeBaseProvider, Box, Text, StatusBar} from "native-base"
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import HomeProduct from './src/Screens/HomeProducts';
import HomeScreen from '../mobile-shoppy/src/Screens/HomeScreen';
import ShippingScreen from "./src/Screens/ShippingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/Navigations/BottomNav";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import PaymentScreen from "./src/Screens/PaymentScreen";
import CartScreen from "./src/Screens/CartScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import OrderScreen from "./src/Screens/OrderScreen";




const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator initialRouteName="PlaceOrder" screenOptions={{
        headerShown:false
      }}
       >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="NotVerify" component={NotVerifyScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Bottom" component={BottomNav} />
        <Stack.Screen name="Carrito" component={CartScreen} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />

      </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
