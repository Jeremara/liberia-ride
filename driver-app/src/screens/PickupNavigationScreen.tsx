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
    MapPin,
    Navigation,
    Phone,
    MessageCircle,
    User
} from "lucide-react-native";

export default function PickupNavigationScreen() {

    const navigation = useNavigation<any>();

    const handleArrived = () => {
        navigation.navigate("DriverRideInProgress");
    };

    return (

        <SafeAreaView style={styles.container}>

            {/* MAP AREA */}

            <View style={styles.mapArea}>

                <View style={styles.mapCenter}>

                    <Navigation size={60} color="#00b894" />

                    <Text style={styles.navText}>
                        Navigating to pickup
                    </Text>

                    <Text style={styles.distanceText}>
                        2.3 km away
                    </Text>

                </View>

                {/* ETA BADGE */}

                <View style={styles.etaBadge}>
                    <Text style={styles.etaText}>
                        ETA: 8 min
                    </Text>
                </View>

            </View>

            {/* BOTTOM CARD */}

            <View style={styles.bottomCard}>

                {/* PASSENGER INFO */}

                <View style={styles.passengerRow}>

                    <View style={styles.passengerLeft}>

                        <View style={styles.avatar}>
                            <User color="#00b894" />
                        </View>

                        <View>

                            <Text style={styles.passengerName}>
                                Sarah Johnson
                            </Text>

                            <Text style={styles.rating}>
                                ★ 4.9 (142 trips)
                            </Text>

                        </View>

                    </View>

                    <View style={styles.contactButtons}>

                        <TouchableOpacity style={styles.phoneBtn}>
                            <Phone color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.msgBtn}>
                            <MessageCircle color="#fff" />
                        </TouchableOpacity>

                    </View>

                </View>

                {/* PICKUP LOCATION */}

                <View style={styles.locationCard}>

                    <View style={styles.locationRow}>

                        <View style={styles.pin}>
                            <MapPin color="#00b894" />
                        </View>

                        <View style={{ flex: 1 }}>

                            <Text style={styles.label}>
                                Pickup Location
                            </Text>

                            <Text style={styles.location}>
                                Congo Town, Monrovia
                            </Text>

                            <Text style={styles.locationSub}>
                                Near City Hall Market
                            </Text>

                        </View>

                    </View>

                </View>

                {/* DISTANCE + TIME */}

                <View style={styles.statsRow}>

                    <View style={styles.statBox}>

                        <Text style={styles.statLabel}>
                            Distance to Pickup
                        </Text>

                        <Text style={styles.statValue}>
                            2.3 km
                        </Text>

                    </View>

                    <View style={styles.statBox}>

                        <Text style={styles.statLabel}>
                            Estimated Time
                        </Text>

                        <Text style={styles.timeValue}>
                            8 min
                        </Text>

                    </View>

                </View>

                {/* NAVIGATION INSTRUCTION */}

                <View style={styles.instructionBox}>

                    <Navigation color="#0984e3" />

                    <View style={{ marginLeft: 10 }}>

                        <Text style={styles.instructionTitle}>
                            Head north on Broad Street
                        </Text>

                        <Text style={styles.instructionSub}>
                            Turn right in 200m
                        </Text>

                    </View>

                </View>

                {/* ARRIVED BUTTON */}

                <TouchableOpacity
                    style={styles.arrivedBtn}
                    onPress={handleArrived}
                >

                    <Text style={styles.arrivedText}>
                        I've Arrived at Pickup
                    </Text>

                </TouchableOpacity>

            </View>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1a1a1a"
    },

    mapArea: {
        flex: 1,
        backgroundColor: "#2d3436",
        justifyContent: "center",
        alignItems: "center"
    },

    mapCenter: {
        alignItems: "center"
    },

    navText: {
        color: "#fff",
        fontWeight: "600",
        marginTop: 10
    },

    distanceText: {
        color: "rgba(255,255,255,0.6)"
    },

    etaBadge: {
        position: "absolute",
        top: 40,
        backgroundColor: "#00b894",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },

    etaText: {
        color: "#fff",
        fontWeight: "700"
    },

    bottomCard: {
        backgroundColor: "#2d3436",
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    passengerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },

    passengerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "rgba(0,184,148,0.2)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },

    passengerName: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },

    rating: {
        color: "rgba(255,255,255,0.7)"
    },

    contactButtons: {
        flexDirection: "row"
    },

    phoneBtn: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#0984e3",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8
    },

    msgBtn: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#00b894",
        justifyContent: "center",
        alignItems: "center"
    },

    locationCard: {
        backgroundColor: "#1a1a1a",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15
    },

    locationRow: {
        flexDirection: "row"
    },

    pin: {
        marginRight: 10
    },

    label: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
    },

    location: {
        color: "#fff",
        fontWeight: "600"
    },

    locationSub: {
        color: "rgba(255,255,255,0.6)"
    },

    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },

    statBox: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 5
    },

    statLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
    },

    statValue: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700"
    },

    timeValue: {
        color: "#00b894",
        fontSize: 20,
        fontWeight: "700"
    },

    instructionBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(9,132,227,0.1)",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15
    },

    instructionTitle: {
        color: "#fff",
        fontWeight: "600"
    },

    instructionSub: {
        color: "rgba(255,255,255,0.6)"
    },

    arrivedBtn: {
        backgroundColor: "#00b894",
        height: 55,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    arrivedText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16
    }

});