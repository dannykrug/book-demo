import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import BookList from './components/BookList';
const url = 'http://de-coding-test.s3.amazonaws.com/books.json';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => alert(error))
    .finally(setIsLoading(false))
  }, [])

  useEffect(() => {
    console.log('data', data)
  }, [data])
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> :
        <BookList data={data} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  }
});

export default App;
