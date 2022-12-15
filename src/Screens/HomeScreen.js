import {Box, Text, View} from 'native-base';
import React from "react";
import HomeProduct from '../Components/Home/HomeProducts';

function HomeScreen() {
  return (
<Box flex={1}>
    <HomeProduct/>
</Box>
    );
}

export default HomeScreen;