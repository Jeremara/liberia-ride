import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MapPin,
  Clock,
  Users,
  CreditCard
} from "lucide-react-native";

export default function BookingConfirmationScreen() {

  const navigation = useNavigation<any>();

  const handleConfirm = () => {
    navigation.navigate("SearchingDriver");
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Map Area */}
      <View style={styles.mapArea}>

        <View style={styles.routeRow}>
          <View style={styles.pickupCircle}>
            <MapPin size={18} color="#fff" />
          </View>

          <View style={styles.routeLine} />

          <View style={styles.destinationCircle}>
            <MapPin size={18} color="#fff" />
          </View>
        </View>

      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>

        <Text style={styles.title}>Confirm Your Booking</Text>
        <Text style={styles.subtitle}>
          Review your trip details before confirming
        </Text>

        {/* Route */}
        <View style={styles.routeBox}>

          <View style={styles.routeRow2}>

            <View style={styles.routeIcons}>
              <View style={styles.pickupDot}/>
              <View style={styles.line}/>
              <MapPin size={14} color="red"/>
            </View>

            <View>
              <Text style={styles.label}>Pickup</Text>
              <Text style={styles.location}>
                Congo Town, Monrovia
              </Text>

              <Text style={[styles.label,{marginTop:5}]}>
                Dropoff
              </Text>
              <Text style={styles.location}>
                Mamba Point, Monrovia
              </Text>
            </View>

          </View>

        </View>

        {/* Ride Details */}
        <View style={styles.detailsRow}>

          <View style={styles.detailBox}>
            <Users size={16} color="#777" />
            <Text style={styles.detailLabel}>Ride Type</Text>
            <Text style={styles.detailValue}>Standard</Text>
          </View>

          <View style={styles.detailBox}>
            <Clock size={16} color="#777" />
            <Text style={styles.detailLabel}>ETA</Text>
            <Text style={styles.detailValue}>15-20 min</Text>
          </View>

        </View>

        {/* Payment Method */}
        <View style={styles.paymentBox}>

          <View style={styles.paymentRow}>
            <View style={styles.paymentIcon}>
              <CreditCard size={18} color="#00b894"/>
            </View>

            <View>
              <Text style={styles.paymentLabel}>
                Payment Method
              </Text>
              <Text style={styles.paymentValue}>
                Mobile Money
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={()=>navigation.navigate("PaymentMethods")}
          >
            <Text style={styles.change}>Change</Text>
          </TouchableOpacity>

        </View>

        {/* Price Breakdown */}
        <LinearGradient
          colors={["#00b894","#0984e3"]}
          style={styles.priceBox}
        >

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Base Fare</Text>
            <Text style={styles.priceValue}>$10.00</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Service Fee</Text>
            <Text style={styles.priceValue}>$2.50</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>$12.50</Text>
          </View>

        </LinearGradient>

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleConfirm}
        >
          <Text style={styles.buttonText}>
            Confirm & Request Ride
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

mapArea:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#f2f2f2"
},

routeRow:{
flexDirection:"row",
alignItems:"center"
},

pickupCircle:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center"
},

destinationCircle:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#ff4d4d",
justifyContent:"center",
alignItems:"center"
},

routeLine:{
width:90,
height:4,
backgroundColor:"#00b894"
},

bottomCard:{
backgroundColor:"#fff",
padding:25,
borderTopLeftRadius:30,
borderTopRightRadius:30
},

title:{
fontSize:22,
fontWeight:"600"
},

subtitle:{
fontSize:13,
color:"#777",
marginBottom:15
},

routeBox:{
backgroundColor:"#f2f2f2",
padding:15,
borderRadius:12,
marginBottom:15
},

routeRow2:{
flexDirection:"row"
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
height:20,
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
padding:15,
borderRadius:12,
width:"48%"
},

detailLabel:{
fontSize:11,
color:"#777"
},

detailValue:{
fontWeight:"600"
},

paymentBox:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
backgroundColor:"#f2f2f2",
padding:15,
borderRadius:12,
marginBottom:15
},

paymentRow:{
flexDirection:"row",
alignItems:"center"
},

paymentIcon:{
width:35,
height:35,
borderRadius:18,
backgroundColor:"#fff",
justifyContent:"center",
alignItems:"center",
marginRight:8
},

paymentLabel:{
fontSize:11,
color:"#777"
},

paymentValue:{
fontWeight:"600"
},

change:{
color:"#00b894",
fontSize:13
},

priceBox:{
padding:20,
borderRadius:12,
marginBottom:15
},

priceRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:5
},

priceLabel:{
color:"rgba(255,255,255,0.8)"
},

priceValue:{
color:"#fff"
},

totalRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

totalLabel:{
color:"#fff",
fontWeight:"600"
},

totalPrice:{
fontSize:22,
fontWeight:"bold",
color:"#fff"
},

button:{
height:55,
backgroundColor:"#00b894",
borderRadius:12,
justifyContent:"center",
alignItems:"center"
},

buttonText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
}

});