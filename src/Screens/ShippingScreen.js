import { useNavigation } from "@react-navigation/native"
import { Box, Center, FormControl, Input, ScrollView, Text, View, VStack } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Button1 from "../Components/Button1"



const  ShippingInputs = [

    {
        label: "PROVINCIA",
        type: "text"
    },{
        label: "CIUDAD",
        type: "text"
    },{
        label: "CODIGO POSTAL",
        type: "text"
    },{
        label: "DIRECCION",
        type: "text"
    },{
        label: "PISO/DEPARTAMENTO",
        type: "text"
    },{
        label: "ESPECIFICACIONES",
        type: "text"
    },
]





function ShippingScreen(){
    const navigation = useNavigation()
    return(
        <Box flex={1} safeAreaTop bg="#ef837b" py={5}>
<Center pb={15}>
    <Text color={Colors.white} fontSize={14} bold>
DIRECCION DE ENTREGA
    </Text>





</Center>
<Box    h="full" bg={Colors.white} px={5}>           
<ScrollView showsVerticalScrollIndicator={false}>
    <VStack space={6} mt={5}>
        {ShippingInputs.map((i, index) =>(
             <FormControl key={index}>
            <FormControl.Label
            _text={{
                fontSize:"12px",
                fontWeight:"bold"
            }}>{i.label}
             </FormControl.Label>
             <Input borderWidth={.2}
              borderColor="#ef837b"
               bg="#fbe3e3" 
               py={4}
               type={i.type}
                color="#ef837b"

             _focus={{bg: "#fbe3e3", borderColor: "#ef837b", 
             borderWidth:1}}>
                
             
             
             </Input>


        </FormControl>
        ))}
       


       <Button1  bg="#ef837b" color={Colors.white} mt={5} >
                        CONTINUAR
                    </Button1>
    </VStack>
    
    
    
    
    
    </ScrollView>                    




</Box>




            
        </Box>
    )
}

export default ShippingScreen