import { StyleSheet, View, Text } from 'react-native';
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { Styles } from 'constants/styles';

export default function ExpensesOutput({ expenses, period, fallbackText }) {

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if(expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  const total = expenses.reduce((total, item) => { 
    return total + item.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} total={total} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Styles.colors.primary700
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
});