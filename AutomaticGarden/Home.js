import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [leituras, setLeituras] = useState([]);

  useEffect(() => {
    fetchLeituras();
  }, []);

  const fetchLeituras = async () => {
    try {
      const response = await axios.get('http://localhost:8090/obter-leituras');
      setLeituras(response.data.leituras);
    } catch (error) {
      console.error('Erro ao obter leituras:', error);
    }
  };

  const navigateToConfigurations = () => {
    navigation.navigate('Configurations');
  };

  const renderLeitura = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{Number(item.valor).toFixed(2)}</Text>
      <Text style={styles.cell}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Configurations" onPress={navigateToConfigurations} />
      <Text style={styles.title}>Leituras</Text>

      {/* Table headers */}
      <View style={styles.row}>
        <Text style={styles.headerCell}>Umidade</Text>
        <Text style={styles.headerCell}>Data/Hora</Text>
      </View>

      {/* Table data */}
      <FlatList
        data={leituras}
        renderItem={renderLeitura}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  headerCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;