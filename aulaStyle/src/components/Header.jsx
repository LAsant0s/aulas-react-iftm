import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import Divider from './Divider';

export default () => {
  const img = require('../../assets/images/bag.png');

  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>Lighteria</Text>
        <TouchableOpacity style={style.button}>
          <View style={style.imageBox}>
            <Image source={img} style={style.image}/> 
          </View>
        </TouchableOpacity>
      </View>
      <Divider/>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageBox: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 50
  },
  image: {
    width: 30,
    height: 30
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  }
})
