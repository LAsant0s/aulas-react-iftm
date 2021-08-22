import React from 'react';
import { ScrollView, StyleSheet, View, Image, ImageStore } from 'react-native';
import Card from './Card';
import images from '../utils/images';

export default () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image, key) => {
          return <Card key={key} image={image}/>
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})