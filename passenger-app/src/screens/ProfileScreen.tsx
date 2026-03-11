import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function ProfileScreen(){

return(

<SafeAreaView style={styles.container}>

<View style={styles.profileCard}>

<Text style={styles.name}>
Jeremiah Kamara
</Text>

<Text style={styles.phone}>
+231 770 123 456
</Text>

<Text style={styles.email}>
jeremiah@email.com
</Text>

</View>

</SafeAreaView>

);

}

const styles=StyleSheet.create({

container:{flex:1,backgroundColor:"#f5f5f5",padding:20},

profileCard:{
backgroundColor:"white",
padding:30,
borderRadius:12
},

name:{fontSize:22,fontWeight:"700"},

phone:{color:"#777",marginTop:5},

email:{color:"#777"}

});