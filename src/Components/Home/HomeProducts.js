import React, { Component } from "react";
import {
  Flex,
  ScrollView,
  Image,
  Pressable,
  Box,
  Heading,
  Text,
} from "native-base";
import Colors from "../../data/color";
import products from "../../data/Products";
import { useNavigation } from "@react-navigation/native";
import Productos from "../../data/Productos";


function HomeProduct() {
  const navigation = useNavigation()



  





  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        // flexwrap="wrap"
        direction="column"
        justifyContent="space-between"
        px={6}
        bg={Colors.white}
      >
        {Productos.map((product) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Single");
            }}
            key={product._id}
            w="100%"
            bg={Colors.black}
            rounded="md"
            shadow={9}
            pt={0.3}
            my={5}
            pb={9}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="590%"
              h={345}
              resizeMode="cover"
              alignItems="center"
            />
            <Box px={4} pt={1}>
              <Text
                style={{ color: "white" }}
                fontSize={18}
                isTruncated
                w="full"
              >
                {product.name}
              </Text>
              <Box alignItems="center" >
                <Heading
                  fontSize={29}
                  bold
                  mt={1}
                  style={{ color: "#ef837b" }}
                >
                  ${product.price}
                </Heading>
              </Box>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProduct;
