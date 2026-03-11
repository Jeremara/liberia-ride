import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView,
SafeAreaView
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
ArrowLeft,
MapPin,
Navigation,
Calendar,
Clock,
Receipt
} from "lucide-react-native";

export default function RideHistory(){

const navigation = useNavigation<any>();
const [selectedTab,setSelectedTab] = useState("all");

const rides = [
{
id:1,
pickup:"Congo Town, Monrovia",
destination:"Sinkor, Monrovia",
date:"Feb 27, 2026",
time:"2:30 PM",
fare:850,
distance:"4.2 km",
duration:"15 min",
driverName:"John Kamara",
vehicleNumber:"LB-1234",
status:"completed",
paymentMethod:"Orange Money"
},
{
id:2,
pickup:"Broad Street, Monrovia",
destination:"Paynesville, Monrovia",
date:"Feb 26, 2026",
time:"9:15 AM",
fare:1200,
distance:"7.8 km",
duration:"25 min",
driverName:"Samuel Doe",
vehicleNumber:"LB-5678",
status:"completed",
paymentMethod:"MTN Money"
},
{
id:3,
pickup:"Duport Road",
destination:"Broad Street",
date:"Feb 23, 2026",
time:"8:30 AM",
fare:1350,
distance:"8.2 km",
duration:"28 min",
driverName:"David Kpan",
vehicleNumber:"LB-2468",
status:"cancelled",
paymentMethod:"N/A"
}
];

const filteredRides = rides.filter(r=>{
if(selectedTab==="all") return true;
return r.status === selectedTab;
});

return(

<SafeAreaView style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity onPress={()=>navigation.navigate("Home")}>

<ArrowLeft color="#000"/>

</TouchableOpacity>

<Text style={styles.headerTitle}>
Ride History
</Text>

<Receipt color="#000"/>

</View>

<ScrollView style={styles.content}>

{/* STATS */}

<View style={styles.statsRow}>

<StatBox
value={rides.filter(r=>r.status==="completed").length}
label="Total Rides"
color="#00b894"
/>

<StatBox
value="12.0"
label="Total km"
color="#0984e3"
/>

<StatBox
value="L$ 2,050"
label="Total Spent"
color="#000"
/>

</View>

{/* TABS */}

<View style={styles.tabs}>

<TabBtn
title="All"
active={selectedTab==="all"}
onPress={()=>setSelectedTab("all")}
/>

<TabBtn
title="Completed"
active={selectedTab==="completed"}
onPress={()=>setSelectedTab("completed")}
/>

<TabBtn
title="Cancelled"
active={selectedTab==="cancelled"}
onPress={()=>setSelectedTab("cancelled")}
/>

</View>

{/* RIDES */}

{filteredRides.length===0 &&(

<View style={styles.empty}>

<MapPin size={40} color="#ccc"/>

<Text>No rides found</Text>

</View>

)}

{filteredRides.map((ride)=>(

<View key={ride.id} style={styles.rideCard}>

{/* DATE */}

<View style={styles.rowBetween}>

<View style={styles.row}>

<Calendar size={14}/>
<Text style={styles.smallText}>{ride.date}</Text>

<Text style={styles.dot}>•</Text>

<Clock size={14}/>
<Text style={styles.smallText}>{ride.time}</Text>

</View>

<Text style={[
styles.status,
ride.status==="completed"
? {color:"#00b894"}
: {color:"red"}
]}>
{ride.status}
</Text>

</View>

{/* ROUTE */}

<View style={styles.routeRow}>

<View style={styles.routeLine}>

<View style={styles.pickDot}/>
<View style={styles.line}/>
<View style={styles.destDot}/>

</View>

<View>

<Text style={styles.location}>
{ride.pickup}
</Text>

<Text style={styles.location}>
{ride.destination}
</Text>

</View>

</View>

{/* DETAILS */}

{ride.status==="completed" &&(

<View style={styles.rowBetween}>

<View style={styles.row}>

<Navigation size={14}/>
<Text style={styles.smallText}>
{ride.distance}
</Text>

<Text style={styles.dot}>•</Text>

<Clock size={14}/>
<Text style={styles.smallText}>
{ride.duration}
</Text>

</View>

<Text style={styles.fare}>
L$ {ride.fare}
</Text>

</View>

)}

</View>

))}

</ScrollView>

</SafeAreaView>

);

}

/* COMPONENTS */

function TabBtn({title,active,onPress}:any){

return(

<TouchableOpacity
style={[
styles.tabBtn,
active && {backgroundColor:"#00b894"}
]}
onPress={onPress}
>

<Text style={{color:active?"#fff":"#000"}}>
{title}
</Text>

</TouchableOpacity>

);

}

function StatBox({value,label,color}:any){

return(

<View style={styles.statBox}>

<Text style={[styles.statValue,{color}]}>
{value}
</Text>

<Text style={styles.statLabel}>
{label}
</Text>

</View>

);

}

/* STYLES */

const styles = StyleSheet.create({

container:{flex:1,backgroundColor:"#f5f5f5", top:35},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:20,
backgroundColor:"#fff"
},

headerTitle:{
fontSize:18,
fontWeight:"600"
},

content:{padding:20},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:20
},

statBox:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
alignItems:"center",
flex:1,
marginHorizontal:4
},

statValue:{
fontSize:18,
fontWeight:"700"
},

statLabel:{
fontSize:12,
color:"#777"
},

tabs:{
flexDirection:"row",
marginBottom:20
},

tabBtn:{
flex:1,
padding:10,
backgroundColor:"#eee",
alignItems:"center",
borderRadius:6,
marginHorizontal:4
},

rideCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
marginBottom:10
},

row:{
flexDirection:"row",
alignItems:"center"
},

rowBetween:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:10
},

smallText:{
marginLeft:4,
color:"#777"
},

dot:{
marginHorizontal:5,
color:"#777"
},

status:{
fontWeight:"600"
},

routeRow:{
flexDirection:"row",
marginBottom:10
},

routeLine:{
alignItems:"center",
marginRight:10
},

pickDot:{
width:8,
height:8,
borderRadius:4,
backgroundColor:"#00b894"
},

line:{
width:2,
height:25,
backgroundColor:"#ccc",
marginVertical:3
},

destDot:{
width:8,
height:8,
borderRadius:4,
borderWidth:2,
borderColor:"#0984e3"
},

location:{
fontWeight:"600"
},

fare:{
fontSize:16,
fontWeight:"700"
},

empty:{
alignItems:"center",
marginTop:40
}

});