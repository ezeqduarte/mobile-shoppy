import {Box, Text, View} from 'native-base';
import React from "react";
import HomeProduct from '../Components/Home/HomeProducts';
import HomeSearch from '../Components/Home/HomeSearch';

function HomeScreen() {
  return (
<Box flex={1}>
<HomeSearch/>
    <HomeProduct/>
</Box>
    );
}

export default HomeScreen;