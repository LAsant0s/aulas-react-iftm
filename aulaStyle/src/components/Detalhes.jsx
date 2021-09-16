import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default ({ route }) => {
    return (
      <View style={styles.container}>
        <Text>
          Produto selecionado:
          <Text style={styles.bold}> { route.params.image.name }</Text>
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  }
});
