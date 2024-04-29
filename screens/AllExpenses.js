import { useContext, useState, useEffect } from 'react';
import ExpensesOutput from 'components/ExpensesOutput';
import { ExpensesContext } from 'store/expenses-context';
import { fetchExpenses } from 'utils/api';

export default function AllExpenses() {

  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    const response = await fetchExpenses();
    setExpenses(response);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return (
      <ExpensesOutput expenses={expenses} period="All Expenses" fallbackText="No expenses registered!" />
  );
}
