import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetails = ({ route }) => {
  const { contactId } = route.params;
  const [contact, setContact] = useState(null);

  const fetchContactDetails = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`);
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContactDetails();
  }, []);

  if (!contact) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome: {contact.name}</Text>
      <Text style={styles.detail}>Telefone: {contact.phone}</Text>
      <Text style={styles.detail}>Email: {contact.email}</Text>
      <Text style={styles.detail}>Endereço: {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}`}</Text>
      <Text style={styles.detail}>Website: {contact.website}</Text>
      <Text style={styles.detail}>Empresa: {contact.company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ContactDetails;
