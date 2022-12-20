import { useNavigation } from "@react-navigation/native"
import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, View, VStack } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Button1 from "../Components/Button1"
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const paymentsMethodes = [

    {
        image: require("../../assets/images/paypal.png"),
        alt: "paypal",
        icon: "IonIcons"
    }, {
        image: require("../../assets/images/mercadopago.png"),
        alt: "mercadopago",
        icon: "fontAwesome"
    },
    {
        image: require("../../assets/images/gpay.png"),
        alt: "gpay",
        icon: "fontAwesome"

    }
]



function PaymentScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeAreaTop bg="#ef837b" py={5}>
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    METODO DE PAGO
                </Text>





            </Center>
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {paymentsMethodes.map((i, index) => (
                            <HStack alignItems="center"
                                key={index}
                                bg={Colors.white}
                                px={3}
                                py={1}
                                rounded={10}
                                justifyContent="space-between"
                            >

                                <Box>
                                    <Image source={i.image}
                                        alt={i.alt}
                                        resizeMode="contain"
                                        w={60}
                                        h={50}

                                    >


                                    </Image>





                                </Box>
                                {i.icon === "IonIcons" ?
                                 <Ionicons name="checkmark-circle"
                                  size={30} 
                                  color="#ef837b" 
                                  /> : 
                                  <FontAwesome 
                                  name="circle-thin" 
                                  size={30} 
                                  color="#ef837b" 
                                  />
                                }




                               



                            </HStack>
                        ))}



                        <Button1 onPress={() => navigation.navigate("PlaceOrder")} bg="#ef837b" color={Colors.white} mt={5} >
                            CONTINUAR
                        </Button1>
                        <Text italic textAlign="center" >
                            El metodo de pago es
                            <Text bold> Paypal</Text> por defecto

                        </Text>


                    </VStack>





                </ScrollView>




            </Box>





        </Box>
    )
}




export default PaymentScreen