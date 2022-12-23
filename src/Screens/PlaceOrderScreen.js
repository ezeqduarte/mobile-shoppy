import { ScrollView, Text, View, Box, Heading } from "native-base";
import React from "react";
import OrderInfo from "../Components/Cart/OrderInfo";
import Colors from "../data/color";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderIterm from "../Components/Cart/OrderIterm";
import PlaceOrderModel from "../Components/Cart/PlaceOrderModel";

//    <OrderIterms />
function PlaceOrderScreen() {
  return (
    <Box bg={Colors.lightBlack} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CLIENTE"
            subTitle="Admin N°1"
            text="admin@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="INFO. DEL ENVIO"
            subTitle="Envio: Buenos Aires"
            text="Metodo de pago: MercadoPago"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="ENVIAR A"
            subTitle="Dirección:"
            text="Lionel Messi y Avenida La Scaloneta"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>

      {/*  ORDER ITERMS  */}

      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTOS
        </Heading>
        <OrderIterm />
        <PlaceOrderModel />
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
