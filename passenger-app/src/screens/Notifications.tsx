import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

export default function Notifications(){

const notifications=[
{ id:"1", title:"Driver arriving", message:"Your driver is 2 minutes away", time:"2 min ago"},
{ id:"2", title:"Ride completed", message:"You paid L$850", time:"1 hour ago"},
{ id:"3", title:"Promo available", message:"Get 10% off your next ride", time:"Yesterday"}
];

return(

<SafeAreaView style={styles.container}>

<Text style={styles.title}>Notifications</Text>

<FlatList
data={notifications}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(
<View style={styles.card}>
<Text style={styles.header}>{item.title}</Text>
<Text>{item.message}</Text>
<Text style={styles.time}>{item.time}</Text>
</View>
)}
/>

</SafeAreaView>

);

}

const styles=StyleSheet.create({
container:{flex:1,backgroundColor:"#f5f5f5",padding:20},
title:{fontSize:22,fontWeight:"700",marginBottom:10},
card:{backgroundColor:"white",padding:15,borderRadius:10,marginBottom:10},
header:{fontWeight:"600"},
time:{fontSize:12,color:"#777",marginTop:5}
});