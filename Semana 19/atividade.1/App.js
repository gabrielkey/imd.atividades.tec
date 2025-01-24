import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ContactDetails from './screens/ContactDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Agenda de Contatos' }} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} options={{ title: 'Detalhes do Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
