import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from 'screens/ManageExpense';
import ExpensesOverview from 'components/ExpensesOverview';
import { Styles } from 'constants/styles';
import ExpensesContextProvider from 'store/expenses-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Styles.colors.primary500 },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
            <Stack.Screen name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }} />
            <Stack.Screen name="ManageExpense"
              component={ManageExpense}
              options={{
                title: 'Manage Expense',
                presentation: 'modal',
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};