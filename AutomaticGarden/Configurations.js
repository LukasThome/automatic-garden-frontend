import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';


const ConfigurationsScreen = ({ navigation }) => {
   
    const navigateToConfigurations = () => {
      navigation.navigate('Configurations');
    };
  

return (
    <View style={styles.container}>
        
        <View style={styles.container}>
        {/* Button to go to configs */}
        <Button title="Configurations" onPress={navigateToConfigurations} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButtonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ConfigurationsScreen;
