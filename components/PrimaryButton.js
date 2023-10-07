import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../contants/colors';

function PrimaryButton({ title, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
});

export default PrimaryButton;
