import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';


import { Text, View } from '../Themed';

import styles from './styles';
interface HomeCategoryProps{
  category:{
    id:string,
    title:string,
    movies:
      {
        id:string,
        poster:string,
      }[]
  }
}


const HomeScreen = (props: HomeCategoryProps) => {

  const {category} = props;
  return (
    <>
    <Text style={styles.title}>{category.title}</Text>
    <FlatList 
    data={category.movies}
    renderItem={({item}) => <Image 
    style ={styles.image}
    source = {{ uri:item.poster }}

    />}
    horizontal
    />  
    </>
  );
}

export default HomeScreen