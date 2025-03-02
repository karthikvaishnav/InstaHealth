import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const categories = [
  { name: 'Medical', icon: require('./assets/medical.png') },
  { name: 'Hospital', icon: require('./assets/hospital.jpg') },
  { name: 'Blood Bank', icon: require('./assets/bb.png') },
  { name: 'Service', icon: require('./assets/service.png') },
];

const RegistrationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registration For</Text>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <View style={styles.categoryContent}>
            <View style={styles.iconContainer}>
              <Image source={category.icon} style={styles.categoryIcon} />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFC0CB', // Light pink background
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF', // White text color
    textShadowColor: '#000000', // Black shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  categoryButton: {
    alignItems: 'center',
    marginVertical: 10,
    width: width * 0.8,
    backgroundColor: '#FFFFFF', // White background for buttons
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFC0CB', // Pink background for icon container
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular icon
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Black text color
    textShadowColor: '#FFFFFF', // White shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default RegistrationScreen;
