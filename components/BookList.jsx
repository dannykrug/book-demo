import React from 'react';
import { FlatList } from 'react-native';
import BookItem from './BookItem'

const BookList = (props) => {
    return (
    <FlatList data={props.data} keyExtractor={({id}, index) => id} renderItem={({item}) => (
    <BookItem item={item} />
      )}/>
    )
};

export default BookList;