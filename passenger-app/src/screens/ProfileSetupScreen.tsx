import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Camera } from "lucide-react-native";

export default function ProfileSetupScreen() {
  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      navigation.replace("Main", {
        screen: "Home"
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Login")}
        >
          <ArrowLeft size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.subtitle}>
          Help us personalize your experience
        </Text>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name ? name.charAt(0).toUpperCase() : "U"}
            </Text>
          </View>

          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Name Input */}
        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="your.email@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value="+231 770 123 456"
          editable={false}
        />

        {/* Submit */}
        <TouchableOpacity
          style={[
            styles.button,
            !name.trim() && styles.buttonDisabled
          ]}
          disabled={!name.trim()}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Complete Setup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    padding: 20
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center"
  },

  content: {
    flex: 1,
    padding: 30
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 6
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 30
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#00b89420",
    alignItems: "center",
    justifyContent: "center"
  },

  avatarText: {
    fontSize: 36,
    color: "#00b894",
    fontWeight: "600"
  },

  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: "35%",
    backgroundColor: "#00b894",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  label: {
    color: "#777",
    marginBottom: 5
  },

  input: {
    height: 55,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20
  },

  disabledInput: {
    backgroundColor: "#e9e9e9"
  },

  button: {
    backgroundColor: "#00b894",
    height: 55,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonDisabled: {
    backgroundColor: "#9dd8c9"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  }
});