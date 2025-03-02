import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const hospital = [
  { id: '1', name: 'City Hospital', image: require('./assets/hospital1.jpg') },
  { id: '2', name: 'Apollo Hospital', image: require('./assets/hospital2.jpg') },
  { id: '3', name: 'General Hospital', image: require('./assets/hospital3.jpg') },
];

const InstaHealth = () => {
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedTiming, setSelectedTiming] = useState('');

  return (
    <View style={styles.container}>
      
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#555" />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Image source={require('./assets/camera.png')} style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={hospitals}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hospitalCard}>
            <Image source={item.image} style={styles.hospitalImage} />
            <Text style={styles.hospitalText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Dropdowns */}
      <View style={styles.dropdownContainer}>
        <Picker selectedValue={selectedHospital} onValueChange={(itemValue) => setSelectedHospital(itemValue)} style={styles.picker}>
          <Picker.Item label="Select Hospital" value="" />
          {hospitals.map((hospital) => (
            <Picker.Item key={hospital.id} label={hospital.name} value={hospital.name} />
          ))}
        </Picker>

        <Picker selectedValue={selectedField} onValueChange={(itemValue) => setSelectedField(itemValue)} style={styles.picker}>
          <Picker.Item label="Select Field" value="" />
          <Picker.Item label="Cardiology" value="Cardiology" />
          <Picker.Item label="Neurology" value="Neurology" />
          <Picker.Item label="Orthopedics" value="Orthopedics" />
        </Picker>

        <Picker selectedValue={selectedTiming} onValueChange={(itemValue) => setSelectedTiming(itemValue)} style={styles.picker}>
          <Picker.Item label="Select Timing" value="" />
          <Picker.Item label="Morning" value="Morning" />
          <Picker.Item label="Afternoon" value="Afternoon" />
          <Picker.Item label="Evening" value="Evening" />
        </Picker>
      </View>

      
      <TouchableOpacity style={styles.bookTestButton}>
        <Image source={require('./assets/injection.png')} style={styles.injectionIcon} />
        <Text style={styles.buttonText}>Book a Test</Text>
      </TouchableOpacity>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E8F5E9' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 10, padding: 10, marginBottom: 20 },
  searchBar: { flex: 1, fontSize: 16 },
  cameraIconContainer: { padding: 5 },
  cameraIcon: { width: 30, height: 30, resizeMode: 'contain' },
  hospitalCard: { backgroundColor: '#FFF', padding: 10, borderRadius: 10, alignItems: 'center', marginRight: 10, width: 120 },
  hospitalImage: { width: 60, height: 60, resizeMode: 'contain', marginBottom: 5 },
  hospitalText: { fontSize: 14, textAlign: 'center' },
  dropdownContainer: { marginBottom: 10 },
  picker: { backgroundColor: '#FFF', marginBottom: 10, borderRadius: 10 },
  bookTestButton: { flexDirection: 'row', backgroundColor: '#388E3C', padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginVertical: 20 },
  injectionIcon: { width: 30, height: 30, marginRight: 10, resizeMode: 'contain' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  clearButton: { backgroundColor: '#D32F2F', padding: 15, borderRadius: 10 },
  nextButton: { backgroundColor: '#1976D2', padding: 15, borderRadius: 10 },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
});

export default hospital;
