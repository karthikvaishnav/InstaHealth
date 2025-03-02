import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
 

const { width } = Dimensions.get('window'); 

const EmergencyScreen = () => {
 
  const ambulanceScale = React.useRef(new Animated.Value(1)).current;
  const ambulanceTranslate = React.useRef(new Animated.Value(0)).current;
  const othersAnim = React.useRef(new Animated.Value(1)).current;
  const movingAmbulance = React.useRef(new Animated.Value(-100)).current;
  const movingTaxi = React.useRef(new Animated.Value(-100)).current;

  
  useEffect(() => {
    
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(movingAmbulance, {
            toValue: width,
            duration: 8000,  
            useNativeDriver: true,
          }),
          Animated.timing(movingAmbulance, {
            toValue: -100,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(movingTaxi, {
            toValue: width,
            duration: 8000,  
            useNativeDriver: true,
          }),
          Animated.timing(movingTaxi, {
            toValue: -100,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [movingAmbulance, movingTaxi, width]);

  const handleAmbulancePressIn = () => {
    Animated.parallel([
      Animated.spring(ambulanceScale, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
      Animated.timing(ambulanceTranslate, {
        toValue: 20,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleAmbulancePressOut = () => {
    Animated.parallel([
      Animated.spring(ambulanceScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(ambulanceTranslate, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  
  const handleOthersPressIn = () => {
    Animated.spring(othersAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handleOthersPressOut = () => {
    Animated.spring(othersAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={['#000000', '#ffffff']}
      style={styles.container}
    >
      
      <Text style={styles.heading}>Emergency</Text>
      
     
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              { scale: ambulanceScale },
              { translateX: ambulanceTranslate },
            ],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPressIn={handleAmbulancePressIn}
          onPressOut={handleAmbulancePressOut}
        >
          <Image source={require('./assets/ambulane.png')} style={styles.iconImage} />
          <Text style={styles.buttonText}>Ambulance</Text>
        </TouchableOpacity>
      </Animated.View>
      
      
      <Animated.View
        style={[
          styles.movingAmbulanceContainer,
          { transform: [{ translateX: movingAmbulance }] },
        ]}
      >
        <Image source={require('./assets/ambulane.png')} style={styles.movingAmbulanceImage} />
      </Animated.View>
      
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: othersAnim }] }]}>
        <TouchableOpacity
          style={[styles.button, styles.othersButton]}
          onPressIn={handleOthersPressIn}
          onPressOut={handleOthersPressOut}
        >
          <Image source={require('./assets/taxi.png')} style={styles.iconImage} />
          <Text style={styles.buttonText}>Others</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[
          styles.movingTaxiContainer,
          { transform: [{ translateX: movingTaxi }] },
        ]}
      >
        <Image source={require('./assets/taxi.png')} style={styles.movingTaxiImage} />
      </Animated.View>
      
      <Text style={styles.quote}>
        "Safety isn’t expensive, it’s priceless. Stay prepared, stay safe."
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  buttonContainer: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 12,  
    elevation: 12,     
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7, 
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#FF3D00', 
  },
  othersButton: {
    backgroundColor: '#1565C0',
  },
  iconImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    marginTop: 30,
    textAlign: 'center',
    width: '80%',
  },
  
  movingAmbulanceContainer: {
    marginVertical: 20, 
  },
  movingAmbulanceImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  movingTaxiContainer: {
    marginVertical: 20, 
  },
  movingTaxiImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default EmergencyScreen;
