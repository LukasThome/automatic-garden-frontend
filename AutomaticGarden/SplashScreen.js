import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulando o carregamento do aplicativo por 2 segundos
    setTimeout(() => {
      navigation.replace("Home"); // Navega para a tela da lista de parques
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/automaticgarden.png")}
        style={styles.image}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: windowWidth, // Usando a largura da janela para torná-lo responsivo
    height: windowHeight, // Usando a altura da janela para torná-lo responsivo
    resizeMode: "cover",
  },
});

export default SplashScreen;
