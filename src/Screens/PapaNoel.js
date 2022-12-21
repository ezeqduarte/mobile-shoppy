import React from 'react'
import {Box, FormControl, Label, Heading, Text, TextArea,VStack, View,} from "native-base"
import Colors from "../data/color"
import {Button, Alert, StyleSheet,ImageBackground} from "react-native"
import Message from '../Components/Notifications/Message'



function PapaNoel() {
    const image = { 
        uri: "https://www.canva.com/design/DAFVW3mS_Ss/wJ2XHr9AMADj_TIgCRMCoA/view?utm_content=DAFVW3mS_Ss&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel"
    } 
  return (
    
    <ImageBackground
                width={30}
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
    <Box mt={8}>
        
      
      <VStack space={6}>
      <FormControl>
        
        <TextArea
         h={20}
         w="full"
         
         borderWidth={1}
         borderColor={Colors.black}
      bg={Colors.white}
      py={2}
      _focus={{
        bg: Colors.white,
      }}
      />
      </FormControl>
      <Button
  title="Enviar mi cartita directo al Polo Norte"
  color="red"
onPress={() => Alert.alert('Enviaste tu cartita con exito.                                         Papá Noel la leerá pronto!!!')}
/>
{/* //si el usuario no esta logueado */}
 

      </VStack>
      
    </Box>
    </ImageBackground>
    
  );
}
export default PapaNoel


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
    text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
});