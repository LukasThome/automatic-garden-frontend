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
  const [umidade, setUmidade] = useState("");

  const navigateToConfigurations = () => {
    navigation.navigate("Configurations");
  };

  const handleOKPress = () => {
    // Check if umidade is a number and is not empty
    if (isNaN(umidade) || umidade === "") {
      setMessageStatus("Please enter a valid number");
      return;
    }
  
    axios.patch("http://localhost:8000/Config/atualizar-umidade", {
      umidade: umidade,
    })
    .then(() => {
      setMessageStatus("Value sent successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      setMessageStatus("Failed to send value");
    });
  };

  return (
    <View style={styles.container}>
      {/* Botão para navegar para as configurações */}
      <Button title="Configurations" onPress={navigateToConfigurations} />

      {/* Campo de input para umidade */}
      <View style={styles.inputContainer}>
        <Text>Umidade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a umidade"
          keyboardType="numeric"
          value={umidade}
          onChangeText={(text) => setUmidade(text)}
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
