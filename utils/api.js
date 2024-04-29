import axios from "axios";

const url = "http://192.168.1.108:3000/expenses";

export async function storeExpense(expenseData) {
  const response = await axios.post(url, expenseData);
  return response.data;
}

export async function fetchExpenses() {
  const response = await axios.get(url);
  let expenses = [];
  for (const key in response.data) {
    expenses.push({
      id: key,
      ...response.data[key],
      date: new Date(response.data[key].date)
    });
  }
  return expenses;
}

export async function deleteExpense(id) {
  console.log(id);
  return await axios.delete(`${url}/${id}`);
}

export async function updateExpense(id, expenseData) {
  return await axios.put(`${url}/${id}`, expenseData);
}