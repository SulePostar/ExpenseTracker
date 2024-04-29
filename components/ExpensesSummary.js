import { Styles } from 'constants/styles';
import { StyleSheet, Text, View } from 'react-native';

export default function ExpensesSummary({ total, period }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{period}</Text>
      <Text style={styles.total}>{total.toFixed(2)} KM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    backgroundColor: Styles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: Styles.colors.primary400
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Styles.colors.primary500
  }
});