//import libraries
import React from 'react';
import {Text, StyleSheet} from 'react-native';

// create a component
const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

//make this component available to the app
export default Title;
