import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  }
});

export default GameScreen;
