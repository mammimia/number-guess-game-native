import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../contants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 350 ? 28 : 36,
    fontWeight: 'bold',
    color: Colors.accent500
  }
});

export default NumberContainer;
