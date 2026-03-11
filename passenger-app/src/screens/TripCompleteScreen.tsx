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
  CheckCircle2,
  MapPin,
  Clock,
  Download
} from "lucide-react-native";

export default function TripCompleteScreen() {

  const navigation = useNavigation<any>();

  const handleContinue = () => {
    navigation.navigate("Rating");
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Success Icon */}
        <View style={styles.successSection}>
          <View style={styles.iconCircle}>
            <CheckCircle2 size={60} color="#00b894" />
          </View>

          <Text style={styles.title}>Trip Completed!</Text>

          <Text style={styles.subtitle}>
            Thank you for riding with National Cab
          </Text>
        </View>

        {/* Trip Summary */}
        <View style={styles.card}>

          <Text style={styles.sectionTitle}>Trip Summary</Text>

          {/* Route */}
          <View style={styles.routeRow}>

            <View style={styles.routeIcons}>
              <View style={styles.pickupDot}/>
              <View style={styles.line}/>
              <MapPin size={14} color="red"/>
            </View>

            <View>
              <Text style={styles.label}>From</Text>
              <Text style={styles.location}>
                Congo Town, Monrovia
              </Text>

              <Text style={[styles.label,{marginTop:8}]}>To</Text>
              <Text style={styles.location}>
                Mamba Point, Monrovia
              </Text>
            </View>

          </View>

          {/* Trip Details */}
          <View style={styles.detailsRow}>

            <View style={styles.detailBox}>
              <Clock size={16} color="#777"/>
              <Text style={styles.detailLabel}>Duration</Text>
              <Text style={styles.detailValue}>18 min</Text>
            </View>

            <View style={styles.detailBox}>
              <MapPin size={16} color="#777"/>
              <Text style={styles.detailLabel}>Distance</Text>
              <Text style={styles.detailValue}>8.5 km</Text>
            </View>

          </View>

          {/* Fare Breakdown */}
          <View style={styles.fareSection}>

            <Text style={styles.sectionTitle}>
              Fare Breakdown
            </Text>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Base Fare</Text>
              <Text>$10.00</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service Fee</Text>
              <Text>$2.50</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Tax</Text>
              <Text>$0.50</Text>
            </View>

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Paid</Text>

              <View>
                <Text style={styles.totalPrice}>
                  $13.00
                </Text>

                <Text style={styles.paymentMethod}>
                  Mobile Money
                </Text>
              </View>
            </View>

          </View>

        </View>

        {/* Actions */}
        <View style={styles.actions}>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleContinue}
          >
            <Text style={styles.primaryText}>
              Rate Your Trip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={()=>navigation.navigate("Home")}
          >
            <Download size={16}/>
            <Text style={styles.secondaryText}>
              Download Receipt
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

content:{
padding:20
},

successSection:{
alignItems:"center",
marginTop:40,
marginBottom:30
},

iconCircle:{
width:100,
height:100,
borderRadius:50,
backgroundColor:"#00b89420",
justifyContent:"center",
alignItems:"center",
marginBottom:15
},

title:{
fontSize:28,
fontWeight:"600"
},

subtitle:{
color:"#777",
textAlign:"center",
marginTop:5
},

card:{
borderWidth:1,
borderColor:"#eee",
borderRadius:12,
padding:20,
marginBottom:20
},

sectionTitle:{
fontWeight:"600",
marginBottom:15
},

routeRow:{
flexDirection:"row",
marginBottom:15
},

routeIcons:{
alignItems:"center",
marginRight:10
},

pickupDot:{
width:8,
height:8,
backgroundColor:"#00b894",
borderRadius:4
},

line:{
width:2,
height:30,
backgroundColor:"#ccc",
marginVertical:4
},

label:{
fontSize:12,
color:"#777"
},

location:{
fontWeight:"600"
},

detailsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

detailBox:{
backgroundColor:"#f2f2f2",
padding:12,
borderRadius:10,
width:"48%"
},

detailLabel:{
fontSize:11,
color:"#777"
},

detailValue:{
fontWeight:"600"
},

fareSection:{
borderTopWidth:1,
borderColor:"#eee",
paddingTop:10
},

priceRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:6
},

priceLabel:{
color:"#777"
},

totalRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:10
},

totalLabel:{
fontSize:16,
fontWeight:"600"
},

totalPrice:{
fontSize:22,
fontWeight:"700",
color:"#00b894"
},

paymentMethod:{
fontSize:11,
color:"#777"
},

actions:{
gap:10
},

primaryButton:{
backgroundColor:"#00b894",
height:55,
borderRadius:12,
justifyContent:"center",
alignItems:"center"
},

primaryText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
},

secondaryButton:{
borderWidth:1,
borderColor:"#ddd",
height:50,
borderRadius:10,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap:6
},

secondaryText:{
fontWeight:"500"
}

});