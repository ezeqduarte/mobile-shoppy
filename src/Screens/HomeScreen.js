import {Box, Text, View} from 'native-base';
import React from "react";
import HomeProduct from '../Components/Home/HomeProducts';
import HomeSearch from '../Components/Home/HomeSearch';
import SingleProductScreen from './SingleProductScreen';

function HomeScreen() {
  return (
<Box flex={1}>
    <HomeSearch />
    <HomeProduct/>
    {/* <SingleProductScreen/> */}
</Box>
    );
}

export default HomeScreen;