import { HStack, Input, Box, Pressable, Image,Text } from "native-base";
import React from "react";
import Colors from "../../data/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HomeSearch() {
  const navigation = useNavigation()
  return (
    <Box>
      <Box bg={Colors.white} alignItems="center">
    <Text 
    bold
   fontSize={30}
    // w={100}
    // h={10}    
    textShadowColor= 'rgba(0, , 3, 2.105)'
    fontFamily= "sans-serif"
    bg={Colors.white}
  >Shoppy</Text>
  </Box>
    <HStack
      space={0}
      w="full"
      px={6}
      bg={Colors.white}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Marcas de productos..."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={1}
        borderColor={Colors.black}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3}  >
        <MaterialCommunityIcons
          name="shopping-outline"
          size={42}
          color="black"
          ml={3}
           onPress={() => {
           navigation.navigate("Carrito")}}
          
        />
        {/* <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-4}
          left={29}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "12px",
          }}
        > */}
          {/* 5
        </Box> */}
      </Pressable>
    </HStack>
        </Box>
  );
}

export default HomeSearch;
