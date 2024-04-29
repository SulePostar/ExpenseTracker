import { useState } from 'react';
import IconButton from 'components/IconButton';
import { Styles } from 'constants/styles';
import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpensesContext } from 'store/expenses-context';
import ExpenseForm from 'components/ExpenseForm';
import { deleteExpense, storeExpense, updateExpense } from 'utils/api';
import Spinner from 'components/Spinner';

export default function ManageExpense({ route, navigation }) {

  const [loading, setLoading] = useState(false);
  const expensesCtx = useContext(ExpensesContext);

  const id = route.params?.id;
  const isEditing = !!id;

  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setLoading(true);
    if (isEditing) {
      expenseData.id = id;
      expensesCtx.updateExpense(expenseData, id);
      await updateExpense(id, expenseData);
    } else {
      const result = await storeExpense(expenseData);
      expensesCtx.createExpense(result);
    };
    setLoading(false);
    navigation.goBack();
  };

  const deleteHandler = async () => {
    setLoading(true);
    expensesCtx.deleteExpense(id);
    await deleteExpense(id);
    setLoading(false);
    navigation.goBack();
  }

  if(loading) return <Spinner />;
  
  return (
    <View style={styles.container}>
      <ExpenseForm 
        onCancel={cancelHandler} 
        onSubmit={confirmHandler}
        initialValues={selectedExpense}
        submitButtonLabel={isEditing ? "Update" : "Add"} />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={Styles.colors.error} size={32} onPress={deleteHandler} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Styles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Styles.colors.primary200,
    alignItems: 'center'
  }
});