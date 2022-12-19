import { View, Text, Box, Image, Heading,VStack,Input,Button,Pressable,Center } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Button1 from "../Components/Button1"

function NotVerifyScreen({navigation}){
    return(
        <Box flex={1}> 
        <Image flex={1} resizeMode="cover" size="lg" w="full" 
         src="https://images.unsplash.com/photo-1613442986373-af81e5c618d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80" alt="fondo">
        </Image>

        <Box position="absolute">

            <Image 
            source={require("../../assets/images/logoo.png")}
            alt="logo"
            w={350}
            h={95}    
            mb={150}                              
            mt={20}
            left={3}
            />
        <VStack space={6} left={2} px={5}  alignItems="center"
        >

            <Button1 bg={Colors.white} color={Colors.black} onPress={() => {
                navigation.navigate("Login");
            }}>   INICIAR SESIÓN      </Button1>
            <Button1 bg={Colors.black} color={Colors.white} onPress={() => {
							navigation.navigate("Register");
						}} >    REGISTRARSE      </Button1>
            <Button1 bg={Colors.black} color={Colors.white} onPress={() => {
							navigation.navigate("Bottom");
						}}>   INICIAR COMO INVITADO    </Button1>
        </VStack>

        </Box>
        </Box>
    )
}

export default NotVerifyScreen