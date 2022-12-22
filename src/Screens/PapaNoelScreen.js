import React from "react";
import {
  Box,
  FormControl,
  Label,
  Heading,
  Text,
  TextArea,
  VStack,
  View,
} from "native-base";
import Colors from "../data/color";
import {
  Button,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Message from "../Components/Notifications/Message";

function PapaNoelScreen({navigation}) {
  return (
    <ImageBackground
      source={require("../../assets/images/cartabg.jpg")}
      resizeMode="cover"
      w="80"
    >
      <Box h="750" left={0}>
        <VStack>
          <FormControl>
            <TextArea
              left={3}
              w={320}
              mt={40}
              h={300}
              mb={2}
              borderWidth={1}
              borderColor={Colors.lightBlack}
              bg={Colors.white}
              py={2}
              _focus={{
                bg: Colors.white,
              }}
            />
          </FormControl>
          <Button
            w="3"
            h="2"
            title="Enviar mi cartita directo al Polo Norte"
            color="red"
            marginBottom="40"
            onPress={() =>
              Alert.alert(
                "Enviaste tu cartita con exito.                                         Papá Noel la leerá pronto!!!"
              )
            }
          />
          <Button
            w="3"
            h="2"
            title="Ingresar a la pagina principal"
            color="red"
            onPress={() => {
              navigation.navigate("NotVerify");
            }}
          ></Button>

          {/* //si el usuario no esta logueado */}
        </VStack>
      </Box>
    </ImageBackground>
  );
}
export default PapaNoelScreen;

const styles = StyleSheet.create({
  container: {
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
