import React, { useState } from "react";
import {
    View,
    Image,
    Button,
    StyleSheet,
    Modal,
    Alert,
    TextInput,
    ImageBackground,
    Text,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Pedido() {

   const navigation = useNavigation();
    const handleLogout =() =>{
        navigation("Home")
    }
    return (
        <ImageBackground
            source={require("../assets/fondo2.png")}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                    <Text style={styles.titleMesas}>Pedidos</Text>
                    <TouchableOpacity onPress={handleLogout}>
                        <Image
                            source={require("../assets/gastromanager2.png")}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={styles.formContainer2}>
                        <View style={styles.container3}>
                            <View style={styles.column}>
                                <Text style={styles.titleNumMesa}>Pedido: 1</Text>
                                <Text style={styles.titleNombreMesa}>Para la mesa: 1</Text>
                                <Text style={styles.titleNombreMesa}>Estado: En preparacion</Text>
                            </View>
                            <View style={styles.column}>
                                <Image
                                    source={require("../assets/pedido.png")}
                                    style={styles.mesa} />
                                    <TouchableHighlight
                                        style={styles.button}
                                        activeOpacity={0.6}
                                        underlayColor="#DDDDDD"onPress={()=>{
                                            console.log('noseque baen este boton')
                                        }} >
                                        <Text></Text>
                                    </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgba(255,255,255,0.01)",
    },

    titleMesas: {
        color: "rgba(245, 133, 0, 1)",
        fontSize: 50,
        fontWeight: "bold",
        marginRight: "35%",
    },

    logo: {
        width: 60,
        height: 60,
    },

    container3: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    titleNumMesa: {
        color: "rgba(0, 0, 0, 1)",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
    },

    titleNombreMesa: {
        color: "rgba(0, 0, 0, 1)",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10,
    },

    container2: {
        padding: 10,
        marginTop: '-2%',
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 20,
        height: "90%",
        justifyContent: "top",
    },

    column: {
        flex: 1,
        padding: 10,
    },

    mesa: {
        marginLeft: "35%",
        width: 90,
        height: 70,
    },

    formContainer2: {
        marginTop: 5,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 20,
        height: "auto",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: 'rgba(255, 0, 0, 1)',
    },
    button: {
        marginTop: 10,
        marginLeft: '53%',
        backgroundColor: 'rgba(245, 133, 0, 1)',
        padding: 10,
        borderRadius: 5,
        width: 40,
    }

});