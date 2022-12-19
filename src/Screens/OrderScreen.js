import {ScrollView, Text, View, Box, Heading} from "native-base"
import React from "react"
import OrderInfo from "../Components/Cart/OrderInfo"
import Colors from "../data/color"
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';


//    <OrderIterms />
function OrderScreen() {
    return(
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    
                       <OrderInfo 
                       title="INFO. DEL ENVIO"
                       success
                     subTitle="Envio: Buenos Aires"
                      text="Metodo de pago: MercadoPago"
                      icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}  
                       />
                       <OrderInfo title="ENVIAR A"
                     subTitle="Dirección:"
                     danger
                      text="Lionel Messi y Avenida La Scaloneta"
                      icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}  
                       />


                </ScrollView>



            </Box>

 {/*  ORDER ITERMS  */   }

 <Box px={6} flex={1}  pb={3}>
    <Heading bold fontSize={15} isTruncated my={4}>PRODUCTOS
    </Heading>



 </Box>



        </Box>
    )

}


export default OrderScreen