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
import { ArrowLeft, Phone } from "lucide-react-native";

export default function LoginScreen() {
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
        navigation.navigate("ProfileSetup");
      }, 500);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            step === "otp" ? setStep("phone") : navigation.goBack()
          }
        >
          <ArrowLeft size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {step === "phone" ? (
          <>
            <View style={styles.iconCircle}>
              <Phone size={40} color="#00b894" />
            </View>

            <Text style={styles.title}>Enter Your Phone Number</Text>
            <Text style={styles.subtitle}>
              We'll send you a verification code
            </Text>

            <TextInput
              style={styles.input}
              placeholder="+231 770 123 456"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />

            <TouchableOpacity
              style={[
                styles.button,
                phoneNumber.length < 10 && styles.buttonDisabled
              ]}
              onPress={handlePhoneSubmit}
              disabled={phoneNumber.length < 10}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>Verify Your Number</Text>
            <Text style={styles.subtitle}>
              Enter the 6-digit code sent to{"\n"}
              <Text style={styles.phoneText}>{phoneNumber}</Text>
            </Text>

            <TextInput
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={6}
              value={otp}
              onChangeText={handleOtpChange}
              placeholder="------"
            />

            <TouchableOpacity>
              <Text style={styles.resend}>Resend Code</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    padding: 20
  },

  content: {
    flex: 1,
    padding: 30,
    justifyContent: "center"
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00b89415",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30
  },

  phoneText: {
    fontWeight: "600",
    color: "#000"
  },

  input: {
    height: 55,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 20
  },

  otpInput: {
    height: 60,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontSize: 22,
    letterSpacing: 10,
    marginBottom: 20
  },

  button: {
    backgroundColor: "#00b894",
    height: 55,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonDisabled: {
    backgroundColor: "#9dd8c9"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },

  resend: {
    textAlign: "center",
    color: "#00b894",
    marginTop: 10
  }
});