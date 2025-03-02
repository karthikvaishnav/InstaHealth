import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const bloodBanks = [
  { id: '1', name: 'City Blood Bank', address: '123 Main St, Cityville' },
  { id: '2', name: 'Apollo Blood Bank', address: '456 Side Ave, Townsville' },
  { id: '3', name: 'Community Blood Bank', address: '789 Central Blvd, Metropolis' },
];

const BloodBanksScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAddress}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blood Banks</Text>
      <FlatList
        data={bloodBanks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemAddress: {
    fontSize: 14,
    color: '#555',
  },
});

export default BloodBanksScreen;
