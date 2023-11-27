import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import axios from "axios";

const ConfigurationsScreen = ({ navigation }) => {
  const [temperatura, setTemperatura] = useState("");

  const navigateToConfigurations = () => {
    navigation.navigate("Configurations");
  };

  const handleOKPress = () => {
    // Lógica a ser executada quando o botão OK for pressionado
    console.log("Temperatura:", temperatura);
    // Adicione qualquer lógica adicional aqui
    // escreva o código para enviar a temperatura para o Arduino
    axios.patch("http://localhost:8000/Config/atualizar-temperatura", {
      temperatura: temperatura,
    });
  };

  return (
    <View style={styles.container}>
      {/* Botão para navegar para as configurações */}
      <Button title="Configurations" onPress={navigateToConfigurations} />

      {/* Campo de input para temperatura */}
      <View style={styles.inputContainer}>
        <Text>Temperatura:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a temperatura"
          keyboardType="numeric"
          value={temperatura}
          onChangeText={(text) => setTemperatura(text)}
        />
      </View>

      {/* Botão OK */}
      <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
        <Text style={styles.okButtonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 5,
  },
  okButton: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  okButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ConfigurationsScreen;
