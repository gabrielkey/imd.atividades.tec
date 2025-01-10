import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);
  const [erro, setErro] = useState('');

  const adicionarTarefa = () => {
    if (!tarefa.trim()) {
      setErro('Por favor, insira uma tarefa válida.');
      return;
    }
    setErro('');
    setListaTarefas([
      ...listaTarefas,
      { id: Math.random().toString(), titulo: tarefa },
    ]);
    setTarefa('');
  };

  return (
    <View style={styles.container}>
   
      <TextInput
        style={styles.input}
        placeholder="Digite sua tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Profile', { tarefa: item.titulo })}
          >
            <Text style={styles.itemText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#d3f4ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  itemText: {
    fontSize: 18,
  },
});

export default Home;
