import { View, Text, Center, Image, Heading } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Tabs from "../Components/Profiles/Tabs"

function ProfileScreen(){
    return(
        <>
        <Center bg="white" pt={10} pb={6}>
            <Image source={{uri:"https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user.-perconal-symbol-vector-on-white-isolated-background-..jpg"}}   
            alt="profile"
            borderRadius={60}
            w={24}
            h={20}
            resizeMode="cover"     
            />
            <Heading bold fontSize={18} isTruncated my={2} color="black">

Administrador N°1

            </Heading>
            <Text italic fontSize={14} color="black"> Desde el 13 de Diciembre de 2022   </Text>


            












        </Center>
        <Tabs />
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default ProfileScreen