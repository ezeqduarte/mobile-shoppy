import {
  View,
  Text,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

function RegisterScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        src="https://media.wired.com/photos/61f48f02d0e55ccbebd52d15/master/pass/Gear-Rant-Game-Family-Plans-1334436001.jpg"
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading color="#ef837b"> REGISTRO </Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color="white" />
            }
            variant="underlined"
            placeholder="John Nieves"
            w="70%"
            pl={2}
            color="#ef837b"
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color="white" />
            }
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
          _pressed={{ bg: "black" }}
          my={30}
          w="40%"
          rounded={50}
          bg="#ef837b"
          onPress={() => navigation.navigate("Bottom")}
        >
          REGISTRARSE
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color="#ef837b"> INICIAR SESION </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
