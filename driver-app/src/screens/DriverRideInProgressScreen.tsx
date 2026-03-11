import React, { useState } from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet,
SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
MapPin,
Navigation,
Phone,
MessageCircle,
User,
AlertCircle
} from "lucide-react-native";

export default function DriverRideInProgressScreen() {

const navigation = useNavigation<any>();
const [startedTrip, setStartedTrip] = useState(false);

const handleStartTrip = () => {
setStartedTrip(true);
};

const handleCompleteTrip = () => {
navigation.navigate("DriverTripComplete");
};

return (

<SafeAreaView style={styles.container}>

{/* MAP AREA */}

<View style={styles.mapArea}>

<View style={styles.mapCenter}>

<Navigation size={60} color="#00b894"/>

<Text style={styles.mapText}>
{startedTrip ? "En route to destination" : "Waiting for passenger"}
</Text>

<Text style={styles.mapSubText}>
{startedTrip ? "4.5 km to destination" : "Passenger is boarding"}
</Text>

</View>

<View style={[
styles.statusBadge,
{backgroundColor: startedTrip ? "#00b894" : "#0984e3"}
]}>

<Text style={styles.statusText}>
{startedTrip ? "Trip in Progress" : "At Pickup Location"}
</Text>

</View>

</View>

{/* BOTTOM PANEL */}

<View style={styles.bottomCard}>

{/* WAITING ALERT */}

{!startedTrip && (

<View style={styles.alertBox}>

<AlertCircle color="#0984e3"/>

<View style={{marginLeft:10}}>

<Text style={styles.alertTitle}>
Waiting for Passenger
</Text>

<Text style={styles.alertSub}>
Start the trip once the passenger is in the vehicle
</Text>

</View>

</View>

)}

{/* PASSENGER INFO */}

<View style={styles.passengerRow}>

<View style={styles.passengerLeft}>

<View style={styles.avatar}>
<User color="#00b894"/>
</View>

<View>

<Text style={styles.passengerName}>
Sarah Johnson
</Text>

<Text style={styles.rating}>
★ 4.9 (142 trips)
</Text>

</View>

</View>

<View style={styles.contactBtns}>

<TouchableOpacity style={styles.phoneBtn}>
<Phone color="#fff"/>
</TouchableOpacity>

<TouchableOpacity style={styles.msgBtn}>
<MessageCircle color="#fff"/>
</TouchableOpacity>

</View>

</View>

{/* ROUTE */}

<View style={styles.routeRow}>

<View style={styles.routeLine}>

<View style={styles.pickupDot}/>
<View style={styles.line}/>
<MapPin color="red"/>

</View>

<View style={{flex:1}}>

<View style={styles.routeBox}>

<Text style={styles.label}>
Pickup
</Text>

<Text style={styles.location}>
Congo Town, Monrovia
</Text>

</View>

<View style={styles.routeBox}>

<Text style={styles.label}>
Destination
</Text>

<Text style={styles.location}>
Mamba Point, Monrovia
</Text>

<Text style={styles.locationSub}>
Embassy Area
</Text>

</View>

</View>

</View>

{/* TRIP STATS */}

{startedTrip && (

<View style={styles.statsRow}>

<View style={styles.statBox}>
<Text style={styles.statLabel}>Distance Left</Text>
<Text style={styles.statValue}>4.5 km</Text>
</View>

<View style={styles.statBox}>
<Text style={styles.statLabel}>ETA</Text>
<Text style={styles.statValue}>12 min</Text>
</View>

<View style={styles.statBox}>
<Text style={styles.statLabel}>Fare</Text>
<Text style={styles.fareValue}>L$ 850</Text>
</View>

</View>

)}

{/* MAIN BUTTON */}

{!startedTrip ? (

<TouchableOpacity
style={styles.mainBtn}
onPress={handleStartTrip}
>

<Text style={styles.mainBtnText}>
Start Trip
</Text>

</TouchableOpacity>

) : (

<TouchableOpacity
style={styles.mainBtn}
onPress={handleCompleteTrip}
>

<Text style={styles.mainBtnText}>
Complete Trip
</Text>

</TouchableOpacity>

)}

{/* EMERGENCY */}

<TouchableOpacity style={styles.emergencyBtn}>

<Text style={styles.emergencyText}>
Emergency Support
</Text>

</TouchableOpacity>

</View>

</SafeAreaView>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#1a1a1a"
},

mapArea:{
flex:1,
backgroundColor:"#2d3436",
justifyContent:"center",
alignItems:"center"
},

mapCenter:{
alignItems:"center"
},

mapText:{
color:"#fff",
fontWeight:"600",
marginTop:10
},

mapSubText:{
color:"rgba(255,255,255,0.6)"
},

statusBadge:{
position:"absolute",
top:40,
paddingHorizontal:20,
paddingVertical:10,
borderRadius:10
},

statusText:{
color:"#fff",
fontWeight:"700"
},

bottomCard:{
backgroundColor:"#2d3436",
padding:20,
borderTopLeftRadius:25,
borderTopRightRadius:25
},

alertBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"rgba(9,132,227,0.1)",
padding:12,
borderRadius:10,
marginBottom:15
},

alertTitle:{
color:"#fff",
fontWeight:"600"
},

alertSub:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

passengerRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:15
},

passengerLeft:{
flexDirection:"row",
alignItems:"center"
},

avatar:{
width:60,
height:60,
borderRadius:30,
backgroundColor:"rgba(0,184,148,0.2)",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

passengerName:{
color:"#fff",
fontSize:18,
fontWeight:"600"
},

rating:{
color:"rgba(255,255,255,0.7)"
},

contactBtns:{
flexDirection:"row"
},

phoneBtn:{
width:45,
height:45,
borderRadius:25,
backgroundColor:"#0984e3",
justifyContent:"center",
alignItems:"center",
marginRight:8
},

msgBtn:{
width:45,
height:45,
borderRadius:25,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center"
},

routeRow:{
flexDirection:"row",
marginBottom:15
},

routeLine:{
alignItems:"center",
marginRight:10
},

pickupDot:{
width:10,
height:10,
borderRadius:5,
backgroundColor:"#00b894"
},

line:{
width:2,
height:40,
backgroundColor:"#444",
marginVertical:5
},

routeBox:{
backgroundColor:"#1a1a1a",
padding:10,
borderRadius:8,
marginBottom:10
},

label:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

location:{
color:"#fff",
fontWeight:"600"
},

locationSub:{
color:"rgba(255,255,255,0.6)"
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

statBox:{
flex:1,
backgroundColor:"#1a1a1a",
marginHorizontal:5,
padding:10,
borderRadius:10,
alignItems:"center"
},

statLabel:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

statValue:{
color:"#fff",
fontWeight:"700"
},

fareValue:{
color:"#00b894",
fontWeight:"700"
},

mainBtn:{
backgroundColor:"#00b894",
height:55,
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

mainBtnText:{
color:"#fff",
fontSize:16,
fontWeight:"700"
},

emergencyBtn:{
height:45,
borderWidth:1,
borderColor:"#ff4d4d",
borderRadius:10,
justifyContent:"center",
alignItems:"center"
},

emergencyText:{
color:"#ff4d4d",
fontWeight:"600"
}

});