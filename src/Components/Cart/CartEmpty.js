import { Box, Center, Text, Pressable } from "native-base";
import React from "react";
import Colors from "../../data/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button2 from "../../Components/Button2"

const CartEmpty = () => {
return(
<Box flex={1}>
<Center h="90%">
<Center w={200} h={200} bg={Colors.dark} rounded="full">
<Pressable ml={0}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={180}
          color="dark"
        ml={190}
        />
      </Pressable>
</Center>
<Text color={Colors.main} bold mt={1} fontSize={18}>
Tu carrito esta vacio :(
</Text>
</Center>
<Button2/>
</Box>
)};
export default CartEmpty