import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, User, Car } from "lucide-react-native";

export default function DriverRegistrationScreen() {

  const navigation = useNavigation<any>();

  const [step, setStep] = useState<"personal" | "vehicle">("personal");

  // Personal
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+231 ");
  const [address, setAddress] = useState("");

  // Vehicle
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");

  const handlePersonalSubmit = () => {
    if (name && phone) {
      setStep("vehicle");
    }
  };

  const handleVehicleSubmit = () => {
    if (vehicleMake && vehicleModel && licensePlate) {
      navigation.navigate("DocumentUpload");
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            step === "vehicle"
              ? setStep("personal")
              : navigation.navigate("DriverLogin")
          }
        >
          <ArrowLeft size={26} color="#fff"/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Driver Registration
        </Text>
      </View>

      {/* Progress */}
      <View style={styles.progress}>
        <View style={styles.progressActive}/>
        <View
          style={
            step === "vehicle"
              ? styles.progressActive
              : styles.progressInactive
          }
        />
      </View>

      <ScrollView style={styles.content}>

        {step === "personal" ? (

          <>
            <View style={styles.center}>
              <View style={styles.iconCircle}>
                <User color="#00b894" size={24}/>
              </View>

              <Text style={styles.title}>
                Personal Information
              </Text>

              <Text style={styles.subtitle}>
                Tell us about yourself
              </Text>
            </View>

            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#aaa"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
            />

            <TextInput
              placeholder="Email (optional)"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            <TextInput
              placeholder="Home Address"
              placeholderTextColor="#aaa"
              value={address}
              onChangeText={setAddress}
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handlePersonalSubmit}
            >
              <Text style={styles.buttonText}>
                Continue to Vehicle Info
              </Text>
            </TouchableOpacity>

          </>

        ) : (

          <>
            <View style={styles.center}>
              <View style={styles.iconCircle}>
                <Car color="#00b894" size={24}/>
              </View>

              <Text style={styles.title}>
                Vehicle Information
              </Text>

              <Text style={styles.subtitle}>
                Tell us about your vehicle
              </Text>
            </View>

            <TextInput
              placeholder="Vehicle Make"
              placeholderTextColor="#aaa"
              value={vehicleMake}
              onChangeText={setVehicleMake}
              style={styles.input}
            />

            <TextInput
              placeholder="Vehicle Model"
              placeholderTextColor="#aaa"
              value={vehicleModel}
              onChangeText={setVehicleModel}
              style={styles.input}
            />

            <TextInput
              placeholder="Year"
              placeholderTextColor="#aaa"
              value={vehicleYear}
              onChangeText={setVehicleYear}
              style={styles.input}
            />

            <TextInput
              placeholder="License Plate"
              placeholderTextColor="#aaa"
              value={licensePlate}
              onChangeText={setLicensePlate}
              style={styles.input}
            />

            <TextInput
              placeholder="Vehicle Color"
              placeholderTextColor="#aaa"
              value={vehicleColor}
              onChangeText={setVehicleColor}
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleVehicleSubmit}
            >
              <Text style={styles.buttonText}>
                Continue to Document Upload
              </Text>
            </TouchableOpacity>

          </>

        )}

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#1a1a1a"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:20
},

headerTitle:{
color:"#fff",
fontSize:20,
fontWeight:"600",
marginLeft:15
},

progress:{
flexDirection:"row",
paddingHorizontal:20,
gap:10
},

progressActive:{
flex:1,
height:4,
backgroundColor:"#00b894",
borderRadius:5
},

progressInactive:{
flex:1,
height:4,
backgroundColor:"rgba(255,255,255,0.1)",
borderRadius:5
},

content:{
padding:25
},

center:{
alignItems:"center",
marginBottom:30
},

iconCircle:{
width:50,
height:50,
borderRadius:25,
backgroundColor:"rgba(0,184,148,0.2)",
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

title:{
fontSize:24,
color:"#fff",
fontWeight:"600"
},

subtitle:{
color:"rgba(255,255,255,0.6)"
},

input:{
height:55,
backgroundColor:"rgba(255,255,255,0.05)",
borderRadius:12,
paddingHorizontal:15,
color:"#fff",
marginBottom:15
},

button:{
height:55,
backgroundColor:"#00b894",
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginTop:10
},

buttonText:{
color:"#fff",
fontWeight:"600",
fontSize:16
}

});