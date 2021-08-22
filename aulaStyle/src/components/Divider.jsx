import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.rule}/>
      <View style={styles.textBox}>
        <Text style={styles.text}>Categorias</Text>
      </View>
      <View style={styles.rule}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    paddingBottom: 15
  },
  rule: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 121
  },
  textBox: {
    marginHorizontal: 20
  },
  text: {
    color: '#A2A2A2'
  }
});