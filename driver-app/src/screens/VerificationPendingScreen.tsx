import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Clock,
  CheckCircle2,
  FileText,
  AlertCircle
} from "lucide-react-native";

export default function VerificationPendingScreen() {

  const navigation = useNavigation<any>();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Icon */}

        <View style={styles.iconCircle}>
          <Clock size={60} color="#0984e3"/>
        </View>

        {/* Header */}

        <Text style={styles.title}>
          Verification in Progress
        </Text>

        <Text style={styles.subtitle}>
          We're reviewing your documents. This usually takes 24-48 hours.
        </Text>

        {/* Status Cards */}

        <View style={styles.card}>

          <View style={styles.row}>

            <View style={styles.successIcon}>
              <CheckCircle2 size={18} color="#00b894"/>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.cardTitle}>
                Documents Submitted
              </Text>

              <Text style={styles.cardText}>
                All required documents have been uploaded
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.card}>

          <View style={styles.row}>

            <View style={styles.reviewIcon}>
              <Clock size={18} color="#0984e3"/>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.cardTitle}>
                Under Review
              </Text>

              <Text style={styles.cardText}>
                Our team is reviewing your application
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.card}>

          <View style={styles.row}>

            <View style={styles.pendingIcon}>
              <FileText size={18} color="#aaa"/>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.cardTitleMuted}>
                Approval Pending
              </Text>

              <Text style={styles.cardTextMuted}>
                You'll be notified once approved
              </Text>
            </View>

          </View>

        </View>

        {/* Info Banner */}

        <View style={styles.infoBanner}>

          <AlertCircle size={20} color="#0984e3"/>

          <View style={{flex:1, marginLeft:10}}>

            <Text style={styles.infoTitle}>
              What's Next?
            </Text>

            <Text style={styles.infoText}>
              We'll send you an SMS and email notification once your account
              is approved. You can then start accepting ride requests.
            </Text>

          </View>

        </View>

        {/* Actions */}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("DriverLogin")}
        >
          <Text style={styles.primaryText}>
            Back to Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>
            Contact Support
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#1a1a1a"
},

content:{
padding:25,
alignItems:"center"
},

iconCircle:{
width:100,
height:100,
borderRadius:50,
backgroundColor:"rgba(9,132,227,0.2)",
alignItems:"center",
justifyContent:"center",
marginBottom:25
},

title:{
color:"#fff",
fontSize:26,
fontWeight:"600",
textAlign:"center"
},

subtitle:{
color:"rgba(255,255,255,0.6)",
textAlign:"center",
marginTop:10,
marginBottom:30
},

card:{
backgroundColor:"#2d3436",
padding:15,
borderRadius:12,
width:"100%",
marginBottom:10
},

row:{
flexDirection:"row",
alignItems:"center"
},

successIcon:{
width:35,
height:35,
borderRadius:18,
backgroundColor:"rgba(0,184,148,0.2)",
alignItems:"center",
justifyContent:"center",
marginRight:10
},

reviewIcon:{
width:35,
height:35,
borderRadius:18,
backgroundColor:"rgba(9,132,227,0.2)",
alignItems:"center",
justifyContent:"center",
marginRight:10
},

pendingIcon:{
width:35,
height:35,
borderRadius:18,
backgroundColor:"rgba(255,255,255,0.05)",
alignItems:"center",
justifyContent:"center",
marginRight:10
},

cardTitle:{
color:"#fff",
fontWeight:"600"
},

cardText:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

cardTitleMuted:{
color:"rgba(255,255,255,0.6)"
},

cardTextMuted:{
color:"rgba(255,255,255,0.4)",
fontSize:12
},

infoBanner:{
flexDirection:"row",
backgroundColor:"rgba(9,132,227,0.1)",
padding:15,
borderRadius:12,
marginTop:20,
marginBottom:25
},

infoTitle:{
color:"#fff",
fontWeight:"600"
},

infoText:{
color:"rgba(255,255,255,0.7)",
fontSize:12,
marginTop:4
},

primaryButton:{
width:"100%",
height:55,
backgroundColor:"#00b894",
borderRadius:12,
alignItems:"center",
justifyContent:"center",
marginBottom:10
},

primaryText:{
color:"#fff",
fontWeight:"600",
fontSize:16
},

secondaryButton:{
width:"100%",
height:50,
borderRadius:12,
borderWidth:1,
borderColor:"rgba(255,255,255,0.1)",
alignItems:"center",
justifyContent:"center"
},

secondaryText:{
color:"#fff"
}

});