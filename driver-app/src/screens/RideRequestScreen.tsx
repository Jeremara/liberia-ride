import React, { useState, useEffect } from "react";
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
Clock,
DollarSign,
User,
X,
Navigation
} from "lucide-react-native";

export default function RideRequestScreen() {

const navigation = useNavigation<any>();
const [timeLeft, setTimeLeft] = useState(15);

useEffect(() => {

if (timeLeft > 0) {
const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
return () => clearTimeout(timer);
} else {
handleReject();
}

}, [timeLeft]);

const handleAccept = () => {
navigation.navigate("PickupNavigation");
};

const handleReject = () => {
navigation.navigate("DriverDashboard");
};

return (

<SafeAreaView style={styles.container}>

{/* MAP AREA */}

<View style={styles.mapArea}>

<View style={styles.mapCenter}>

<MapPin size={60} color="#00b894" />

<Text style={styles.nearbyText}>
New ride request nearby
</Text>

</View>

{/* COUNTDOWN */}

<View style={styles.timerBox}>
<Text style={styles.timerText}>
{timeLeft}
</Text>
</View>

</View>

{/* REQUEST CARD */}

<View style={styles.card}>

<View style={styles.header}>

<View>
<Text style={styles.title}>
New Ride Request
</Text>

<Text style={styles.subtitle}>
Accept within {timeLeft} seconds
</Text>
</View>

<TouchableOpacity onPress={handleReject}>
<X color="#aaa" size={24}/>
</TouchableOpacity>

</View>

{/* PASSENGER */}

<View style={styles.passengerBox}>

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

{/* TRIP ROUTE */}

<View style={styles.routeRow}>

<View style={styles.routeLine}>

<View style={styles.pickupDot}/>

<View style={styles.line}/>

<MapPin color="red" size={16}/>

</View>

<View style={{flex:1}}>

<Text style={styles.label}>
Pickup
</Text>

<Text style={styles.location}>
Congo Town, Monrovia
</Text>

<Text style={styles.locationSub}>
Near City Hall Market
</Text>

<Text style={styles.label}>
Drop-off
</Text>

<Text style={styles.location}>
Mamba Point, Monrovia
</Text>

<Text style={styles.locationSub}>
Embassy Area
</Text>

</View>

</View>

{/* TRIP STATS */}

<View style={styles.statsRow}>

<View style={styles.statBox}>
<Navigation color="#0984e3"/>
<Text style={styles.statLabel}>Distance</Text>
<Text style={styles.statValue}>2.3 km</Text>
</View>

<View style={styles.statBox}>
<Clock color="#0984e3"/>
<Text style={styles.statLabel}>Time</Text>
<Text style={styles.statValue}>8 min</Text>
</View>

<View style={styles.statBox}>
<DollarSign color="#00b894"/>
<Text style={styles.statLabel}>Fare</Text>
<Text style={styles.fareValue}>L$ 850</Text>
</View>

</View>

{/* ACTION BUTTONS */}

<View style={styles.actions}>

<TouchableOpacity
style={styles.rejectBtn}
onPress={handleReject}
>

<Text style={styles.rejectText}>
Reject
</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.acceptBtn}
onPress={handleAccept}
>

<Text style={styles.acceptText}>
Accept Ride
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

nearbyText:{
color:"rgba(255,255,255,0.6)",
marginTop:10
},

timerBox:{
position:"absolute",
top:40,
alignSelf:"center",
width:80,
height:80,
borderRadius:40,
borderWidth:4,
borderColor:"#00b894",
justifyContent:"center",
alignItems:"center",
backgroundColor:"#2d3436"
},

timerText:{
color:"#fff",
fontSize:28,
fontWeight:"700"
},

card:{
backgroundColor:"#2d3436",
padding:20,
borderTopLeftRadius:25,
borderTopRightRadius:25
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:15
},

title:{
color:"#fff",
fontSize:22,
fontWeight:"600"
},

subtitle:{
color:"rgba(255,255,255,0.6)"
},

passengerBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#1a1a1a",
padding:12,
borderRadius:12,
marginBottom:15
},

avatar:{
width:45,
height:45,
borderRadius:25,
backgroundColor:"rgba(0,184,148,0.2)",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

passengerName:{
color:"#fff",
fontWeight:"600"
},

rating:{
color:"rgba(255,255,255,0.7)"
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
backgroundColor:"#00b894",
borderRadius:5
},

line:{
width:2,
height:40,
backgroundColor:"#444",
marginVertical:5
},

label:{
color:"rgba(255,255,255,0.5)",
fontSize:11
},

location:{
color:"#fff",
fontWeight:"500"
},

locationSub:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

statBox:{
flex:1,
backgroundColor:"#1a1a1a",
marginHorizontal:4,
padding:10,
borderRadius:10,
alignItems:"center"
},

statLabel:{
color:"rgba(255,255,255,0.6)",
fontSize:11
},

statValue:{
color:"#fff",
fontWeight:"600"
},

fareValue:{
color:"#00b894",
fontWeight:"700"
},

actions:{
flexDirection:"row"
},

rejectBtn:{
flex:1,
height:50,
borderWidth:1,
borderColor:"#555",
borderRadius:10,
justifyContent:"center",
alignItems:"center",
marginRight:5
},

acceptBtn:{
flex:1,
height:50,
backgroundColor:"#00b894",
borderRadius:10,
justifyContent:"center",
alignItems:"center",
marginLeft:5
},

rejectText:{
color:"#fff"
},

acceptText:{
color:"#fff",
fontWeight:"600"
}

});