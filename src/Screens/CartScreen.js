import React from 'react';
import {Text, View, Box, Center, ScrollView, HStack, Button} from "native-base"
import Colors from "../data/color"
// import CartEmpty from '../Components/Cart/CartEmpty';
import CartIterms from '../Components/Cart/CartIterms';

function CartScreen() {;
return(
    <Box flex={1} safeAreaTop bg={Colors.dark}>
    {/* Header */}
    <Center w="full" py={5}>
    <Text color={Colors.black} fontSize={25} bold>
    Carrito de compras
    </Text>
    </Center>
    {/* IF CART IS EMPTY */}
    {/* <CartEmpty/> */}
    <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterms/> 
        {/* Total */}
        <Center mt={5}>
        <HStack
        rounded={50}
        justifyContent="space-between"
        bg={Colors.white}
        shadow={2}
        w="90%"
        pl={5}
        h={45}
        alignItems="center"
        >
            <Text>Total</Text>
            <Button
            px={10}
            h={45}
            rounded={50} 
            bg={Colors.main}
            _text={{
                color:Colors.white,
                fontWeight:"semibold",
            }}
            _pressed={{
                bg:Colors.black
            }}            
            >
                $490
            </Button>
        </HStack>
        </Center>
        {/* checkout */}
<Center px={5} >
    <HStack>
    <Button bg={Colors.black}
    color={Colors.white}
    mt={10}>
        CHECKOUT
    </Button>
    </HStack>
</Center>
    </ScrollView>
    </Box>
);  
}

export default CartScreen;