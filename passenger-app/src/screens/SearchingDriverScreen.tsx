import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { X } from "lucide-react-native";

export default function SearchingDriverScreen() {

  const navigation = useNavigation<any>();

  useEffect(() => {
    // Simulate driver found after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("DriverAssigned");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Map Area */}
      <View style={styles.mapArea}>

        <View style={styles.loaderCircle}>
          <ActivityIndicator size="large" color="#fff" />
        </View>

      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>

        <View style={styles.centerText}>
          <Text style={styles.title}>Searching for a Driver</Text>
          <Text style={styles.subtitle}>
            We're finding the best driver near you...
          </Text>
        </View>

        {/* Progress Steps */}
        <View style={styles.progressSection}>

          <View style={styles.progressItem}>
            <View style={styles.activeDot}/>
            <Text style={styles.progressText}>
              Checking available drivers
            </Text>
          </View>

          <View style={styles.progressItem}>
            <View style={styles.activeDot}/>
            <Text style={styles.progressText}>
              Finding the best match
            </Text>
          </View>

          <View style={styles.progressItem}>
            <View style={styles.inactiveDot}/>
            <Text style={styles.inactiveText}>
              Confirming driver
            </Text>
          </View>

        </View>

        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancel}
        >
          <X size={18} />
          <Text style={styles.cancelText}>
            Cancel Request
          </Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          This usually takes less than a minute
        </Text>

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
backgroundColor:"#f2f2f2",
justifyContent:"center",
alignItems:"center"
},

loaderCircle:{
width:120,
height:120,
borderRadius:60,
backgroundColor:"#00b894",
justifyContent:"center",
alignItems:"center"
},

bottomCard:{
backgroundColor:"#fff",
padding:25,
borderTopLeftRadius:30,
borderTopRightRadius:30
},

centerText:{
alignItems:"center",
marginBottom:20
},

title:{
fontSize:22,
fontWeight:"600"
},

subtitle:{
color:"#777",
fontSize:13,
marginTop:4,
textAlign:"center"
},

progressSection:{
marginBottom:20
},

progressItem:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#f2f2f2",
padding:12,
borderRadius:10,
marginBottom:8
},

activeDot:{
width:8,
height:8,
backgroundColor:"#00b894",
borderRadius:4,
marginRight:10
},

inactiveDot:{
width:8,
height:8,
backgroundColor:"#999",
borderRadius:4,
marginRight:10
},

progressText:{
fontSize:13
},

inactiveText:{
fontSize:13,
color:"#999"
},

cancelButton:{
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
borderWidth:2,
borderColor:"#ddd",
height:55,
borderRadius:12
},

cancelText:{
marginLeft:6,
fontWeight:"500"
},

note:{
textAlign:"center",
fontSize:11,
color:"#999",
marginTop:10
}

});