import React from "react";
import { Button } from "native-base";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Button2({ mt, bg, children, onPress }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={Colors.dark}
      _text={{
        fontSize:"20px",
        color: Colors.white,
      }}
      _pressed={{ bg:Colors.depGrey }}
      onPress={onPress}
    > Comenza tu compra ahora!
      {children}
    </Button>
  );
}

export default Button2;
