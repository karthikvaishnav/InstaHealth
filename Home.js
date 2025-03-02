import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const options = [
    { name: 'Medicines', screen: 'Medicines', image: require('./assets/medicines.jpeg') },
    { name: 'Consultancy', screen: 'Consultation', image: require('./assets/consultancy.jpg') },
    { name: 'Emergency', screen: 'Emergency', image: require('./assets/emergency2.jpg') },
    { name: 'Hospitals', screen: 'Hospitals', image: require('./assets/hospitals.png') },
    { name: 'Health', screen: 'HealthTips', image: require('./assets/health.png') },
    { name: 'Blood Bank', screen: 'BloodBanks', image: require('./assets/bloodbank.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/discount.png')} style={styles.discountImage} />
      <Text style={styles.heading}>Choose a Service</Text>
      <View style={styles.grid}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => navigation.navigate(option.screen)}
          >
            <Image source={option.image} style={styles.optionImage} />
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.msg}>Turning Emergency into Urgency</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#AAC9AC',
    paddingTop: 50,
  },
  discountImage: {
    width: '90%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  option: {
    width: '40%',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  optionImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  msg: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    padding: 20,
  },
});

export default HomeScreen;
