import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  ScrollView,
  Heading,
  HStack,
  Spacer,
  View,
} from "native-base";
import { Button, Alert } from "react-native";
import Colors from "../data/color";
import Review from "../Components/Home/Review";
import NumericInput from "react-native-numeric-input";
import { useNavigation } from "@react-navigation/native";
// import {products} from "../data/Products";
// import HomeProduct from "../Screens/HomeProducts"

function SingleProductScreen(route) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/gatito.jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading alignItems="center" bold fontSize={26} mb={2} lineHeight={27}>
          Memoria GeiL DDR4 16GB 3000MHz Orion RGB Black
        </Heading>
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={170}
            totalHeight={35}
            iconSize={35}
            step={1}
            maxValue={95}
            minValue={1}
            borderColor={Colors.black}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.black }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={32}>
            $23,500
          </Heading>
        </HStack>
        <Text lineHeight={29} fontSize={19} mb={9}>
          Velocidad inigualable de 3600mHz. Cuenta con una gran
          capacidad de 16 gb. (Tipo: DDR4)
        </Text>
        <Button
          title="Agregar al carrito"
          color="#000000"
          onPress={() => Alert.alert("Agregaste tu producto con exito!")}
        />
        {/* opiniones */}
        <Review />
      </ScrollView>
    </Box>
  );
}
export default SingleProductScreen;
