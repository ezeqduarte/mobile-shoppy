import React from "react";
import {Box, FormControl, Label, Heading, Text, TextArea,VStack} from "native-base"
import {Button, Alert} from "react-native"
import Colors from "../../data/color";
import Message from "../Notifications/Message"
import { DrawerLayoutAndroidComponent } from "react-native";

export default function Review() {
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>Opiniones</Heading>
    {/* if there is  no review */}
    <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
            Usuario Juan
        </Heading>
        <Text my={2} fontSize={12}> Diciembre, 15 2022</Text>
        <Message color={Colors.black} bg={Colors.white} size={13} children={"Gran compra, excelentes desarrolladores!"} />
    </Box>
    {/* write a review */}
    <Box mt={8}>
      <Heading fontSize={16} bold mb={4}>
Opina sobre este producto
      </Heading>
      <VStack space={6}>
      <FormControl>
        <FormControl.Label
          _text={{
        fontSize:"19px",
        fontWeight:"bold",
          }}>
          Comentario 
        </FormControl.Label>
        <TextArea
         h={20}
         w="full"
         placeholder="¿Qué te pareció el producto? "
         borderWidth={3}
         borderColor={Colors.black}
      bg={Colors.white}
      py={2}
      _focus={{
        bg: Colors.white,
      }}
      />
      </FormControl>
      <Button
  title="Enviar mi comentario"
  color="#000000"
onPress={() => Alert.alert('Enviaste tu comentario con exito. Gracias por tu opinión!')}
/>
{/* //si el usuario no esta logueado */}
 
<Message
color={Colors.white}
bg={Colors.red}
children={"Por favor! ingresa a tu cuenta para escribir un comentario"}/>
      </VStack>
    </Box> 
    </Box>
  )
}

