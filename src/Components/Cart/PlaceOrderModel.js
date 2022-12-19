import { Center, Modal, Button, HStack, VStack } from "native-base";
import React, {useState} from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
const PlaceOrderModel =() => {
  const [showModel, setShowModel] = useState(false);  
  return (
      <Center>
        <Button
        onPress={() => setShowModel(true)}
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
  <Button flex={1} bg={Colors.main} h={45} _text={{
    color:Colors.white
  }} 
  onPress={() => setShowModel(false)}
  _pressed={{
    bg:Colors.nmain
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