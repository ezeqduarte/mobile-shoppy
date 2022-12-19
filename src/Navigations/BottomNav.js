import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { Center, Pressable, Text, View, } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import HomeScreen from "../Screens/HomeScreen"
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import ProfileScreen from "../Screens/ProfileScreen"
import StackNav from "../Navigations/StackNav"
import CartScreen from "../Screens/CartScreen"



const Tab = createMaterialBottomTabNavigator()
const CustomTab = ({ children, onPress }) => (
    <Pressable onPress={onPress}
        h={70}
        w={70}
        rounded="full"
        bg="#ef837b"
        top={-30}

        shadow={2}>

        {children}
    </Pressable>
)






const BottomNav = () => {
    return (
        <Tab.Navigator backBehavior="Main" initialRouteName="Main" screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { ...styles.tab },
            headerShown: false,
            tabBarHideOnKeyboard: true
        }}>
            <Tab.Screen name="Inicio" component={StackNav} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>

                        {focused ? (
                            <Entypo name="home" size={24} color="#ef837b" />
                        ) : (
                            <AntDesign name="home" size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }} />

            <Tab.Screen name="Carrito" component={CartScreen} options={{
                tabBarButton: (props) => <CustomTab {...props} />,
                tabBarIcon: ({ focused }) => (
                    <Center>

                        {focused ? (
                            <FontAwesome5 name="shopping-basket" size={24} color="#ef837b" />
                        ) : (
                            <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }} />






            <Tab.Screen name="Perfil" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>

                        {focused ? (
                            <FontAwesome name="user" size={24} color="#ef837b" />
                        ) : (
                            <AntDesign name="user" size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }} />




        </Tab.Navigator>





    )
}





const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,

    }
})



export default BottomNav