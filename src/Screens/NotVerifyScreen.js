import { View, Text, Box, Image, Heading,VStack,Input,Button,Pressable,Center } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Button1 from "../Components/Button1"

function NotVerifyScreen(){
    return(
        <Box flex={1} bg="#ef837b" safeAreaTop> 
        <Center w="full" h={250}>
            <Image 
            source={require("../../assets/logoo.png")}
            alt="logo"
            w={350}
            h={95}                                  
            
            />





        </Center>
        <VStack space={6} px={5} alignItems="center"
        >

            <Button1 bg={Colors.black} color={Colors.white} >    REGISTRARSE      </Button1>
            <Button1 bg={Colors.white} color={Colors.black} >   INICIAR SESION      </Button1>
            <Button1 bg={Colors.black} color={Colors.white} >   HOME (INVITADO)     </Button1>
        </VStack>



           
        </Box>
    )
}

export default NotVerifyScreen