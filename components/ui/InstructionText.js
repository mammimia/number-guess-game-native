import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../contants/colors';

function InstructionText({ children }) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24
  }
});

export default InstructionText;
