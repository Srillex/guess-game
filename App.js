/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import StartGameScreen from './src/StartGameScreen';
import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/GameScreen';
import GameOverScreen from './src/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={['#800000', 'yellow']} style={style.container}>
      <ImageBackground
        source={require('./assets/backgroudImage/Dice.jpg')}
        resizeMode={'cover'}
        style={style.container}
        imageStyle={style.backGroundImage}>
        {/* <StartGameScreen />
         */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
export default App;
