import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import {
  MapPin,
  Menu,
  Clock,
  Wallet,
  User,
  Bell,
  Home as HomeIcon,
  MessageCircle
} from "lucide-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.3106,
          longitude: -10.8047,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
      >

        <Marker
          coordinate={{
            latitude: 6.3106,
            longitude: -10.8047
          }}
          title="You"
        />

      </MapView>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}
          onPress={() => navigation.openDrawer()}
        >
          <Menu size={24} />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Bell size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Wallet")}
          >
            <Wallet size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <User size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Current Location Marker */}
      <View style={styles.locationMarker}>
        <View style={styles.markerOuter} />
        <View style={styles.markerInner}>
          <View style={styles.markerDot} />
        </View>
      </View>


      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.greeting}>Good Morning!</Text>
        <Text style={styles.subtitle}>
          Where would you like to go today?
        </Text>

        <TouchableOpacity
          style={styles.destinationButton}
          onPress={() => navigation.navigate("SetDestination")}
        >
          <MapPin size={20} color="#00b894" />
          <Text style={styles.destinationText}>
            Set your destination
          </Text>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickItem}
            onPress={() => navigation.navigate("RideHistory")}
          >
            <View style={styles.iconCircle}>
              <Clock size={24} color="#00b894" />
            </View>
            <Text style={styles.quickText}>Recent Trips</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickItem}
            onPress={() => navigation.navigate("DriverTracking")}
          >

            <View style={[styles.iconCircle, { backgroundColor: "#0984e315" }]}>
              <MaterialCommunityIcons name="road" size={24} color="#0984e3" />
            </View>

            <Text style={styles.quickText}>
              Track Ride
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickItem}
            onPress={() => navigation.navigate("SupportChat")}
          >

            <View style={styles.iconCircle}>
              <MessageCircle size={24} color="#00b894" />
            </View>

            <Text style={styles.quickText}>
              Support
            </Text>

          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },


  map: {
    flex: 1,
  },

  topBar: {
    position: "absolute",
    top: 38,
    left: 15,
    right: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  rightIcons: {
    flexDirection: "row",
    gap: 8
  },

  iconButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 25,
    elevation: 5
  },

  locationMarker: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    alignItems: "center",
    justifyContent: "center"
  },

  markerOuter: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#00b894",
    opacity: 0.2,
    borderRadius: 30
  },

  markerInner: {
    width: 60,
    height: 60,
    backgroundColor: "#00b894",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },

  markerDot: {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: 6
  },

  bottomCard: {
    backgroundColor: "#fff",
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20
  },

  greeting: {
    fontSize: 24,
    fontWeight: "600"
  },

  subtitle: {
    color: "#777",
    marginBottom: 20
  },

  destinationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20
  },

  destinationText: {
    marginLeft: 10,
    color: "#777"
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  quickItem: {
    alignItems: "center"
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#00b89415",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6
  },

  quickText: {
    fontSize: 12
  }
});