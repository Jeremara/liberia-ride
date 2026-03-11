import React, { useEffect, useState } from "react";
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
  Navigation,
  X
} from "lucide-react-native";

export default function RideInProgressScreen() {

  const navigation = useNavigation<any>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress(prev => {

        if (prev >= 100) {
          clearInterval(interval);
          navigation.navigate("TripComplete");
          return 100;
        }

        return prev + 2;

      });
    }, 200);

    return () => clearInterval(interval);

  }, []);

  return (
    <SafeAreaView style={styles.container}>

      {/* Map Area */}
      <View style={styles.mapArea}>

        <View style={styles.navigationCircle}>
          <Navigation size={40} color="#fff" />
        </View>

        <Text style={styles.mapTitle}>Ride in Progress</Text>
        <Text style={styles.mapSubtitle}>
          Following GPS route
        </Text>

        {/* Progress Bar */}
        <View style={styles.progressBox}>

          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              Trip Progress
            </Text>

            <Text style={styles.progressPercent}>
              {progress}%
            </Text>
          </View>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%` }
              ]}
            />
          </View>

        </View>

      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>

        {/* Driver Info */}
        <View style={styles.driverRow}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>

          <View style={{flex:1}}>
            <Text style={styles.driverName}>
              John Doe
            </Text>

            <View style={styles.ratingRow}>
              <Star size={14} color="#f59e0b" fill="#f59e0b"/>
              <Text style={styles.rating}>4.8</Text>
            </View>
          </View>

          <View style={styles.actionRow}>

            <TouchableOpacity style={styles.actionButton}>
              <Phone size={16}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle size={16}/>
            </TouchableOpacity>

          </View>

        </View>

        {/* Route Info */}
        <View style={styles.routeRow}>

          <View style={styles.routeIcons}>
            <View style={styles.pickupDot}/>
            <View style={styles.routeLine}/>
            <MapPin size={14} color="red"/>
          </View>

          <View>

            <Text style={styles.label}>Pickup</Text>
            <Text style={styles.location}>
              Congo Town, Monrovia
            </Text>

            <Text style={[styles.label,{marginTop:6}]}>
              Destination
            </Text>
            <Text style={styles.location}>
              Mamba Point, Monrovia
            </Text>

          </View>

        </View>

        {/* ETA Box */}
        <View style={styles.etaBox}>

          <View>
            <Text style={styles.etaLabel}>
              Estimated Arrival
            </Text>

            <Text style={styles.etaTime}>
              12 minutes
            </Text>

            <Text style={styles.etaDistance}>
              4.2 km remaining
            </Text>
          </View>

          <Navigation size={40} color="rgba(255,255,255,0.3)" />

        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text>Share Trip</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.emergencyButton}>
            <X size={14} color="#ff3b30"/>
            <Text style={styles.emergencyText}>
              Emergency
            </Text>
          </TouchableOpacity>

        </View>

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

navigationCircle:{
width:80,
height:80,
borderRadius:40,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center"
},

mapTitle:{
marginTop:10,
fontWeight:"600"
},

mapSubtitle:{
fontSize:12,
color:"#777"
},

progressBox:{
position:"absolute",
bottom:20,
left:20,
right:20,
backgroundColor:"#fff",
padding:12,
borderRadius:10
},

progressHeader:{
flexDirection:"row",
justifyContent:"space-between"
},

progressLabel:{
fontSize:12,
color:"#777"
},

progressPercent:{
fontSize:12,
fontWeight:"600"
},

progressBar:{
height:6,
backgroundColor:"#eee",
borderRadius:5,
marginTop:6
},

progressFill:{
height:6,
backgroundColor:"#00b894",
borderRadius:5
},

bottomCard:{
backgroundColor:"#fff",
padding:25,
borderTopLeftRadius:30,
borderTopRightRadius:30
},

driverRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:15
},

avatar:{
width:45,
height:45,
borderRadius:22,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

avatarText:{
color:"#fff",
fontWeight:"600"
},

driverName:{
fontWeight:"600"
},

ratingRow:{
flexDirection:"row",
alignItems:"center"
},

rating:{
marginLeft:3
},

actionRow:{
flexDirection:"row"
},

actionButton:{
width:35,
height:35,
borderRadius:18,
borderWidth:1,
borderColor:"#ddd",
justifyContent:"center",
alignItems:"center",
marginLeft:6
},

routeRow:{
flexDirection:"row",
marginBottom:15
},

routeIcons:{
alignItems:"center",
marginRight:10
},

pickupDot:{
width:8,
height:8,
backgroundColor:"#00b894",
borderRadius:4
},

routeLine:{
width:2,
height:30,
backgroundColor:"#ccc",
marginVertical:4
},

label:{
fontSize:12,
color:"#777"
},

location:{
fontWeight:"600"
},

etaBox:{
backgroundColor:"#00b894",
borderRadius:12,
padding:15,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:15
},

etaLabel:{
color:"rgba(255,255,255,0.8)",
fontSize:12
},

etaTime:{
color:"#fff",
fontSize:20,
fontWeight:"700"
},

etaDistance:{
color:"rgba(255,255,255,0.8)",
fontSize:12
},

buttonRow:{
flexDirection:"row",
justifyContent:"space-between"
},

secondaryButton:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:10,
width:"48%",
alignItems:"center"
},

emergencyButton:{
borderWidth:1,
borderColor:"#ff3b30",
padding:12,
borderRadius:10,
width:"48%",
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},

emergencyText:{
color:"#ff3b30",
marginLeft:4
}

});