import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../contants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent500
  }
});

export default NumberContainer;
