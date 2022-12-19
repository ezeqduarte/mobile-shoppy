import {
	StyleSheet,
	View,
	ImageBackground,
    Text,
    TouchableOpacity
} from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






function WelcomeScreen({ navigation }) {

const image = { 
    uri: "https://cdn.discordapp.com/attachments/769400725977038868/1051728561066754068/61b4c8990185a_1.jpg"

} 

return(
<View style={styles.container}>
<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
                <Text 
					style={{
						textAlign: "center",
						padding: 10,
						margin: 20,
						marginBottom:2,
						color: "#ef837b",
                        fontSize: 35,
                        fontFamily: "sans-serif",
                        letterSpacing: 5,
                        fontWeight: 'bold',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height:6 },
          textShadowRadius: 10,
                        
						
					}}
                    
				> SHOPPY TE DA LA BIENVENIDA
                </Text>
                <TouchableOpacity    onPress={() => {
							navigation.navigate("NotVerify");
						}}
					style={{
						
						alignItems: "center",
						borderRadius: 20,
						backgroundColor: "#ef837b",
						marginHorizontal: 130,
						padding: 10,
						height:40,
						width:100,
						
						
					}}
				>
					<Text 
						
						style={{
							textAlign: "center",
							color: "#f5f5f5",
						}}
					>
						INGRESAR
					</Text>


					
				</TouchableOpacity>




</ImageBackground>
</View>



)

}

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
    text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
});