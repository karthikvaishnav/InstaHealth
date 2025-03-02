import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";

const  Health= () => {
  const stepsAnimation = useRef(new Animated.Value(0)).current;
  const caloriesAnimation = useRef(new Animated.Value(0)).current;
  const bounceAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
   
    Animated.timing(stepsAnimation, {
      toValue: 13050,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.timing(caloriesAnimation, {
      toValue: 933,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const animatedSteps = stepsAnimation.interpolate({
    inputRange: [0, 13050],
    outputRange: ["0", "13050"],
  });

  const animatedCalories = caloriesAnimation.interpolate({
    inputRange: [0, 933],
    outputRange: ["0", "933"],
  });

  return (
    <ScrollView style={styles.container}>
   
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Health</Text>
      </View>

      <View style={styles.calculationsContainer}>
        <View style={styles.calculationBar}>
          <View style={styles.calculationRow}>
            <Animated.View style={{ transform: [{ scale: bounceAnimation }] }}>
              <FontAwesome5 name="walking" size={24} color="#ffa500" />
            </Animated.View>
            <Text style={styles.calculationText}>Steps</Text>
            <Animated.Text style={styles.valueText}>{animatedSteps}</Animated.Text>
          </View>
          <View style={styles.calculationRow}>
            <Animated.View style={{ transform: [{ scale: bounceAnimation }] }}>
              <MaterialIcons
                name="local-fire-department"
                size={24}
                color="#ff4500"
              />
            </Animated.View>
            <Text style={styles.calculationText}>Calories</Text>
            <Animated.Text style={styles.valueText}>{animatedCalories}</Animated.Text>
          </View>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Animated.View style={{ transform: [{ scale: bounceAnimation }] }}>
            <FontAwesome5 name="tint" size={24} color="#1e90ff" />
          </Animated.View>
          <Text style={styles.gridText}>Water</Text>
          <Text style={styles.gridValue}>2.5 L</Text>
        </View>
        <View style={styles.gridItem}>
          <Animated.View style={{ transform: [{ scale: bounceAnimation }] }}>
            <FontAwesome5 name="lungs" size={24} color="#32cd32" />
          </Animated.View>
          <Text style={styles.gridText}>Oxygen</Text>
          <Text style={styles.gridValue}>98%</Text>
        </View>
        <View style={styles.gridItem}>
          <Animated.View style={{ transform: [{ scale: bounceAnimation }] }}>
            <FontAwesome5 name="bed" size={24} color="#4b0082" />
          </Animated.View>
          <Text style={styles.gridText}>Sleep</Text>
          <Text style={styles.gridValue}>7 hrs</Text>
        </View>
        <View style={styles.gridItem}>
          <Animated.View style={{ transform: [{ scale: bounceAnimation }] }}>
            <FontAwesome5 name="heartbeat" size={24} color="#ff6347" />
          </Animated.View>
          <Text style={styles.gridText}>Heart Rate</Text>
          <Text style={styles.gridValue}>72 bpm</Text>
        </View>
      </View>

    
      <View style={styles.watchContainer}>
        <Ionicons name="watch-outline" size={40} color="#34495e" />
        <View style={styles.watchDetails}>
          <Text style={styles.watchText}>Connected Watch</Text>
          <Text style={styles.watchSubText}>Brand: SmartFit</Text>
          <Text style={styles.watchSubText}>Battery: 80%</Text>
        </View>
      </View>

     
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.additionalInfoText}>
          Track your daily health activities seamlessly with our app.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 25,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  calculationsContainer: {
    marginBottom: 24,
  },
  calculationBar: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  calculationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  calculationText: {
    fontSize: 18,
    color: "#34495e",
    flex: 1,
    marginLeft: 12,
  },
  valueText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e74c3c",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "47%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  gridText: {
    fontSize: 16,
    color: "#7f8c8d",
    marginTop: 8,
  },
  gridValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2980b9",
    marginTop: 4,
  },
  watchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  watchDetails: {
    marginLeft: 16,
  },
  watchText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  watchSubText: {
    fontSize: 16,
    color: "#7f8c8d",
    marginTop: 4,
  },
  additionalInfoContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  additionalInfoText: {
    fontSize: 16,
    color: "#34495e",
    textAlign: "center",
  },
});

export default Health;
