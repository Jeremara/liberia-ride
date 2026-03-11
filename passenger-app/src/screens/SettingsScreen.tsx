import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

export default function SettingsScreen(){

return(

<SafeAreaView style={styles.container}>

<Text style={styles.title}>Settings</Text>

<TouchableOpacity style={styles.item}>
<Text>Change Password</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.item}>
<Text>Language</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.item}>
<Text>Notifications</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.logout}>
<Text style={{color:"white"}}>Logout</Text>
</TouchableOpacity>

</SafeAreaView>

);

}

const styles = StyleSheet.create({

container:{flex:1,padding:20},

title:{fontSize:22,fontWeight:"700",marginBottom:20},

item:{
padding:15,
backgroundColor:"#f3f3f3",
borderRadius:8,
marginBottom:10
},

logout:{
marginTop:40,
backgroundColor:"#e74c3c",
padding:15,
borderRadius:10,
alignItems:"center"
}

});