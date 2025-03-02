import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HealthFormPage() {
  const navigation = useNavigation();
  const [form, setForm] = useState({    
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    description: "",
  });  

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", form);
    navigation.navigate("Home");
  };

  const handleSkip = () => {
    console.log("Skipped Form");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Health Information Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={form.age}
        onChangeText={(text) => handleInputChange("age", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Height (in cm)"
        value={form.height}
        onChangeText={(text) => handleInputChange("height", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (in kg)"
        value={form.weight}
        onChangeText={(text) => handleInputChange("weight", text)}
        keyboardType="numeric"
      />

      {/* Gender Section */}
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioContainer}>
        <Pressable
          style={[
            styles.radioButton,
            form.gender === "Male" ? styles.radioSelected : null,
          ]}
          onPress={() => handleInputChange("gender", "Male")}
        >
          <Text style={styles.radioText}>Male</Text>
        </Pressable>
        <Pressable
          style={[
            styles.radioButton,
            form.gender === "Female" ? styles.radioSelected : null,
          ]}
          onPress={() => handleInputChange("gender", "Female")}
        >
          <Text style={styles.radioText}>Female</Text>
        </Pressable>
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description of any health issue"
        value={form.description}
        onChangeText={(text) => handleInputChange("description", text)}
        multiline={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
        <Button title="Skip" onPress={handleSkip} color="#FF5722" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#AAC9AC",
    alignContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
    padding: 35,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,        
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  radioText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
