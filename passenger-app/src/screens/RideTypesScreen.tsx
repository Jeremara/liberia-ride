import React, { useState } from "react";
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
  ArrowLeft,
  Car,
  Users,
  Briefcase,
  Clock,
  Check
} from "lucide-react-native";

const rideTypes = [
  {
    id: "economy",
    name: "Economy",
    description: "Affordable rides for everyday travel",
    icon: Car,
    price: "$10.00",
    time: "3 min",
    capacity: "4 seats",
    color: "#00b894"
  },
  {
    id: "standard",
    name: "Standard",
    description: "Comfortable rides with more space",
    icon: Users,
    price: "$12.50",
    time: "5 min",
    capacity: "4 seats",
    color: "#0984e3"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Luxury vehicles for special occasions",
    icon: Briefcase,
    price: "$18.00",
    time: "8 min",
    capacity: "4 seats",
    color: "#6c5ce7"
  }
];

export default function RideTypesScreen() {
  const navigation = useNavigation<any>();
  const [selectedType, setSelectedType] = useState("standard");

  const handleConfirm = () => {
    navigation.navigate("BookingConfirmation");
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Map Area */}
      <View style={styles.mapArea}>
        <Car size={60} color="#00b894" />
        <Text style={styles.mapText}>Available Drivers Nearby</Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("FareEstimation")}
        >
          <ArrowLeft size={24} />
        </TouchableOpacity>
      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>

        <Text style={styles.title}>Choose Your Ride</Text>
        <Text style={styles.subtitle}>
          Select the ride type that suits you best
        </Text>

        <ScrollView style={{ flex: 1 }}>

          {rideTypes.map((ride) => {
            const Icon = ride.icon;
            const isSelected = selectedType === ride.id;

            return (
              <TouchableOpacity
                key={ride.id}
                onPress={() => setSelectedType(ride.id)}
                style={[
                  styles.rideCard,
                  isSelected && styles.selectedRide
                ]}
              >

                <View style={styles.rideRow}>

                  <View
                    style={[
                      styles.iconCircle,
                      { backgroundColor: `${ride.color}20` }
                    ]}
                  >
                    <Icon size={30} color={ride.color} />
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.priceRow}>
                      <Text style={styles.rideName}>{ride.name}</Text>
                      <Text style={styles.price}>{ride.price}</Text>
                    </View>

                    <Text style={styles.description}>
                      {ride.description}
                    </Text>

                    <View style={styles.metaRow}>
                      <View style={styles.metaItem}>
                        <Clock size={14} color="#777" />
                        <Text style={styles.metaText}>{ride.time}</Text>
                      </View>

                      <View style={styles.metaItem}>
                        <Users size={14} color="#777" />
                        <Text style={styles.metaText}>{ride.capacity}</Text>
                      </View>
                    </View>
                  </View>

                  {isSelected && (
                    <View style={styles.checkCircle}>
                      <Check size={16} color="#fff" />
                    </View>
                  )}

                </View>

              </TouchableOpacity>
            );
          })}

        </ScrollView>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm Ride</Text>
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

mapText:{
marginTop:10,
color:"#777"
},

backButton:{
position:"absolute",
top:40,
left:20,
backgroundColor:"#fff",
padding:12,
borderRadius:25,
elevation:4
},

bottomCard:{
flex:1,
backgroundColor:"#fff",
borderTopLeftRadius:30,
borderTopRightRadius:30,
padding:25
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

rideCard:{
padding:15,
borderRadius:12,
borderWidth:2,
borderColor:"#eee",
marginBottom:10
},

selectedRide:{
borderColor:"#00b894",
backgroundColor:"#00b89410"
},

rideRow:{
flexDirection:"row",
alignItems:"center"
},

iconCircle:{
width:60,
height:60,
borderRadius:30,
justifyContent:"center",
alignItems:"center",
marginRight:10
},

priceRow:{
flexDirection:"row",
justifyContent:"space-between"
},

rideName:{
fontWeight:"600",
fontSize:16
},

price:{
fontWeight:"bold",
fontSize:16
},

description:{
fontSize:12,
color:"#777",
marginTop:2
},

metaRow:{
flexDirection:"row",
marginTop:6
},

metaItem:{
flexDirection:"row",
alignItems:"center",
marginRight:10
},

metaText:{
fontSize:11,
color:"#777",
marginLeft:3
},

checkCircle:{
width:26,
height:26,
borderRadius:13,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center"
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