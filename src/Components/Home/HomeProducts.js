import React from 'react'
import { Flex,ScrollView, Image, Pressable, Box, Heading, Text } from "native-base"
import Colors from "../../data/color"
import {products} from "../../data/Products"

function HomeProduct() { 
  return (
<ScrollView flex={1}>
<Flex
flexwrap="wrap"
direction="column"
justifyContent="space-between"
px={6}
>
{products.map((product) =>(
  <Pressable
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
w="690%"
h={245}
resizeMode="contain"
/>
<Box px={4} pt={1} >
<Heading size="sm" bold style={{color: "white"}}>
  ${product.price}
</Heading>
<Text style={{color: "white"}} fontSize={15} isTruncated w="full">{product.name}</Text>
</Box>
  </Pressable>
))}
</Flex>
</ScrollView>
  );
}

export default HomeProduct;