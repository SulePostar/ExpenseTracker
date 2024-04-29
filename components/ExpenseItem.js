import { Styles } from 'constants/styles';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { formatDate } from 'utils/date';

export default function ExpenseItem({ id, description, date, amount }) {

  const navigation = useNavigation();
  const editItem = () => {
    navigation.navigate('ManageExpense', { id });
  }

  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={editItem}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{formatDate(date)} ... ({id})</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Styles.colors.primary500,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3
  },
  textBase: {
    color: Styles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80
  },
  amount: {
    color: Styles.colors.primary500,
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.75
  }
});
