import { View, Text, Center, Image, Heading } from "native-base"
import React from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Tabs from "../Components/Profiles/Tabs"

function ProfileScreen(){
    return(
        <>
        <Center bg="#ef837b" pt={10} pb={6}>
            <Image source={{uri:"https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user.-perconal-symbol-vector-on-white-isolated-background-..jpg"}}   
            alt="profile"
            w={24}
            h={24}
            resizeMode="cover"
            
            
            
            
            
            
            
            />

            <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>

Administrador N°1

            </Heading>
            <Text italic fontSize={10} color={Colors.white}> Desde el 13 de Diciembre de 2022   </Text>


            












        </Center>
        <Tabs />
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default ProfileScreen