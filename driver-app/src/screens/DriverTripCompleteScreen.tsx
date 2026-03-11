import React from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet,
SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
CheckCircle2,
MapPin,
Clock,
TrendingUp
} from "lucide-react-native";

export default function DriverTripCompleteScreen() {

const navigation = useNavigation<any>();

const tripData = {
baseFare: 650,
distance: 4.5,
duration: 18,
serviceFee: 150,
total: 850,
commission: 170,
earnings: 680
};

const handleContinue = () => {
navigation.navigate("DriverDashboard");
};

return (

<SafeAreaView style={styles.container}>

<View style={styles.content}>

{/* SUCCESS ICON */}

<View style={styles.successSection}>

<View style={styles.iconCircle}>
<CheckCircle2 size={60} color="#00b894"/>
</View>

<Text style={styles.title}>
Trip Completed!
</Text>

<Text style={styles.subtitle}>
Great job! Payment received
</Text>

</View>

{/* EARNINGS CARD */}

<View style={styles.earningsCard}>

<Text style={styles.earningsLabel}>
You Earned
</Text>

<Text style={styles.earningsValue}>
L$ {tripData.earnings}
</Text>

<Text style={styles.afterText}>
After commission
</Text>

</View>

{/* TRIP SUMMARY */}

<View style={styles.card}>

<Text style={styles.sectionTitle}>
Trip Summary
</Text>

<View style={styles.routeRow}>

<View style={styles.routeLine}>
<View style={styles.dot}/>
<View style={styles.line}/>
<MapPin color="red"/>
</View>

<View>

<Text style={styles.label}>
From
</Text>

<Text style={styles.location}>
Congo Town, Monrovia
</Text>

<Text style={styles.label}>
To
</Text>

<Text style={styles.location}>
Mamba Point, Monrovia
</Text>

</View>

</View>

{/* DETAILS */}

<View style={styles.statsRow}>

<View style={styles.statBox}>

<Clock color="#aaa"/>

<Text style={styles.statLabel}>
Duration
</Text>

<Text style={styles.statValue}>
{tripData.duration} min
</Text>

</View>

<View style={styles.statBox}>

<MapPin color="#aaa"/>

<Text style={styles.statLabel}>
Distance
</Text>

<Text style={styles.statValue}>
{tripData.distance} km
</Text>

</View>

</View>

{/* EARNINGS BREAKDOWN */}

<View style={styles.breakdown}>

<Text style={styles.sectionTitle}>
Earnings Breakdown
</Text>

<View style={styles.row}>

<Text style={styles.rowLabel}>
Trip Fare
</Text>

<Text style={styles.rowValue}>
L$ {tripData.total}
</Text>

</View>

<View style={styles.row}>

<Text style={styles.rowLabel}>
Platform Commission (20%)
</Text>

<Text style={styles.rowNegative}>
- L$ {tripData.commission}
</Text>

</View>

<View style={styles.totalRow}>

<Text style={styles.totalLabel}>
Your Earnings
</Text>

<Text style={styles.totalValue}>
L$ {tripData.earnings}
</Text>

</View>

</View>

{/* PASSENGER */}

<View style={styles.passengerBox}>

<Text style={styles.label}>
Passenger
</Text>

<View style={styles.passengerRow}>

<View>

<Text style={styles.location}>
Sarah Johnson
</Text>

<Text style={styles.smallText}>
Paid with Mobile Money
</Text>

</View>

<Text style={styles.rating}>
★ 4.9
</Text>

</View>

</View>

</View>

{/* ACTION BUTTONS */}

<TouchableOpacity
style={styles.mainButton}
onPress={handleContinue}
>

<Text style={styles.mainButtonText}>
Back to Dashboard
</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.secondaryButton}
onPress={()=>navigation.navigate("DriverEarnings")}
>

<TrendingUp color="#fff"/>

<Text style={styles.secondaryText}>
View Earnings Report
</Text>

</TouchableOpacity>

</View>

</SafeAreaView>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#1a1a1a"
},

content:{
padding:20
},

successSection:{
alignItems:"center",
marginTop:40,
marginBottom:20
},

iconCircle:{
width:100,
height:100,
borderRadius:50,
backgroundColor:"rgba(0,184,148,0.2)",
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

title:{
fontSize:28,
color:"#fff",
fontWeight:"700"
},

subtitle:{
color:"rgba(255,255,255,0.6)"
},

earningsCard:{
backgroundColor:"#00b894",
padding:20,
borderRadius:15,
alignItems:"center",
marginBottom:20
},

earningsLabel:{
color:"rgba(255,255,255,0.8)"
},

earningsValue:{
fontSize:40,
fontWeight:"700",
color:"#fff"
},

afterText:{
color:"rgba(255,255,255,0.7)"
},

card:{
backgroundColor:"#2d3436",
padding:20,
borderRadius:15,
marginBottom:20
},

sectionTitle:{
color:"#fff",
fontWeight:"700",
marginBottom:10
},

routeRow:{
flexDirection:"row",
marginBottom:15
},

routeLine:{
alignItems:"center",
marginRight:10
},

dot:{
width:10,
height:10,
borderRadius:5,
backgroundColor:"#00b894"
},

line:{
width:2,
height:40,
backgroundColor:"#444",
marginVertical:5
},

label:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

location:{
color:"#fff",
fontWeight:"600"
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

statBox:{
flex:1,
backgroundColor:"#1a1a1a",
padding:10,
borderRadius:10,
alignItems:"center",
marginHorizontal:5
},

statLabel:{
color:"rgba(255,255,255,0.6)",
fontSize:12
},

statValue:{
color:"#fff",
fontWeight:"700"
},

breakdown:{
marginTop:10
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:5
},

rowLabel:{
color:"rgba(255,255,255,0.6)"
},

rowValue:{
color:"#fff"
},

rowNegative:{
color:"#ff4d4d"
},

totalRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

totalLabel:{
color:"#fff",
fontWeight:"700"
},

totalValue:{
color:"#00b894",
fontWeight:"700",
fontSize:20
},

passengerBox:{
marginTop:15
},

passengerRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

smallText:{
color:"rgba(255,255,255,0.6)"
},

rating:{
color:"#f1c40f",
fontWeight:"700"
},

mainButton:{
backgroundColor:"#00b894",
height:55,
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

mainButtonText:{
color:"#fff",
fontWeight:"700",
fontSize:16
},

secondaryButton:{
height:50,
borderRadius:12,
borderWidth:1,
borderColor:"#555",
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap:8
},

secondaryText:{
color:"#fff"
}

});