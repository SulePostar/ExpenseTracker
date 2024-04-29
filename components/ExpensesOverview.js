import RecentExpenses from 'screens/RecentExpenses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from 'screens/AllExpenses';
import { Styles } from 'constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './IconButton';

const Tabs = createBottomTabNavigator();

export default function ExpensesOverview() {
    
  return <Tabs.Navigator screenOptions={({ navigation }) => ({
    headerStyle: { backgroundColor: Styles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: Styles.colors.primary500 },
    tabBarInactiveTintColor: 'lightgray',
    tabBarActiveTintColor: Styles.colors.accent,
    headerRight: () => <IconButton icon="add-circle" size={32} color={Styles.colors.primary100} onPress={() => { navigation.navigate('ManageExpense') }} />
  })}>
    <Tabs.Screen
      name="RecentExpenses"
      component={RecentExpenses}
      options={{
        title: "Recent Expenses",
        tabBarLabel: "Recent",
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />
      }}
    />
    <Tabs.Screen
      name="AllExpenses"
      component={AllExpenses}
      options={{
        title: "All Expenses",
        tabBarLabel: "All",
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
      }}
    />
  </Tabs.Navigator>
}