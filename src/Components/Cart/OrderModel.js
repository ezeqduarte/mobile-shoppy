import { useNavigation } from "@react-navigation/native";
import { Center, Modal, Button, HStack, VStack, Text, Pressable, Image } from "native-base";
import React, {useState} from "react";
import Colors from "../../data/color"

const OrdersInfos=[
  {
    tittle:"Productos",
    price:"25,500",
    color:"black"
  },
  {
    tittle:"Envio",
    price:34,
    color:"black"
  },
  {
    tittle:"Impuestos",
    price:23,
    color:"black"
  },
  {
    tittle:"Cuenta Total",
    price:"25,557",
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
        _pressed={{
          bg:Colors.black}}
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
      bg={Colors.mercadoPago} 
      h={45}
       rounded={3}
        overflow="hidden"
         onPress ={
        () => setShowModel(false) 
    }>


<Image source={require("../../../assets/images/mercadopago.png")}
alt="mercadopago"
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
    bg:"lightBlack"
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