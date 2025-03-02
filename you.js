import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const YouScreen = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St, City, Country');

  const gridItems = [
    { name: 'Orders', icon: require('./assets/Order.jpg') },
    { name: 'Coupons', icon: require('./assets/couponsss.jpeg') },
    { name: 'Chat History', icon: require('./assets/chat.png') },
    { name: 'Help Center', icon: require('./assets/help.png') },
  ];

  const options = [
    { name: 'Insurance', icon: require('./assets/insuimages.png') },
    { name: 'Schemes', icon: require('./assets/Schemesss.jpg') },
    { name: 'About Us', icon: require('./assets/usabt.png') },
    { name: 'Log Out', icon: require('./assets/looogoutt.png') },
  ];

  const pickImage = () => {
    // Implement image picker functionality here
  };

  return (
    <ImageBackground
      source={require('./assets/real.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      {/* User Information */}
      <View style={styles.userInfoContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={profilePic ? { uri: profilePic } : require('./assets/profile.png')}
            style={styles.profilePic}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.userInfoText}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.userInfoText}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone Number"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.userInfoText}
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
          placeholderTextColor="#888"
        />
      </View>

      {/* 2x2 Grid */}
      <View style={styles.gridContainer}>
        {gridItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <Image source={item.icon} style={styles.gridIcon} />
            <Text style={styles.gridText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <Image source={item.icon} style={styles.optionIcon} />
            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  userInfoContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 20, // Added top margin to fit everything
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35, // Circular profile picture
    marginBottom: 10,
  },
  userInfoText: {
    width: '85%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  gridItem: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  gridIcon: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular icons
    marginBottom: 5,
  },
  gridText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  optionsContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 8,
  },
  optionIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5, // Circular option icons
    marginRight: 15,
    paddingRight: 50,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingRight: 50,
  },
});

export default YouScreen;
