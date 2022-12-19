import {View, Text, Pressable} from "react-native";
import React from "react";
import { Box, Center, HStack, Image, FontAwesome, VStack, Button } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view"; 
import products from '../../data/Products';
import Colors from "../../data/color";

const Swiper = () =>(
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0,2)}
    renderItem={renderitem}
    renderHiddenItem={hiddenItem}
    showsVerticalScrollIndicator={false}
    />
);

//Cart Item
const renderitem = (data) => (
    <Pressable>
        <Box ml={6} mb={3}>
        <HStack
        alignItems="center"
        gb={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
        >
<Center w="25%"
 bg={Colors.deepGray}>
    <Image source={{uri:data.item.image }}
    alt={data.item.name}
    w="full"
    h={24}
    resizeMode="contain"
    />
</Center>
<VStack w='60%' px={2} space={2}>
<Text isTruncated color={Colors.black} 
bold fontSize={14}>
    {data.item.name}
</Text>
<Text bold color={Colors.lightBlack}>
    ${data.item.price}
    </Text>
</VStack>
<Center>
    <Button
        bg={Colors.black}
        _pressed={{bg: Colors.red}}
        _text={{
            color: Colors.white,
        }}
        >
        5
    </Button>
</Center>
</HStack>
</Box>
</Pressable>
);
 
{/* //hidden */}
const hiddenItem = () => {
 <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h='88%'
    ml='auto'
    justifyContent="center"
    bg={Colors.red}
    >
    <Center
    alignItems="center"
    space={2}>
<FontAwesome 
        name="trash"
        size={24}
        color={Colors.white}
        />
    </Center>
    </Pressable>
};

const CartIterms = () => {
return (
<Box mr={6}>
<Swiper/>
</Box>
);
};

export default CartIterms;