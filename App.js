import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import MedicinesScreen from './medicines';
import ConsultationScreen from './Consult';
import EmergencyScreen from './Emergerncy';
import HospitalsScreen from './hopstial';
import HealthTipsScreen from './Health';
import BloodBanksScreen from './BloodBanksScreen';
import RegisterScreen from './register';
import YouScreen from './you';
import CartScreen from './cart';
import ChatScreen from './Chatbot';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Medicines" component={MedicinesScreen} />
      <Stack.Screen name="Consultation" component={ConsultationScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
      <Stack.Screen name="Hospitals" component={HospitalsScreen} />
      <Stack.Screen name="HealthTips" component={HealthTipsScreen} />
      <Stack.Screen name="BloodBanks" component={BloodBanksScreen} />
    </Stack.Navigator>
  );
};
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'Home') iconSource = require('./assets/home.png');
          else if (route.name === 'Register') iconSource = require('./assets/register.png');
          else if (route.name === 'AI Chatbot') iconSource = require('./assets/ai.png');
          else if (route.name === 'Cart') iconSource = require('./assets/cart.png');
          else if (route.name === 'You') iconSource = require('./assets/profile.png');

          return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="AI Chatbot" component={ChatScreen} />
      <Tab.Screen name="Cart" component={CartScreen} /> 
      <Tab.Screen name="You" component={YouScreen} /> 
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
