import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Car
} from "lucide-react-native";

export default function DriverAssignedScreen() {

  const navigation = useNavigation<any>();

  const handleStartRide = () => {
    setTimeout(() => {
      navigation.navigate("RideInProgress");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Map Area */}
      <View style={styles.mapArea}>

        <Car size={60} color="#00b894" />

        <Text style={styles.mapTitle}>Driver is arriving</Text>
        <Text style={styles.mapSubtitle}>ETA: 3 minutes</Text>

        {/* Driver moving indicator */}
        <View style={styles.driverMarker}>
          <Car size={22} color="#fff" />
        </View>

      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>

        {/* Success banner */}
        <View style={styles.successBanner}>
          <Text style={styles.successText}>
            Driver Assigned!
          </Text>
        </View>

        {/* Driver info */}
        <View style={styles.driverRow}>

          <View style={styles.driverAvatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>

          <View style={{flex:1}}>
            <Text style={styles.driverName}>John Doe</Text>

            <View style={styles.ratingRow}>
              <Star size={14} color="#f59e0b" fill="#f59e0b"/>
              <Text style={styles.rating}>4.8</Text>
              <Text style={styles.tripCount}>
                (324 trips)
              </Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.callButton}>
              <Phone size={18} color="#fff"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.chatButton}>
              <MessageCircle size={18} color="#fff"/>
            </TouchableOpacity>
          </View>

        </View>

        {/* Vehicle Info */}
        <View style={styles.vehicleBox}>

          <View>
            <Text style={styles.label}>Vehicle</Text>
            <Text style={styles.vehicleName}>
              Toyota Corolla
            </Text>
            <Text style={styles.vehiclePlate}>
              White • LR-1234-AB
            </Text>
          </View>

          <View style={styles.vehicleIcon}>
            <Car size={30} color="#00b894"/>
          </View>

        </View>

        {/* ETA Section */}
        <View style={styles.infoRow}>

          <View style={styles.infoBox}>
            <Clock size={16} color="#777"/>
            <Text style={styles.infoLabel}>Arriving in</Text>
            <Text style={styles.infoValue}>3 min</Text>
          </View>

          <View style={styles.infoBox}>
            <MapPin size={16} color="#777"/>
            <Text style={styles.infoLabel}>Distance</Text>
            <Text style={styles.infoValue}>0.8 km</Text>
          </View>

        </View>

        {/* Pickup Location */}
        <View style={styles.pickupBox}>

          <MapPin size={20} color="#00b894"/>

          <View style={{marginLeft:8}}>
            <Text style={styles.label}>Pickup Location</Text>
            <Text style={styles.pickupText}>
              Congo Town, Monrovia
            </Text>
            <Text style={styles.pickupHint}>
              Near City Hall Market
            </Text>
          </View>

        </View>

        {/* Track Driver */}
        <TouchableOpacity
          style={styles.trackButton}
          onPress={handleStartRide}
        >
          <Text style={styles.trackText}>
            Track Driver on Map
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

mapArea:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#f2f2f2"
},

mapTitle:{
marginTop:10,
fontWeight:"600"
},

mapSubtitle:{
fontSize:12,
color:"#777"
},

driverMarker:{
position:"absolute",
top:"40%",
backgroundColor:"#00b894",
width:40,
height:40,
borderRadius:20,
justifyContent:"center",
alignItems:"center"
},

bottomCard:{
backgroundColor:"#fff",
padding:25,
borderTopLeftRadius:30,
borderTopRightRadius:30
},

successBanner:{
backgroundColor:"#00b89420",
borderWidth:1,
borderColor:"#00b894",
padding:12,
borderRadius:10,
alignItems:"center",
marginBottom:15
},

successText:{
color:"#00b894",
fontWeight:"600"
},

driverRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:15
},

driverAvatar:{
width:60,
height:60,
borderRadius:30,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

avatarText:{
color:"#fff",
fontSize:20,
fontWeight:"600"
},

driverName:{
fontSize:18,
fontWeight:"600"
},

ratingRow:{
flexDirection:"row",
alignItems:"center",
marginTop:3
},

rating:{
marginLeft:3,
fontWeight:"600"
},

tripCount:{
marginLeft:5,
fontSize:12,
color:"#777"
},

actionRow:{
flexDirection:"row"
},

callButton:{
backgroundColor:"#0984e3",
width:45,
height:45,
borderRadius:22,
justifyContent:"center",
alignItems:"center",
marginRight:6
},

chatButton:{
backgroundColor:"#00b894",
width:45,
height:45,
borderRadius:22,
justifyContent:"center",
alignItems:"center"
},

vehicleBox:{
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"#f2f2f2",
padding:15,
borderRadius:12,
marginBottom:12
},

label:{
fontSize:12,
color:"#777"
},

vehicleName:{
fontWeight:"600",
fontSize:16
},

vehiclePlate:{
fontSize:12,
color:"#777"
},

vehicleIcon:{
backgroundColor:"#fff",
padding:10,
borderRadius:10
},

infoRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:12
},

infoBox:{
backgroundColor:"#f2f2f2",
padding:15,
borderRadius:10,
width:"48%"
},

infoLabel:{
fontSize:11,
color:"#777"
},

infoValue:{
fontWeight:"700",
fontSize:18,
color:"#00b894"
},

pickupBox:{
flexDirection:"row",
backgroundColor:"#eef7f5",
padding:12,
borderRadius:10,
marginBottom:15
},

pickupText:{
fontWeight:"600"
},

pickupHint:{
fontSize:12,
color:"#777"
},

trackButton:{
borderWidth:2,
borderColor:"#ddd",
height:50,
borderRadius:10,
justifyContent:"center",
alignItems:"center"
},

trackText:{
fontWeight:"600"
}

});