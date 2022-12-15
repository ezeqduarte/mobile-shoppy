import { NativeBaseProvider, Box, Text} from "native-base"
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import HomeProduct from './src/Screens/HomeProducts';
import HomeScreen from '../mobile-shoppy/src/Screens/HomeScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
      
    </NativeBaseProvider>
  );
}
