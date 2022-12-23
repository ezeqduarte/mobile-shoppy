import { useNavigation } from "@react-navigation/native";
import { Center, Modal, Button, HStack, VStack, Text } from "native-base";
import React, {useState} from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const OrdersInfos=[
  {
    tittle:"Productos",
    price:"23,500",
    color:"black"
  },
  {
    tittle:"Envio",
    price:"34",
    color:"black"
  },
  {
    tittle:"Impuestos",
    price:"23",
    color:"black"
  },
  {
    tittle:"Cuenta Total",
    price:"23,557",
    color:"main"
  }
]
const PlaceOrderModel =() => {

  const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false);  
  return (
      <Center >
        <Button
        onPress={() => setShowModel(true)}
        _pressed={{
          bg:Colors.red}}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
        > Mostrar el total
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
  <Button flex={1} bg={Colors.black} h={45} _text={{
    color:Colors.white
  }} 
  onPress={() =>
    {navigation.navigate("Order");
     setShowModel(false)}}
  _pressed={{
    bg:Colors.black
  }}>
HACER  MI PEDIDO
  </Button>
</Modal.Footer>
</Modal.Content>
        </Modal>
      </Center>
    );
  }

  export default PlaceOrderModel;