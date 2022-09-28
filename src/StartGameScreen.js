//import libraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import PrimaryButton from './component/PrimaryButton';

// create a component
const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  //  onChangeHandler
  const numberInputHandler = enterNumber => {
    setEnteredNumber(enterNumber);
  };
  // reset button Function
  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  // Confirmation number Function
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{text: 'okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    console.log('Valid number');
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        maxLength={2}
        keyboardType={'number-pad'}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#660000',
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 4,
    padding: 10,
  },
  inputText: {
    height: 50,
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

//make this component available to the app
export default StartGameScreen;
