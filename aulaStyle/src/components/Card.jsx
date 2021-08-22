import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default ({ image }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.card}>
        <Image source={image.image} style={styles.cardImage}/>
        <Text style={styles.cardText}>
          {image.name} 
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 167,
    height: 180,
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
  },
  cardImage: {
    width: 40,
    height: 100
  },
  cardText: {
    marginTop: 5,
    color: '#A2A2A2'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  }
})