import { View, Text, Box, Image, Heading,VStack,Input,Button,Pressable } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



function LoginScreen({navigation}){
    return(
        <Box flex={1} bg={Colors.black}>
            <Image
            flex={1}
            alt="Logo"
            resizeMode="cover"
            size="lg"
            w="full"
            src="https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598"
            
        

            />
            <Box
            w="full"
            h="full"
            position="absolute"
            top="0"
            px="6"
            justifyContent="center"
            
            >
                <Heading color="#ef837b">   INICIAR SESION     </Heading>
                <VStack space={8} pt="6">
                    <Input
                    InputLeftElement={<MaterialIcons name="email" size={20} color="white" />}
                     variant="underlined"
                      placeholder="user@gmail.com" 
                      w="70%" 
                      pl={2}
                      color="#ef837b"
                      borderBottomColor={Colors.underline}
                    
                   />
                     <Input
                    InputLeftElement={<Ionicons name="eye" size={24} color="white" />}
                     variant="underlined"
                      placeholder="********" 
                      w="70%" 
                      type="password"
                      pl={2}
                      color="#ef837b" 
                      borderBottomColor={Colors.underline}
                    
                   />



                </VStack>
                <Button
                _pressed={{bg: "black"}} 
                my={30}
                 w="40%"
                  rounded={50}
                   bg="#ef837b"
                   onPress={() => navigation.navigate("Bottom")}
                >
                    Iniciar Sesion


                </Button>
                <Pressable mt={4}  onPress={() => navigation.navigate("Register")}>
                    <Text color="#ef837b" >    REGISTARSE     </Text>



                </Pressable>





            </Box>




        </Box>
    )
}

export default LoginScreen