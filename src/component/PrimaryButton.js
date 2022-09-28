//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

// create a component
const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContinuer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#640233'}}
        style={styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: '#800000',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 18,
    elevation: 2,
    margin: 4,
  },
  buttonOuterContinuer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

//make this component available to the app
export default PrimaryButton;
