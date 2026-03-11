import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Phone, ArrowLeft } from "lucide-react-native";

export default function DriverLoginScreen() {

  const navigation = useNavigation<any>();

  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneSubmit = () => {
    if (phoneNumber.length >= 10) {
      setStep("otp");
    }
  };

  const handleOtpChange = (value: string) => {

    setOtp(value);

    if (value.length === 6) {
      setTimeout(() => {
        navigation.navigate("DriverDashboard");
      }, 500);
    }

  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            step === "otp"
              ? setStep("phone")
              : navigation.goBack()
          }
        >
          <ArrowLeft size={26} color="#fff"/>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>

        {step === "phone" ? (

          <>
            <View style={styles.iconCircle}>
              <Phone size={40} color="#00b894"/>
            </View>

            <Text style={styles.title}>Driver Login</Text>

            <Text style={styles.subtitle}>
              Enter your registered phone number
            </Text>

            <TextInput
              placeholder="+231 770 123 456"
              placeholderTextColor="#aaa"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.input}
            />

            <TouchableOpacity
              style={[
                styles.button,
                phoneNumber.length < 10 && { opacity:0.5 }
              ]}
              disabled={phoneNumber.length < 10}
              onPress={handlePhoneSubmit}
            >
              <Text style={styles.buttonText}>
                Continue
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("DriverRegistration")}
            >
              <Text style={styles.register}>
                New driver? Register here
              </Text>
            </TouchableOpacity>
          </>

        ) : (

          <>
            <Text style={styles.title}>
              Verify Your Number
            </Text>

            <Text style={styles.subtitle}>
              Enter the 6-digit code sent to
            </Text>

            <Text style={styles.phone}>
              {phoneNumber}
            </Text>

            <TextInput
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={6}
              value={otp}
              onChangeText={handleOtpChange}
            />

            <TouchableOpacity>
              <Text style={styles.resend}>
                Resend Code
              </Text>
            </TouchableOpacity>

          </>

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

header:{
padding:20
},

content:{
flex:1,
padding:30,
alignItems:"center"
},

iconCircle:{
width:80,
height:80,
borderRadius:40,
backgroundColor:"rgba(0,184,148,0.2)",
justifyContent:"center",
alignItems:"center",
marginBottom:20
},

title:{
fontSize:28,
color:"#fff",
fontWeight:"600",
marginBottom:5
},

subtitle:{
color:"rgba(255,255,255,0.6)",
marginBottom:20,
textAlign:"center"
},

phone:{
color:"#fff",
fontWeight:"600",
marginBottom:20
},

input:{
width:"100%",
height:55,
backgroundColor:"rgba(255,255,255,0.05)",
borderRadius:12,
paddingHorizontal:15,
color:"#fff",
marginBottom:20
},

otpInput:{
width:200,
height:55,
backgroundColor:"rgba(255,255,255,0.05)",
borderRadius:12,
textAlign:"center",
fontSize:24,
color:"#fff",
marginBottom:20
},

button:{
width:"100%",
height:55,
backgroundColor:"#00b894",
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginBottom:20
},

buttonText:{
color:"#fff",
fontWeight:"600",
fontSize:16
},

register:{
color:"#00b894"
},

resend:{
color:"#00b894"
}

});