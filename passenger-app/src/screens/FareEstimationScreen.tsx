import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react-native";

export default function FareEstimationScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Map Area */}
      <View style={styles.mapContainer}>
        
        {/* Mock Route */}
        <View style={styles.routePreview}>
          <View style={styles.routeRow}>
            <View style={styles.pickupCircle}>
              <MapPin size={18} color="#fff" />
            </View>

            <View style={styles.routeLine} />

            <View style={styles.destinationCircle}>
              <MapPin size={18} color="#fff" />
            </View>
          </View>

          <Text style={styles.routeText}>Route Preview</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("SetDestination")}
        >
          <ArrowLeft size={24} />
        </TouchableOpacity>

      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>

        {/* Trip Details */}
        <View style={styles.tripSection}>
          
          <View style={styles.tripRow}>
            
            <View style={styles.tripIcons}>
              <View style={styles.pickupDot}/>
              <View style={styles.tripLine}/>
              <MapPin size={14} color="red"/>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.label}>From</Text>
              <Text style={styles.location}>Congo Town, Monrovia</Text>

              <Text style={[styles.label,{marginTop:6}]}>To</Text>
              <Text style={styles.location}>Mamba Point, Monrovia</Text>
            </View>

          </View>

        </View>

        {/* Distance & Time */}
        <View style={styles.infoBox}>

          <View style={styles.infoItem}>
            <Clock size={18} color="#666"/>
            <View>
              <Text style={styles.infoLabel}>Duration</Text>
              <Text style={styles.infoValue}>15-20 min</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MapPin size={18} color="#666"/>
            <View>
              <Text style={styles.infoLabel}>Distance</Text>
              <Text style={styles.infoValue}>8.5 km</Text>
            </View>
          </View>

        </View>

        {/* Estimated Fare */}
        <LinearGradient
          colors={["#00b894","#0984e3"]}
          style={styles.fareBox}
        >

          <View style={styles.fareRow}>
            
            <View>
              <Text style={styles.fareLabel}>Estimated Fare</Text>
              <Text style={styles.fareAmount}>$12.50</Text>
              <Text style={styles.fareNote}>
                Final price may vary
              </Text>
            </View>

            <DollarSign size={50} color="rgba(255,255,255,0.2)" />

          </View>

        </LinearGradient>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("RideTypes")}
        >
          <Text style={styles.buttonText}>
            Choose Ride Type
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

mapContainer:{
flex:1,
backgroundColor:"#f2f2f2",
justifyContent:"center",
alignItems:"center"
},

routePreview:{
alignItems:"center"
},

routeRow:{
flexDirection:"row",
alignItems:"center"
},

pickupCircle:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center"
},

destinationCircle:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#ff4d4d",
justifyContent:"center",
alignItems:"center"
},

routeLine:{
width:80,
height:4,
backgroundColor:"#00b894"
},

routeText:{
marginTop:8,
color:"#777"
},

backButton:{
position:"absolute",
top:40,
left:20,
backgroundColor:"#fff",
padding:12,
borderRadius:25,
elevation:4
},

bottomCard:{
backgroundColor:"#fff",
padding:25,
borderTopLeftRadius:30,
borderTopRightRadius:30
},

tripSection:{
marginBottom:15
},

tripRow:{
flexDirection:"row"
},

tripIcons:{
alignItems:"center",
marginRight:10
},

pickupDot:{
width:8,
height:8,
backgroundColor:"#00b894",
borderRadius:4
},

tripLine:{
width:2,
height:20,
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

infoBox:{
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"#f2f2f2",
padding:15,
borderRadius:12,
marginBottom:20
},

infoItem:{
flexDirection:"row",
alignItems:"center",
gap:6
},

infoLabel:{
fontSize:12,
color:"#777"
},

infoValue:{
fontWeight:"600"
},

fareBox:{
borderRadius:12,
padding:20,
marginBottom:20
},

fareRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

fareLabel:{
color:"rgba(255,255,255,0.8)",
fontSize:13
},

fareAmount:{
fontSize:30,
fontWeight:"bold",
color:"#fff"
},

fareNote:{
fontSize:11,
color:"rgba(255,255,255,0.7)"
},

button:{
backgroundColor:"#00b894",
height:55,
borderRadius:12,
justifyContent:"center",
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"600",
fontSize:16
}

});