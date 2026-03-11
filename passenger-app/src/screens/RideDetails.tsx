import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, MapPin, Clock, Navigation, Receipt } from "lucide-react-native";

export default function RideDetails(){

const navigation = useNavigation<any>();

const ride = {
pickup:"Congo Town, Monrovia",
destination:"Sinkor, Monrovia",
date:"Feb 27, 2026",
time:"2:30 PM",
distance:"4.2 km",
duration:"15 min",
fare:850,
driver:"John Kamara",
vehicle:"Toyota Corolla • LB-1234",
payment:"Orange Money"
};

return(

<SafeAreaView style={styles.container}>

<View style={styles.header}>
<TouchableOpacity onPress={()=>navigation.goBack()}>
<ArrowLeft/>
</TouchableOpacity>

<Text style={styles.title}>Ride Details</Text>

<Receipt/>
</View>

<View style={styles.card}>

<Text style={styles.label}>Route</Text>

<View style={styles.route}>

<View style={styles.dotGreen}/>
<View style={styles.line}/>
<View style={styles.dotBlue}/>

<View style={{marginLeft:10}}>
<Text style={styles.location}>{ride.pickup}</Text>
<Text style={styles.location}>{ride.destination}</Text>
</View>

</View>

</View>

<View style={styles.card}>

<Text style={styles.label}>Trip Info</Text>

<View style={styles.row}>
<Navigation size={16}/>
<Text style={styles.info}>{ride.distance}</Text>
</View>

<View style={styles.row}>
<Clock size={16}/>
<Text style={styles.info}>{ride.duration}</Text>
</View>

<Text style={styles.info}>Driver: {ride.driver}</Text>
<Text style={styles.info}>Vehicle: {ride.vehicle}</Text>

</View>

<View style={styles.card}>

<Text style={styles.label}>Payment</Text>

<Text style={styles.fare}>L$ {ride.fare}</Text>
<Text>{ride.payment}</Text>

</View>

</SafeAreaView>

);

}

const styles = StyleSheet.create({
container:{flex:1,backgroundColor:"#f5f5f5"},
header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:20,backgroundColor:"white"},
title:{fontSize:18,fontWeight:"600"},
card:{backgroundColor:"white",padding:20,margin:20,borderRadius:10},
label:{fontWeight:"600",marginBottom:10},
route:{flexDirection:"row",alignItems:"center"},
dotGreen:{width:8,height:8,borderRadius:4,backgroundColor:"#00b894"},
dotBlue:{width:8,height:8,borderRadius:4,borderWidth:2,borderColor:"#0984e3"},
line:{width:2,height:40,backgroundColor:"#ccc",marginVertical:5},
location:{fontWeight:"600",marginVertical:5},
row:{flexDirection:"row",alignItems:"center",gap:8,marginBottom:5},
info:{marginLeft:5},
fare:{fontSize:22,fontWeight:"700",color:"#00b894"}
});