import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from 'constants/styles';
import Input from './Input';
import Button from './Button';
import { formatDate, parseDate } from 'utils/date';

export default function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, initialValues }) {

  const [inputs, setInputs] = useState({
    amount: {
      value: initialValues?.amount?.toString() || '',
      isValid: !!initialValues
    },
    date: {
      value: initialValues ? formatDate(initialValues.date) : '',
      isValid: !!initialValues
    },
    description: {
      value: initialValues?.description || '',
      isValid: !!initialValues
    }
  });

  const inputChangeHandler = (inputId, value) => {
    setInputs((currInputs) => { return { ...currInputs, [inputId]: { value: value, isValid: true } } });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: parseFloat(inputs.amount.value),
      date: parseDate(inputs.date.value),
      description: inputs.description.value
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!(amountIsValid && dateIsValid && descriptionIsValid)) {
      setInputs((currInputs) => {
        return {
          amount: { value: currInputs.amount.value, isValid: amountIsValid },
          date: { value: currInputs.date.value, isValid: dateIsValid },
          description: { value: currInputs.description.value, isValid: descriptionIsValid }
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.row}>
        <Input label="Amount"
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
          inputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value
          }} />
        <Input label="Date"
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          inputConfig={{
            placeholder: 'dd.mm.yyyy',
            maxLenght: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value
          }} />
      </View>
      <View style={styles.row}>
        <Input label="Description"
          invalid={!inputs.description.isValid}
          inputConfig={{
            multiline: true,
            autoCorrect: false,
            onChangeText: inputChangeHandler.bind(this, 'description'),
            value: inputs.description.value
          }} />
      </View>
      {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your data!</Text>}

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel} mode='flat'>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 4,
    marginVertical: 40
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: Styles.colors.primary100,
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: Styles.colors.primary200,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: Styles.colors.primary50,
    borderRadius: 5
  },
  errorText: {
    textAlign: 'center',
    backgroundColor: Styles.colors.error,
    color: 'white',
    padding: 4,
    margin: 8
  }
});
