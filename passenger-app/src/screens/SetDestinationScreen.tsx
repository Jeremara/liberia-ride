import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star
} from "lucide-react-native";

const recentPlaces = [
  { name: "Paynesville City Hall", address: "Paynesville, Monrovia", time: "2 days ago" },
  { name: "Liberia Mall", address: "Sinkor, Monrovia", time: "1 week ago" },
  { name: "Roberts International Airport", address: "Harbel, Margibi County", time: "2 weeks ago" }
];

const savedPlaces = [
  { name: "Home", address: "Congo Town, Monrovia", icon: "🏠" },
  { name: "Work", address: "Mamba Point, Monrovia", icon: "💼" }
];

export default function SetDestinationScreen() {
  const navigation = useNavigation<any>();

  const [pickup, setPickup] = useState("Current Location");
  const [destination, setDestination] = useState("");

  const handleContinue = () => {
    if (destination.trim()) {
      navigation.navigate("FareEstimation");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ArrowLeft size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Set Destination</Text>
      </View>

      {/* Inputs */}
      <View style={styles.inputSection}>
        <View style={styles.locationRow}>
          
          {/* Location Icons */}
          <View style={styles.locationIcons}>
            <View style={styles.pickupDot} />
            <View style={styles.line} />
            <MapPin size={16} color="red" />
          </View>

          {/* Inputs */}
          <View style={{ flex: 1 }}>
            <TextInput
              value={pickup}
              onChangeText={setPickup}
              placeholder="Pickup location"
              style={styles.input}
            />

            <TextInput
              value={destination}
              onChangeText={setDestination}
              placeholder="Where to?"
              style={styles.input}
              autoFocus
            />
          </View>
        </View>

        {destination.trim() !== "" && (
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={{ flex: 1 }}>

        {/* Saved Places */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Places</Text>

          {savedPlaces.map((place, index) => (
            <TouchableOpacity
              key={index}
              style={styles.placeItem}
              onPress={() => setDestination(place.address)}
            >
              <View style={styles.iconCircle}>
                <Text style={{ fontSize: 20 }}>{place.icon}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.placeAddress}>{place.address}</Text>
              </View>

              <Star size={20} color="#f59e0b" fill="#f59e0b" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Places */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Places</Text>

          {recentPlaces.map((place, index) => (
            <TouchableOpacity
              key={index}
              style={styles.placeItem}
              onPress={() => setDestination(place.address)}
            >
              <View style={styles.iconCircle}>
                <Clock size={20} color="#777" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.placeAddress}>{place.address}</Text>
              </View>

              <Text style={styles.time}>{place.time}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 35
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  headerTitle: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "600"
  },

  inputSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  locationRow: {
    flexDirection: "row"
  },

  locationIcons: {
    alignItems: "center",
    marginRight: 10,
    marginTop: 10
  },

  pickupDot: {
    width: 10,
    height: 10,
    backgroundColor: "#00b894",
    borderRadius: 5
  },

  line: {
    width: 2,
    height: 25,
    backgroundColor: "#ccc",
    marginVertical: 4
  },

  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 10
  },

  continueButton: {
    backgroundColor: "#00b894",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  continueText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  },

  section: {
    padding: 20
  },

  sectionTitle: {
    color: "#777",
    marginBottom: 10
  },

  placeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },

  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  placeName: {
    fontWeight: "600"
  },

  placeAddress: {
    fontSize: 13,
    color: "#777"
  },

  time: {
    fontSize: 12,
    color: "#999"
  }

});