import { View, StyleSheet, Text } from 'react-native';
import { Styles } from 'constants/styles';
import Button from './Button';

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong!</Text>
      <Text style={styles.message}>{message}</Text>
      <Button
        style={{ marginTop: 16, width: '50%' }}
        onPress={() => { }}>Try again</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Styles.colors.error
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: Styles.colors.primary50,
    fontSize: 20
  },
  message: {
    textAlign: 'center',
    color: Styles.colors.primary50,
    fontSize: 16
  }
});