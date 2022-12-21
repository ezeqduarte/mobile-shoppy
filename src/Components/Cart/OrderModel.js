import { useNavigation } from "@react-navigation/native";
import { Center, Modal, Button, HStack, VStack, Text, Pressable, Image } from "native-base";
import React, {useState} from "react";
import Colors from "../../data/color"

const OrdersInfos=[
  {
    tittle:"Productos",
    price:125.77,
    color:"black"
  },
  {
    tittle:"Envio",
    price:34.77,
    color:"black"
  },
  {
    tittle:"Impuestos",
    price:23.34,
    color:"black"
  },
  {
    tittle:"Cuenta Total",
    price:3458.00,
    color:"main"
  }
]
const OrderModel =() => {
  const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false);  
  return (
      <Center>
        <Button
        onPress={() => setShowModel(true)}
        bg="black"
        color={Colors.white}
        mt={5}
        > Mostrar el pago y total
        </Button>
        <Modal
        isOpen={showModel}
        onClose={() => setShowModel(false)}
        size="lg">
<Modal.Content maxWidth={350}>
  <Modal.CloseButton />
  <Modal.Header>Orden</Modal.Header>
<Modal.Body>
  <VStack space={7}>
    {OrdersInfos.map((i,index) =>(
    <HStack key={index} alignItems="center" justifyContent="space-between">
      <Text fontWeight="medium">{i.tittle}</Text>
      <Text
      color={i.color === "main" ? Colors.main : Colors.black}
      bold
       >
        ${i.price}
      </Text>
    </HStack>
    ))}
  </VStack>
</Modal.Body>
<Modal.Footer>
    <Pressable w="full"
     justifyContent="center"
      bg={Colors.paypal} 
      h={45}
       rounded={3}
        overflow="hidden"
         onPress ={
        () => setShowModel(false) 
    }>


<Image source={require("../../../assets/images/paypal.png")}
alt="paypal"
resizeMode="contain"
w="full"
h={34}
></Image>
    </Pressable>
  <Button w="full" mt={2} bg={Colors.black} h={45} _text={{
    color:Colors.white
  }} 
  onPress={() => {
    navigation.navigate("Home");

    setShowModel(false)}}
  _pressed={{
    bg:"#ef837b"
  }}>
SEGUIR COMPRANDO
  </Button>
</Modal.Footer>
</Modal.Content>
        </Modal>
      </Center>
    );
  }

  export default OrderModel;