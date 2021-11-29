import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const BookItem = (props) => {
    const {item} = props
    return(
    <View style={styles.item}>
    <Image style={styles.image} source={{uri: item.imageURL}} />
    <Text style={styles.textContainer}>
    <Text style={styles.titleText}>{item.title}</Text>
    {item.author ? 
        <Text style={styles.authorText}>
            {"\n"}
            {"\n"}
            Author: {item.author}
        </Text>
        : null
    }
    </Text>
        </View>
        )
};

const styles = StyleSheet.create({
    item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 4,
    padding: 20,
    backgroundColor: '#cfcfcf',
  },
  textContainer: {
    width: "75%"
  },
  titleText: {
  fontSize: 18
  },
  authorText: {
  fontSize: 12
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10
  },
  });

export default BookItem;