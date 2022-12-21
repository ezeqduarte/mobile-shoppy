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

function ChristmasScreen({ navigation }) {

const image = { 
    uri: "https://www.canva.com/design/DAFVWnPbKKg/-aLUy_fH3qKuXKLFs6ro_A/edit?utm_content=DAFVWnPbKKg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
} 

return(
<View style={styles.container}>
<ImageBackground
                width={30}
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
                <TouchableOpacity    onPress={() => {
							navigation.navigate("NotVerify");
						}}
					style={{
						alignItems: "center",
						borderRadius: 20,
						backgroundColor: "red",
						marginHorizontal: 84,
                        marginTop:40,
                        marginBottom:340,
						padding:11,
						height:65,
						width:190,
					}}
				>
					<Text 
						style={{
                            textAlign: "center",
							color: "white",
                            fontWeight: "bold",
						}}
					>
						ENCONTRÁ EL REGALO PERFECTO
					</Text>
				</TouchableOpacity>
                <TouchableOpacity    onPress={() => {
							navigation.navigate("PapaNoelScreen");
						}}
					style={{
						alignItems: "center",
						borderRadius: 20,
						backgroundColor: "red",
						marginHorizontal: 84,
                        marginTop:20,
						padding: 10,
						height:65,
						width:190,
					}}
				>
					<Text 
						style={{
                            textAlign: "center",
							color: "white",
                            fontWeight: "bold",
						}}
					>
					ESCRIBILE LA CARTITA A PAPÁ NOEL
					</Text>
				</TouchableOpacity>
</ImageBackground>
</View>
)
}

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
		color: "black",
		fontSize: 48,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
});
        
export default ChristmasScreen;


