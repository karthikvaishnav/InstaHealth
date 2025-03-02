import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const App = ({ navigation }) => {
  const [specialization, setSpecialization] = useState('');
  const [hospital, setHospital] = useState('');
  const [doctor, setDoctor] = useState('');
  const [timing, setTiming] = useState('');
  const [scaleValue] = useState(new Animated.Value(1));
  const [buttonPressing, setButtonPressing] = useState(false);

  const handlePress = () => {
    setButtonPressing(true);
    Animated.spring(scaleValue, {
      toValue: 0.95, 
      friction: 6,
      tension: 200,
      useNativeDriver: true,
    }).start(() => {
      setButtonPressing(false);
      Animated.spring(scaleValue, {
        toValue: 1, 
        friction: 6,
        tension: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Consultancy</Text>
      <Text style={styles.appointmentHeading}>Book Your Appointment</Text>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#FFF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#FFF"
        />
      </View>

      <Text style={styles.label}>Select Specialization</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={specialization}
          onValueChange={setSpecialization}
          style={styles.dropdown}
        >
          <Picker.Item label="Select Specialization" value="" style={styles.placeholder} />
          <Picker.Item label="Cardiology" value="Cardiology" />
          <Picker.Item label="Dermatology" value="Dermatology" />
          <Picker.Item label="Neurology" value="Neurology" />
        </Picker>
      </View>

      <Text style={styles.label}>Select Hospital</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={hospital}
          onValueChange={setHospital}
          style={styles.dropdown}
        >
          <Picker.Item label="Select Hospital" value="" style={styles.placeholder} />
          <Picker.Item label="City Hospital" value="City Hospital" />
          <Picker.Item label="Apollo Hospital" value="Apollo Hospital" />
        </Picker>
      </View>

      <Text style={styles.label}>Select Doctor</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={doctor}
          onValueChange={setDoctor}
          style={styles.dropdown}
        >
          <Picker.Item label="Select Doctor" value="" style={styles.placeholder} />
          <Picker.Item label="Dr. Smith" value="Dr. Smith" />
          <Picker.Item label="Dr. Johnson" value="Dr. Johnson" />
        </Picker>
      </View>

      <Text style={styles.label}>Select Timing</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={timing}
          onValueChange={setTiming}
          style={styles.dropdown}
        >
          <Picker.Item label="Select Timing" value="" style={styles.placeholder} />
          <Picker.Item label="10:00 AM - 11:00 AM" value="10-11" />
          <Picker.Item label="2:00 PM - 3:00 PM" value="2-3" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity 
          style={[styles.clearButton, {
            transform: [{ scale: scaleValue }],
            elevation: buttonPressing ? 5 : 10, 
          }]} 
          onPress={handlePress}
        >
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.nextButton, {
            transform: [{ scale: scaleValue }],
            elevation: buttonPressing ? 5 : 10, 
          }]} 
          onPress={() => navigation.navigate('NextScreen')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textShadowColor: '#bdc3c7',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  appointmentHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#bdc3c7',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#2980b9',
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#34495e',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: '#7f8c8d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width:'100%'
  },
  dropdown: {
    height: 50,
    fontSize: 16,
  },
  placeholder: {
    color: '#95a5a6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  nextButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#c0392b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  clearText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;