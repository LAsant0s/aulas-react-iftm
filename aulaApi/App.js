import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View, StyleSheet } from 'react-native';

export default () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getMovies = async () => {
     try {
      const response = await fetch('https://random-d.uk/api/random');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random Ducks API</Text>
      {isLoading ? <ActivityIndicator/> : (
        <Image source={{
          uri: data.url,
        }} 
        style={styles.image}
        />
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  container: {
    flex: 1, 
    padding: 24, 
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});