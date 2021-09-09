import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Divider from './components/Divider';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Header />
        <Divider/>
        <ProductsList />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  }
});

export default LotsOfStyles;