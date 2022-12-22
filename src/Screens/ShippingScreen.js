import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../data/color";
import Button1 from "../Components/Button1";




const ShippingInputs = [
  {
    label: "PROVINCIA",
    type: "text",
  },
  {
    label: "CIUDAD",
    type: "text",
  },
  {
    label: "CODIGO POSTAL",
    type: "text",
  },
  {
    label: "DIRECCION",
    type: "text",
  },
  {
    label: "PISO/DEPARTAMENTO",
    type: "text",
  },
  {
    label: "ESPECIFICACIONES",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg="black" py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DIRECCION DE ENTREGA
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor="#ef837b"
                  bg={Colors.lightBlack}
                  py={4}
                  type={i.type}
                  color="black"
                  _focus={{
                    bg: "lightBlack",
                    borderColor: "#ef837b",
                    borderWidth: 1,
                  }}
                ></Input>
              </FormControl>
            ))}

            <Button1
              onPress={() => navigation.navigate("Checkout")}
              bg="black"
              color={Colors.white}
              
            >
              CONTINUAR
            </Button1>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;


