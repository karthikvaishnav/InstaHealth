import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MedicinesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  // Animation values for 3D effect
  const translateY = useSharedValue(0);
  const rotateX = useSharedValue('0deg');

  const handleGesture = (event) => {
    const { translationY } = event.nativeEvent;
    translateY.value = withSpring(translationY * 0.5, { damping: 10, stiffness: 100 });
    rotateX.value = `${-translationY / 10}deg`;
;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 600 },
      { translateY: translateY.value },
      { rotateX: rotateX.value },
    ],
  }));

  const fetchMedicines = async (query) => {
    if (!query) {
      setMedicines([]);
      return;
    }

    try {
      const response = await fetch(
        'https://api.fda.gov/drug/label.json?search=acetaminophen&limit=10'
      );
      const data = await response.json();

      const fetchedMedicines = data.results.map((medicine) => ({
        name: medicine.openfda.brand_name?.[0] || 'Unknown Name',
        price: medicine.price || 'N/A',
        purpose: medicine.purpose || 'No description available',
        image: medicine.image_url || 'https://via.placeholder.com/150',
      }));

      setMedicines(fetchedMedicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    fetchMedicines(text);
  };

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
    Alert.alert('${medicine.name} added to cart!');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#f0f0f0',paddingTop:10 }}>
      <ImageBackground
        source={require('./assets/b.jpg')}
        style={{ flex: 1, width: '100%', height: '100%' }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <ScrollView style={{ flex: 1, paddingTop: 40 }}>
          {/* Search Bar */}
          <View
            style={{
              backgroundColor: '#bfbfbf',
              padding: 15,
              width: '95%',
              alignSelf: 'center',
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <TextInput
                placeholder="Search for Medicines..."
                value={searchQuery}
                onChangeText={handleSearchChange}
                style={{
                  flex: 1,
                  height: 50,
                  borderWidth: 0,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: 'white',
                }}
              />
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Ionicons name="camera" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
                
          {/* 3D Draggable Discount Banner */}
          <PanGestureHandler onGestureEvent={handleGesture}
          style={{borderRadius:20}}>
            <Animated.View
              style={[{ margin: 10, borderRadius: 20, elevation: 5 }, animatedStyle]}
            >
              
              <ImageBackground
                source={require('./assets/banner3.jpg')}
                style={{
                  width: width - 20,
                  height: 200,
                  alignSelf: 'center',
                  borderRadius: 20,
                }}
                imageStyle={{ borderRadius: 20 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    borderRadius:20
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'white',
                      textShadowColor: 'rgba(0, 0, 0, 0.6)',
                      textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 3,
                    }}
                  >
                    🚀 Get Medicines in 10 Minutes!
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#FFD700',
                      paddingTop: 5,
                      textShadowColor: 'rgba(0, 0, 0, 0.6)',
                      textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 3,
                    }}
                  >
                    🔥 Up to 50% Discount Available
                  </Text>
                </View>
              </ImageBackground>
            </Animated.View>
          </PanGestureHandler>

          {/* Medicine Categories */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: 10,
              paddingLeft: 20,
            }}
          >
            {[
              { name: 'Capsules', image: require('./assets/capsules1.jpg') },
              { name: 'Syrups', image: require('./assets/syrup1.jpg') },
              { name: 'Gadgets', image: require('./assets/gad2.jpg') },
              { name: 'Injections', image: require('./assets/inject2.jpg') },
              { name: 'Baby Care', image: require('./assets/baby2.jpg') },
              { name: 'Feminine Hygiene', image: require('./assets/fem2.jpg') },
              { name: 'Sexual Wellness', image: require('./assets/se2.jpeg') },
              { name: 'Skin Essentials', image: require('./assets/skin2.jpeg') },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{ marginBottom: 10, padding: 15, paddingRight: 50 }}
              >
                <Image
                  source={item.image}
                  style={{ width: 100, height: 80, borderRadius: 10 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}