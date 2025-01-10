import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ route }) => {
  const { tarefa } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.tarefa}>Tarefa: {tarefa}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#BC8F8F',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tarefa: {
    fontSize: 18,
    color: '#333',
    marginTop: 7,  
  },
});

export default Profile;
