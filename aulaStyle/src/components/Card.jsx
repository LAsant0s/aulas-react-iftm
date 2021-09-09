import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({ image }) => {

  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.card}>
        <Image source={image.image} resizeMode='contain' style={styles.cardImage}/>
        <Text style={styles.cardText}>
          {image.name} 
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.42,
    height: windowHeight * 0.23,
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
    color: '#A2A2A2',
    fontSize: windowWidth * 0.035
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  }
})