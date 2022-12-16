import { HStack, Input, Box, Pressable } from "native-base";
import React from "react";
import Colors from "../../data/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeSearch() {
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.black}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Marcas de productos..."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={40}
          color="white"
          ml={3}
        />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-4}
          left={29}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "12px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;

