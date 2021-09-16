import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Divider from './components/Divider';

const LotsOfStyles = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Header />
        <Divider/>
        <ProductsList navigation={navigation} />
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