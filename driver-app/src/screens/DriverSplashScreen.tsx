import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function DriverSplashScreen() {

  const navigation = useNavigation<any>();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate("DriverLogin");
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <LinearGradient
      colors={["#1a1a1a", "#2d3436"]}
      style={styles.container}
    >

      <SafeAreaView style={styles.inner}>

        <View style={styles.logoBox}>

          <Image
            source={require("../../assets/logo/logo.jpeg")}
            style={styles.logo}
          />

        </View>

        <Text style={styles.title}>
          Liberia Ride
        </Text>

        <Text style={styles.subtitle}>
          Driver Partner
        </Text>

        <View style={styles.loader}/>

      </SafeAreaView>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

inner:{
alignItems:"center"
},

logoBox:{
padding:20,
borderRadius:25,
marginBottom:20
},

logo:{
width:100,
height:100,
borderRadius:20
},

title:{
color:"#fff",
fontSize:32,
fontWeight:"700"
},

subtitle:{
color:"rgba(255,255,255,0.8)",
fontSize:16,
marginTop:5
},

loader:{
marginTop:20,
width:50,
height:6,
backgroundColor:"#00b894",
borderRadius:10
}

});