// OTPWithSplash.js
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const OTPWithSplash = ({ navigation }) => {
  const [showSplash, setShowSplash] = useState(true);
  // Splash screen heartbeat animation value
  const heartScale = useRef(new Animated.Value(1)).current;
  
  // OTP form animations and state
  const borderAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // Start heartbeat animation for splash screen
    Animated.loop(
      Animated.sequence([
        Animated.timing(heartScale, {
          toValue: 1.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(heartScale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // After 3 seconds, hide splash and start OTP animations
    const timer = setTimeout(() => {
      setShowSplash(false);
      // Start OTP form animations
      Animated.loop(
        Animated.timing(borderAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }).start();
    }, 3000);

    return () => clearTimeout(timer);
  }, [heartScale, borderAnim, fadeAnim]);

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#FF00FF", "#00FFFF", "#FF00FF"],
  });

  if (showSplash) {
    // Splash Screen with plain background, title, beating heart, and quote
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>InstaHealth</Text>
        <Animated.View style={[styles.heartContainer, { transform: [{ scale: heartScale }] }]}>
          <Text style={styles.heartText}>❤️</Text>
        </Animated.View>
        <Text style={styles.healthQuote}>
          “Take care of your body; it’s the only place you have to live.”
        </Text>
      </View>
    );
  } else {
    // OTP Form Screen with its own background image
    return (
      <ImageBackground
        source={require("./assets/otpb.jpg")}
        style={styles.otpBackground}
      >
        <Animated.View style={[styles.otpContainer, { opacity: fadeAnim }]}>
          <Animated.View style={[styles.otpCard, { borderColor: borderColor }]}>
            <Text style={styles.otpHeader}>Verify Your Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
            />
            <TextInput
              style={[styles.input, { marginTop: 10 }]}
              placeholder="Enter OTP"
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Form")}
            >
              <LinearGradient
                colors={["#8E2DE2", "#4A00E0"]}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Verify OTP</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  // Splash Screen styles
  splashContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  heartContainer: {
    marginBottom: 20,
  },
  heartText: {
    fontSize: 60,
  },
  healthQuote: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    marginHorizontal: 20,
  },
  // OTP Page styles
  otpBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  otpContainer: {
    marginTop: 100,
    width: "92%",
    alignItems: "center",
    padding: 20,
  },
  otpCard: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 15,
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  otpHeader: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "purple",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#7C4DFF",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
  },
  button: {
    marginTop: 20,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OTPWithSplash;
