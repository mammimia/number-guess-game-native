import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions
} from 'react-native';
import GuessLogItem from '../components/game/GuessLogItem';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userChoice, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsLength = guessRounds?.length;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRoundsLength);
    }
  }, [currentGuess, userChoice]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((currentRounds) => [newRandomNumber, ...currentRounds]);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={<Ionicons name="md-remove" size={24} color="white" />}
              onPress={nextGuessHandler.bind(this, 'lower')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={<Ionicons name="md-add" size={24} color="white" />}
              onPress={nextGuessHandler.bind(this, 'greater')}
            />
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonsContainerWide}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                title={<Ionicons name="md-remove" size={24} color="white" />}
                onPress={nextGuessHandler.bind(this, 'lower')}
              />
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                title={<Ionicons name="md-add" size={24} color="white" />}
                onPress={nextGuessHandler.bind(this, 'greater')}
              />
            </View>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  },
  listContainer: {
    flex: 1,
    margin: 16
  }
});

export default GameScreen;
