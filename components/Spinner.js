import { Styles } from 'constants/styles';
import { View,ActivityIndicator,StyleSheet } from 'react-native';

function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Styles.colors.primary50} />
    </View>
  );
}

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Styles.colors.primary800
  }
});