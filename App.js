import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Box, Text} from "native-base"
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import ProfileScreen from './src/Screens/ProfileScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  );
}
