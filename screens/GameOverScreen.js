import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../contants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ rounds, userNumber, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton title="Start New Game" onPress={onRestart} />
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
const imageWidth = (2 * deviceWidth) / 3;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 24
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
