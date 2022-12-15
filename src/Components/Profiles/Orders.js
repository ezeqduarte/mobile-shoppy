import { View, Text} from "react-native"
import React from "react"
import { Box, Button, HStack, Pressable, ScrollView } from "native-base"
import { Colors } from "react-native/Libraries/NewAppScreen"


const Orders = () =>{
    return(
        <Box h="full" bg={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable>
                    <HStack space={4} justifyContent="space-between" alignItems="center" bg={Colors.deepGray} py={5} px={2} >





<Text fontSize={9} color="#ef837b" isTruncated>1412412421                 


</Text>
<Text fontSize={12} bold color={Colors.black}    isTruncated>PAGADO                


</Text>
<Text fontSize={12} italic color={Colors.black}    isTruncated>Nov 13 2022                 


</Text>

<Button px={7} py={1.5} rounded={50} bg="#ef837b" _text={{
    color:Colors.white
}}

_pressed={{
    bg:"#ef837b"
}}>$450
</Button>


                    </HStack>
                </Pressable>
                <Pressable>
                    <HStack space={4} justifyContent="space-between" alignItems="center" bg={Colors.deepGray} py={5} px={2} >





<Text fontSize={9} color="#ef837b" isTruncated>1214124              


</Text>
<Text fontSize={12} bold color={Colors.black}    isTruncated>NO PAGADO                


</Text>
<Text fontSize={12} italic color={Colors.black}    isTruncated>FEB 13 2022                 


</Text>

<Button px={7} py={1.5} rounded={50} bg={Colors.red} _text={{
    color:Colors.white
}}

_pressed={{
    bg: Colors.red
}}>

    $450
</Button>


                    </HStack>
                </Pressable>
            </ScrollView>
        
        </Box>
    )
}

export default Orders