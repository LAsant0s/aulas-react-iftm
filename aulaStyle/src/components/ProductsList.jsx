import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import images from '../utils/images';

export default () => {
  const renderItem = ({ item }) => (
    <Card image={item}/>
  );

  return (
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(image) => image.id}
        numColumns={2}
        contentContainerStyle={
          {flex: 1, alignItems: 'center', justifyContent: 'flex-start'}
        }
      />
  )
}