import { Styles } from "constants/styles";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={ ({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: Styles.colors.primary500,
    borderRadius: 5,
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  flatText: {
    color: Styles.colors.primary200
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 5,
    backgroundColor: Styles.colors.primary100
  }
});