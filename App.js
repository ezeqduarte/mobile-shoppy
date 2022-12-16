import { NativeBaseProvider, Box, Text} from "native-base"
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import HomeScreen from '../mobile-shoppy/src/Screens/HomeScreen';
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen"
export default function App() {
  return (
    <NativeBaseProvider>
      <CartScreen />
    </NativeBaseProvider>
  );
}
