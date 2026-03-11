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
import { ArrowLeft, Upload, Check, AlertCircle, FileText } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";

const documents = [
  {
    id: "license",
    name: "Driver's License",
    description: "Valid driver's license (front and back)",
    required: true,
  },
  {
    id: "vehicle-registration",
    name: "Vehicle Registration",
    description: "Current vehicle registration certificate",
    required: true,
  },
  {
    id: "insurance",
    name: "Insurance Certificate",
    description: "Valid vehicle insurance document",
    required: true,
  },
  {
    id: "id-card",
    name: "National ID Card",
    description: "Government-issued identification",
    required: true,
  },
];

export default function DocumentUploadScreen() {

  const navigation = useNavigation<any>();

  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);

  const pickImage = async (docId: string) => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7
    });

    if (!result.canceled) {
      setUploadedDocs(prev => [...prev, docId]);
    }

  };

  const removeDoc = (docId: string) => {
    setUploadedDocs(prev => prev.filter(id => id !== docId));
  };

  const handleSubmit = () => {

    const allRequired = documents
      .filter(doc => doc.required)
      .every(doc => uploadedDocs.includes(doc.id));

    if (allRequired) {
      navigation.navigate("VerificationPending");
    }

  };

  const allDocsUploaded = documents
    .filter(doc => doc.required)
    .every(doc => uploadedDocs.includes(doc.id));

  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.navigate("DriverRegistration")}
        >
          <ArrowLeft size={26} color="#fff"/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Document Upload
        </Text>

        <Text style={styles.counter}>
          {uploadedDocs.length}/{documents.length}
        </Text>

      </View>

      <ScrollView style={styles.content}>

        {/* Info Banner */}

        <View style={styles.infoCard}>

          <AlertCircle size={20} color="#0984e3"/>

          <View style={{flex:1, marginLeft:10}}>

            <Text style={styles.infoTitle}>
              Document Verification
            </Text>

            <Text style={styles.infoText}>
              Upload clear photos of your documents. Verification usually takes 24-48 hours.
            </Text>

          </View>

        </View>

        {/* Documents */}

        {documents.map((doc) => {

          const isUploaded = uploadedDocs.includes(doc.id);

          return (

            <View key={doc.id} style={styles.card}>

              <View style={styles.cardHeader}>

                <View style={{flex:1}}>

                  <Text style={styles.docTitle}>
                    {doc.name}
                  </Text>

                  <Text style={styles.docDesc}>
                    {doc.description}
                  </Text>

                </View>

                {isUploaded && (
                  <View style={styles.checkCircle}>
                    <Check size={16} color="#00b894"/>
                  </View>
                )}

              </View>

              {isUploaded ? (

                <View style={styles.uploadedBox}>

                  <FileText size={18} color="#00b894"/>

                  <Text style={styles.uploadedText}>
                    Document uploaded
                  </Text>

                  <TouchableOpacity
                    onPress={() => removeDoc(doc.id)}
                  >
                    <Text style={styles.change}>
                      Change
                    </Text>
                  </TouchableOpacity>

                </View>

              ) : (

                <TouchableOpacity
                  style={styles.uploadBox}
                  onPress={() => pickImage(doc.id)}
                >

                  <Upload size={28} color="#00b894"/>

                  <Text style={styles.uploadText}>
                    Tap to upload
                  </Text>

                </TouchableOpacity>

              )}

            </View>

          );

        })}

        {/* Submit */}

        <TouchableOpacity
          style={[
            styles.submitButton,
            !allDocsUploaded && {opacity:0.4}
          ]}
          disabled={!allDocsUploaded}
          onPress={handleSubmit}
        >

          <Text style={styles.submitText}>
            Submit for Verification
          </Text>

        </TouchableOpacity>

        <Text style={styles.footerText}>
          By submitting you agree to our terms and conditions
        </Text>

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
justifyContent:"space-between",
padding:20
},

headerTitle:{
color:"#fff",
fontSize:20,
fontWeight:"600"
},

counter:{
color:"rgba(255,255,255,0.6)"
},

content:{
padding:20
},

infoCard:{
flexDirection:"row",
backgroundColor:"rgba(9,132,227,0.1)",
padding:15,
borderRadius:12,
marginBottom:20
},

infoTitle:{
color:"#fff",
fontWeight:"600"
},

infoText:{
color:"rgba(255,255,255,0.6)",
fontSize:12,
marginTop:4
},

card:{
backgroundColor:"#2d3436",
borderRadius:14,
padding:16,
marginBottom:15
},

cardHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

docTitle:{
color:"#fff",
fontWeight:"600"
},

docDesc:{
color:"rgba(255,255,255,0.6)",
fontSize:12,
marginTop:4
},

checkCircle:{
width:26,
height:26,
borderRadius:13,
backgroundColor:"rgba(0,184,148,0.2)",
alignItems:"center",
justifyContent:"center"
},

uploadBox:{
borderWidth:2,
borderStyle:"dashed",
borderColor:"rgba(255,255,255,0.1)",
borderRadius:12,
padding:20,
alignItems:"center",
marginTop:12
},

uploadText:{
color:"rgba(255,255,255,0.6)",
marginTop:6
},

uploadedBox:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
backgroundColor:"rgba(0,184,148,0.1)",
padding:12,
borderRadius:10,
marginTop:12
},

uploadedText:{
color:"#fff"
},

change:{
color:"rgba(255,255,255,0.7)"
},

submitButton:{
height:55,
backgroundColor:"#00b894",
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginTop:20
},

submitText:{
color:"#fff",
fontWeight:"600",
fontSize:16
},

footerText:{
color:"rgba(255,255,255,0.6)",
fontSize:12,
textAlign:"center",
marginTop:10
}

});