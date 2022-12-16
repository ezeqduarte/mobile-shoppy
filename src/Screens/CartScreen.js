import React from 'react';
import {Text, View, Box, Center} from "native-base"
import Colors from "../data/color"
import CartEmpty from '../Components/Cart/CartEmpty';

function CartScreen() {;
return(
    <Box flex={1} safeAreaTop bg={Colors.dark}>
    {/* Header */}
    <Center w="full" py={5}>
    <Text color={Colors.black} fontSize={25} bold>
    Carrito de compras
    </Text>
    </Center>
    <CartEmpty/>
    {/* IF CART IS EMPTY */}
    </Box>
);  
}

export default CartScreen;