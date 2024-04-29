import { Styles } from "constants/styles";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Input({ label, invalid,  style, inputConfig }) {

  let inputStyles = [styles.input];
  if (inputConfig && inputConfig.multiline) inputStyles.push(styles.inputMultiline);

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={[inputStyles, invalid && styles.invalidInput]} {...inputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: Styles.colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: Styles.colors.primary100,
    color: Styles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel: {
    backgroundColor: Styles.colors.error,
    color: 'white'
  },
  invalidInput: {
    borderColor: Styles.colors.error,
    borderWidth: 2
  }
});