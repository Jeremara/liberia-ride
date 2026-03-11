import React from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet,
SafeAreaView,
ScrollView,
Switch
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
ArrowLeft,
User,
Car,
Bell,
HelpCircle,
FileText,
Star,
ChevronRight,
LogOut,
Shield,
Settings,
MessageCircle
} from "lucide-react-native";

export default function DriverProfileScreen() {

const navigation = useNavigation<any>();

const profileStats = {
rating: 4.8,
totalTrips: 920,
yearsActive: 2.5,
acceptance: 95
};

return (

<SafeAreaView style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity
onPress={()=>navigation.navigate("DriverDashboard")}
>
<ArrowLeft color="#fff"/>
</TouchableOpacity>

<Text style={styles.headerTitle}>
Profile & Settings
</Text>

<TouchableOpacity>
<Settings color="#fff"/>
</TouchableOpacity>

</View>

<ScrollView contentContainerStyle={styles.content}>

{/* PROFILE CARD */}

<View style={styles.card}>

<View style={styles.profileRow}>

<View style={styles.avatar}>
<Text style={styles.avatarText}>JK</Text>
</View>

<View style={{flex:1}}>

<Text style={styles.name}>
John Kamara
</Text>

<Text style={styles.phone}>
+231 770 123 456
</Text>

<View style={styles.ratingRow}>

<Star color="#f1c40f"/>

<Text style={styles.ratingText}>
{profileStats.rating}
</Text>

<Text style={styles.tripText}>
• {profileStats.totalTrips} trips
</Text>

</View>

</View>

</View>

{/* STATS */}

<View style={styles.statsRow}>

<View style={styles.statBox}>
<Text style={styles.statValue}>{profileStats.rating}</Text>
<Text style={styles.statLabel}>Rating</Text>
</View>

<View style={styles.statBox}>
<Text style={styles.statValue}>{profileStats.acceptance}%</Text>
<Text style={styles.statLabel}>Acceptance</Text>
</View>

<View style={styles.statBox}>
<Text style={styles.statValue}>{profileStats.yearsActive}</Text>
<Text style={styles.statLabel}>Years Active</Text>
</View>

</View>

</View>

{/* VEHICLE */}

<Text style={styles.sectionTitle}>
Vehicle Information
</Text>

<View style={styles.card}>

<View style={styles.rowBetween}>

<View style={styles.vehicleRow}>

<View style={styles.vehicleIcon}>
<Car color="#00b894"/>
</View>

<View>

<Text style={styles.vehicleName}>
Toyota Corolla 2020
</Text>

<Text style={styles.vehiclePlate}>
White • LR-1234-AB
</Text>

</View>

</View>

<ChevronRight color="#777"/>

</View>

</View>

{/* ACCOUNT */}

<Text style={styles.sectionTitle}>
Account
</Text>

<View style={styles.card}>

<MenuItem icon={<User color="#aaa"/>} label="Personal Information"/>
<MenuItem icon={<FileText color="#aaa"/>} label="Documents"/>
<MenuItem icon={<Shield color="#aaa"/>} label="Privacy & Security"/>

</View>

{/* PREFERENCES */}

<Text style={styles.sectionTitle}>
Preferences
</Text>

<View style={styles.card}>

<SwitchItem icon={<Bell color="#aaa"/>} label="Push Notifications"/>
<SwitchItem icon={<MessageCircle color="#aaa"/>} label="SMS Notifications"/>

</View>

{/* SUPPORT */}

<Text style={styles.sectionTitle}>
Support
</Text>

<View style={styles.card}>

<MenuItem icon={<HelpCircle color="#aaa"/>} label="Help Center"/>
<MenuItem icon={<FileText color="#aaa"/>} label="Terms & Conditions"/>

</View>

{/* LOGOUT */}

<TouchableOpacity
style={styles.logoutBtn}
onPress={()=>navigation.navigate("DriverSplash")}
>

<LogOut color="#ff4d4d"/>

<Text style={styles.logoutText}>
Logout
</Text>

</TouchableOpacity>

<Text style={styles.version}>
Version 1.0.0
</Text>

</ScrollView>

</SafeAreaView>

);

}

/* MENU ITEM */

function MenuItem({icon,label}:any){

return(

<View style={styles.menuItem}>

<View style={styles.menuLeft}>
{icon}
<Text style={styles.menuText}>{label}</Text>
</View>

<ChevronRight color="#777"/>

</View>

);

}

/* SWITCH ITEM */

function SwitchItem({icon,label}:any){

return(

<View style={styles.menuItem}>

<View style={styles.menuLeft}>
{icon}
<Text style={styles.menuText}>{label}</Text>
</View>

<Switch/>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#1a1a1a",
top:35,
marginBottom:35
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:15,
backgroundColor:"#2d3436",

},

headerTitle:{
color:"#fff",
fontSize:18,
fontWeight:"600"
},

content:{
padding:20
},

card:{
backgroundColor:"#2d3436",
padding:15,
borderRadius:12,
marginBottom:20
},

profileRow:{
flexDirection:"row",
marginBottom:15
},

avatar:{
width:70,
height:70,
borderRadius:35,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

avatarText:{
color:"#fff",
fontSize:22,
fontWeight:"700"
},

name:{
color:"#fff",
fontSize:20,
fontWeight:"700"
},

phone:{
color:"rgba(255,255,255,0.6)"
},

ratingRow:{
flexDirection:"row",
alignItems:"center",
marginTop:5
},

ratingText:{
color:"#fff",
marginLeft:5
},

tripText:{
color:"#777",
marginLeft:5
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between"
},

statBox:{
flex:1,
backgroundColor:"#1a1a1a",
padding:10,
borderRadius:8,
alignItems:"center",
marginHorizontal:4
},

statValue:{
color:"#fff",
fontWeight:"700",
fontSize:18
},

statLabel:{
color:"#777",
fontSize:12
},

sectionTitle:{
color:"#fff",
fontWeight:"600",
marginBottom:8
},

vehicleRow:{
flexDirection:"row",
alignItems:"center"
},

vehicleIcon:{
backgroundColor:"rgba(0,184,148,0.2)",
padding:10,
borderRadius:10,
marginRight:10
},

vehicleName:{
color:"#fff",
fontWeight:"600"
},

vehiclePlate:{
color:"#777"
},

rowBetween:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

menuItem:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingVertical:12
},

menuLeft:{
flexDirection:"row",
alignItems:"center"
},

menuText:{
color:"#fff",
marginLeft:10
},

logoutBtn:{
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
borderWidth:1,
borderColor:"#ff4d4d",
padding:12,
borderRadius:10,
marginTop:10
},

logoutText:{
color:"#ff4d4d",
marginLeft:8
},

version:{
textAlign:"center",
color:"#555",
marginTop:20
}

});