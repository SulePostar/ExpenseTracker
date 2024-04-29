import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderItem(itemData) {
  return (
    <ExpenseItem {...itemData.item} />
  );
}

export default function ExpensesList({ expenses }) {
  let key = 0;
  return (
    <FlatList data={expenses}
      renderItem={renderItem}
      keyExtractor={() => key++}  
    />
  );
}