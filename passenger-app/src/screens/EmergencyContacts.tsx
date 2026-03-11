import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function EmergencyContacts() {

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Emergency Contacts
            </Text>

            <Text style={styles.contact}>
                <Ionicons name="call" size={20} color="black" />
                Police: 911
            </Text>

            <Text style={styles.contact}>
                <Ionicons name="call" size={20} color="black" />
                Medical: 112
            </Text>

            <Text style={styles.contact}>
                <Ionicons name="call" size={20} color="black" />
                Support: +231 770 000 000
            </Text>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: { flex: 1, padding: 20, top: 35, backgroundColor: "#f5f5f5" },

    title: { fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 20, color: "#333", borderBlockColor: "#00b894", borderBottomWidth: 2, paddingBottom: 10 },

    contact: { marginTop: 10, marginVertical: 10,
    flexDirection: 'row', alignItems: 'center', fontSize: 16, color: "#555" }

});