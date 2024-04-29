import { useReducer, createContext } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => { },
  createExpense: ({ id, description, amount, date }) => { },
  deleteExpense: (id) => { },
  updateExpense: ({ id, description, amount, date }) => { }
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'SET':
      const inverted = action.payload.reverse();
      return {
        expenses: inverted
      };
    case 'CREATE':
      const exp = [action.payload, ...state.expenses];
      console.log(exp);
      return {
        expenses: exp
      };
    case 'DELETE':
      return {
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      };
    case 'UPDATE':
      return {
        expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense)
      };
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {

  const [expensesState, dispatch] = useReducer(expenseReducer, { expenses: [] });

  function setExpenses(expenses) {
    dispatch({
      type: 'SET',
      payload: expenses
    });
  }

  function createExpense({ id, description, amount, date }) {
    // maxid = Math.max(...expensesState.expenses.map(expense => expense.id)) + 1;
    dispatch({
      type: 'CREATE',
      payload: {
        id,
        description,
        amount,
        date
      }
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function updateExpense({ id, description, amount, date }) {
    dispatch({
      type: 'UPDATE',
      payload: {
        id,
        description,
        amount,
        date
      }
    });
  }

  const value = {
    expenses: expensesState.expenses,
    setExpenses,
    createExpense,
    deleteExpense,
    updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;