import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';




const HomeScreen = ({ navigation }) => {
  const [leituras, setLeituras] = useState([]);

  useEffect(() => {
    // Quando o componente montar, faça a solicitação para obter as leituras
    fetchLeituras();
  }, []);

  const fetchLeituras = async () => {
    try {
      // Faça a solicitação GET para obter as leituras usando o Axios
      const response = await axios.get('http://localhost:8090/obter-leituras');

      // Atualize o estado com os dados recebidos
      setLeituras(response.data.leituras);
    } catch (error) {
      console.error('Erro ao obter leituras:', error);
    }
  };

  const navigateToConfigurations = () => {
    navigation.navigate('Configurations');
  };

  return (
    <View style={styles.container}>
      {/* Botão para ir para as configurações */}
      <Button title="Configurations" onPress={navigateToConfigurations} />

      {/* Exibir os dados da tabela de leituras */}
      <View>
        <Text>Leituras:</Text>
        {leituras.map((leitura) => (
          <View key={leitura.id}>
            <Text>{`Valor: ${leitura.valor}, Timestamp: ${leitura.timestamp}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
