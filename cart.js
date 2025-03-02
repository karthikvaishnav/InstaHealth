import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const EmptyCartScreen = () => {
  const vehiclePosition = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(vehiclePosition, {
          toValue: 200, 
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(vehiclePosition, {
          toValue: -200, 
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Orders</Text>
      </View>
      <Image 
        source={require('./assets/icart1.png')} 
        style={styles.cartImage} 
        resizeMode="contain"
      />
      <View style={styles.animationContainer}>
        <Animated.Image 
          source={require('./assets/icart.png')} 
          style={[styles.vehicleImage, { transform: [{ translateX: vehiclePosition }] }]} 
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Your cart is empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#0288D1',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  animationContainer: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  vehicleImage: {
    width: 200,
    height: 100,
    position: 'absolute',
  },
});

export default EmptyCartScreen;
