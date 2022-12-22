import { View, Text} from "react-native"
import React from "react"
import { Box, FormControl, Input, ScrollView, VStack } from "native-base"
import Colors from "../../data/color"
import Button1 from "../Button1"


const Inputs = [
    {
        label: "USUARIO",
        type: "text"

    },{
        label: "CORREO ELECTRONICO",
        type: "text"
        
    },{
        label: "NUEVA CONTRASEÑA",
        type: "password"
        
    },{
        label: "CONFIRMAR CONTRASEÑA",
        type: "password"
        
    }
]


const Profile = () =>{
    return(
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {
                        Inputs.map((i, index) => (
                          <FormControl key={index}>
                        <FormControl.Label _text={{
                            fontSize: "12px",
                            fontWeight: "bold"

                        }}
                        >
                            {i.label}





                        </FormControl.Label>
                        <Input borderWidth={0.5}
                         bg={Colors.lightBlack} 
                         py={4} 
                         type={i.type} 
                         color="black"
                          fontSize={15} 
                          _focus={{bg: "#fbe3e3", borderColor: "#ef837b", 
                    borderWidth:1}} />     
                    </FormControl>  
                        ))
                    }
                    <Button1 bg="black" color={Colors.white}  >
                        ACTUALIZAR PERFIL
                    </Button1>
                </VStack>
            </ScrollView>
        </Box>
    )
}

export default Profile