import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../contants/colors';

function InstructionText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24
  }
});

export default InstructionText;
