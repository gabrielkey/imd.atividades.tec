import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Lista de Tarefas' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Detalhe da Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
