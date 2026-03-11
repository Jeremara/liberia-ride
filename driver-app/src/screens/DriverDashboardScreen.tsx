import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
SafeAreaView,
Switch
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
MapPin,
Menu,
DollarSign,
Clock,
Star,
TrendingUp
} from "lucide-react-native";

export default function DriverDashboardScreen() {

const navigation = useNavigation<any>();

const [isOnline, setIsOnline] = useState(false);

const stats = {
todayEarnings: 2850,
todayRides: 12,
rating: 4.8,
acceptance: 95
};

const handleGoOnline = () => {

const newState = !isOnline;

setIsOnline(newState);

if (newState) {

setTimeout(() => {
navigation.navigate("RideRequest");
},3000);

}

};

return (

<SafeAreaView style={styles.container}>

{/* MAP AREA */}

<View style={styles.mapArea}>

<View style={styles.mapCenter}>

<MapPin size={70} color="rgba(0,184,148,0.3)" />

{isOnline ? (

<>
<Text style={styles.searchingText}>
Searching for rides...
</Text>

<View style={styles.searchBar}/>
</>

) : (

<Text style={styles.offlineText}>
Go online to start accepting rides
</Text>

)}

</View>

{/* TOP BAR */}

<View style={styles.topBar}>

<TouchableOpacity
style={styles.iconButton}
onPress={()=>navigation.navigate("DriverProfile")}
>
<Menu color="#fff" size={22}/>
</TouchableOpacity>

<View style={styles.onlineCard}>

<Text style={styles.onlineText}>
{isOnline ? "Online" : "Offline"}
</Text>

<Switch
value={isOnline}
onValueChange={handleGoOnline}
trackColor={{false:"#777",true:"#00b894"}}
/>

</View>

<TouchableOpacity
style={styles.iconButton}
onPress={()=>navigation.navigate("DriverEarnings")}
>
<DollarSign color="#fff" size={22}/>
</TouchableOpacity>

</View>

</View>

{/* BOTTOM PANEL */}

<View style={styles.bottomCard}>

<Text style={styles.title}>
{isOnline ? "You're Online" : "Ready to Drive?"}
</Text>

<Text style={styles.subtitle}>
{isOnline
? "Waiting for ride requests..."
: "Turn online to start earning today"}
</Text>

{/* STATS */}

<View style={styles.grid}>

<View style={styles.statBox}>
<DollarSign color="#00b894"/>
<Text style={styles.statLabel}>Today's Earnings</Text>
<Text style={styles.statValue}>
L$ {stats.todayEarnings}
</Text>
</View>

<View style={styles.statBox}>
<Clock color="#0984e3"/>
<Text style={styles.statLabel}>Rides Today</Text>
<Text style={styles.statValue}>
{stats.todayRides}
</Text>
</View>

<View style={styles.statBox}>
<Star color="#f1c40f"/>
<Text style={styles.statLabel}>Rating</Text>
<Text style={styles.statValue}>
{stats.rating}
</Text>
</View>

<View style={styles.statBox}>
<TrendingUp color="#00b894"/>
<Text style={styles.statLabel}>Acceptance</Text>
<Text style={styles.statValue}>
{stats.acceptance}%
</Text>
</View>

</View>

{/* GO ONLINE BUTTON */}

{!isOnline && (

<TouchableOpacity
style={styles.onlineButton}
onPress={handleGoOnline}
>

<Text style={styles.onlineButtonText}>
Go Online
</Text>

</TouchableOpacity>

)}

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

searchingText:{
color:"#fff",
marginTop:10,
fontWeight:"500"
},

offlineText:{
color:"rgba(255,255,255,0.5)",
marginTop:10
},

searchBar:{
marginTop:10,
width:60,
height:5,
backgroundColor:"#00b894",
borderRadius:5
},

topBar:{
position:"absolute",
top:20,
left:20,
right:20,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

iconButton:{
backgroundColor:"#2d3436",
padding:10,
borderRadius:30
},

onlineCard:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#2d3436",
paddingHorizontal:12,
paddingVertical:6,
borderRadius:12
},

onlineText:{
color:"#fff",
marginRight:8,
fontSize:13
},

bottomCard:{
backgroundColor:"#2d3436",
padding:20,
borderTopLeftRadius:25,
borderTopRightRadius:25
},

title:{
color:"#fff",
fontSize:22,
fontWeight:"600"
},

subtitle:{
color:"rgba(255,255,255,0.6)",
marginBottom:20
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

statBox:{
width:"48%",
backgroundColor:"#1a1a1a",
padding:15,
borderRadius:12,
marginBottom:10
},

statLabel:{
color:"rgba(255,255,255,0.6)",
fontSize:12,
marginTop:6
},

statValue:{
color:"#fff",
fontSize:18,
fontWeight:"700"
},

onlineButton:{
backgroundColor:"#00b894",
height:55,
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginTop:10
},

onlineButtonText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
}

});