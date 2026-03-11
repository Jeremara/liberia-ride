import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#00b894", "#0984e3"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo/logo.jpeg")}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Liberia Ride</Text>
        <Text style={styles.subtitle}>Liberia Mobility Platform</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  content: {
    alignItems: "center"
  },

  logoContainer: {
    padding: 25,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 20
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 16,
    resizeMode: "contain"
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5
  },

  subtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16
  }
});