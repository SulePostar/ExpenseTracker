import { useContext, useState, useEffect } from "react";
import ExpensesOutput from "components/ExpensesOutput";
import { ExpensesContext } from "store/expenses-context";
import { getDateMinusDays } from "utils/date";
import { fetchExpenses } from "utils/api";
import Spinner from "components/Spinner";
import ErrorOverlay from "components/ErrorOverlay";

export default function RecentExpenses() {

  const expensesCtx = useContext(ExpensesContext);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const dayMinus7 = getDateMinusDays(today, 7);
    return expense.date > dayMinus7;
  });

  useEffect(() => {
    const getExpenses = async () => {
      try {
        setLoading(true);
        const response = await fetchExpenses();
        expensesCtx.setExpenses(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getExpenses();
  }, []);

  
  if (error) return <ErrorOverlay message={error} onConfirm={() => setError('') } />;

  if (loading) return <Spinner />;

  return (
    <ExpensesOutput expenses={recentExpenses} period="Last 7 days" fallbackText="No expenses registered for the last 7 days!" />
  );
}
