import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function DriverTracking(){

const driverLocation={
latitude:6.3106,
longitude:-10.8047
};

const userLocation={
latitude:6.313,
longitude:-10.80
};

return(

<SafeAreaView style={styles.container}>

<MapView
style={styles.map}
initialRegion={{
latitude:6.3106,
longitude:-10.8047,
latitudeDelta:0.02,
longitudeDelta:0.02
}}
>

<Marker coordinate={driverLocation} title="Driver"/>
<Marker coordinate={userLocation} title="Pickup"/>

</MapView>

<View style={styles.bottomCard}>

<Text style={styles.title}>Driver on the way</Text>

<Text>John Kamara • Toyota Corolla</Text>
<Text>ETA: 5 minutes</Text>

</View>

</SafeAreaView>

);

}

const styles=StyleSheet.create({
container:{flex:1},
map:{flex:1},
bottomCard:{
position:"absolute",
bottom:0,
backgroundColor:"white",
width:"100%",
padding:20,
borderTopLeftRadius:20,
borderTopRightRadius:20
},
title:{fontWeight:"700",fontSize:16}
});