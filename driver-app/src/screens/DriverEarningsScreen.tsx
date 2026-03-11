import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    SafeAreaView
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
    ArrowLeft,
    DollarSign,
    TrendingUp,
    Download,
    Wallet
} from "lucide-react-native";

import {
    BarChart,
    LineChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function DriverEarningsScreen() {

    const navigation = useNavigation<any>();

    const [selectedPeriod, setSelectedPeriod] =
        useState<"daily" | "weekly" | "monthly">("weekly");

    const dailyData = [2100, 2850, 1950, 3200, 3800, 4200, 3100];
    const weeklyData = [18500, 21200, 19800, 22500];
    const monthlyData = [75000, 82000, 88000];

    const stats = {
        today: { earnings: 2850, trips: 12, hours: 8 },
        week: { earnings: 21050, trips: 90, hours: 52 },
        month: { earnings: 82000, trips: 325, hours: 220 },
        total: { earnings: 245000, trips: 920, hours: 600 }
    };

    const getChartData = () => {
        switch (selectedPeriod) {
            case "daily": return dailyData;
            case "weekly": return weeklyData;
            case "monthly": return monthlyData;
            default: return weeklyData;
        }
    };

    const currentStats =
        selectedPeriod === "daily"
            ? stats.week
            : selectedPeriod === "weekly"
                ? stats.month
                : stats.total;

    return (

        <SafeAreaView style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <View style={styles.headerLeft}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("DriverDashboard")}
                    >

                        <ArrowLeft color="#fff" />

                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>
                        Earnings
                    </Text>

                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("DriverWallet")}
                >

                    <Wallet color="#fff" />

                </TouchableOpacity>

            </View>

            <ScrollView style={styles.content}>

                {/* SUMMARY */}

                <View style={styles.summaryRow}>

                    <View style={styles.earnCard}>

                        <DollarSign color="#fff" />

                        <Text style={styles.earnValue}>
                            L$ {currentStats.earnings}
                        </Text>

                        <Text style={styles.earnLabel}>
                            Total Earned
                        </Text>

                    </View>

                    <View style={styles.statCard}>

                        <TrendingUp color="#0984e3" />

                        <Text style={styles.statValue}>
                            {currentStats.trips}
                        </Text>

                        <Text style={styles.statLabel}>
                            Trips
                        </Text>

                    </View>

                    <View style={styles.statCard}>

                        <TrendingUp color="#f1c40f" />

                        <Text style={styles.statValue}>
                            {currentStats.hours}h
                        </Text>

                        <Text style={styles.statLabel}>
                            Online
                        </Text>

                    </View>

                </View>

                {/* PERIOD SELECTOR */}

                <View style={styles.tabs}>

                    <TabButton
                        label="Daily"
                        active={selectedPeriod === "daily"}
                        onPress={() => setSelectedPeriod("daily")}
                    />

                    <TabButton
                        label="Weekly"
                        active={selectedPeriod === "weekly"}
                        onPress={() => setSelectedPeriod("weekly")}
                    />

                    <TabButton
                        label="Monthly"
                        active={selectedPeriod === "monthly"}
                        onPress={() => setSelectedPeriod("monthly")}
                    />

                </View>

                {/* BAR CHART */}

                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        Earnings Overview
                    </Text>

                    <BarChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7"],
                            datasets: [{ data: getChartData() }]
                        }}
                        width={screenWidth - 60}
                        height={200}
                        chartConfig={chartConfig}
                        verticalLabelRotation={0}
                        yAxisLabel=""
                        yAxisSuffix=""
                    />

                </View>

                {/* LINE CHART */}

                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        Trips Overview
                    </Text>

                    <LineChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7"],
                            datasets: [{ data: getChartData() }]
                        }}
                        width={screenWidth - 60}
                        height={200}
                        chartConfig={chartConfig}
                    />

                </View>

                {/* BREAKDOWN */}

                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        Today's Breakdown
                    </Text>

                    <Row label="Gross Earnings" value="L$ 3,200" />

                    <Row label="Platform Commission (20%)" value="- L$ 640" red />

                    <Row label="Bonus & Incentives" value="+ L$ 290" green />

                    <View style={styles.divider} />

                    <Row label="Net Earnings" value="L$ 2,850" big green />

                </View>

                {/* ACTIONS */}

                <View style={styles.actions}>

                    <TouchableOpacity style={styles.outlineBtn}>

                        <Download color="#fff" />

                        <Text style={styles.btnText}>
                            Download Report
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.mainBtn}
                        onPress={() => navigation.navigate("DriverWallet")}
                    >

                        <Text style={styles.mainBtnText}>
                            Withdraw Funds
                        </Text>

                    </TouchableOpacity>

                </View>

            </ScrollView>

        </SafeAreaView>

    );

}

/* COMPONENTS */

function TabButton({ label, active, onPress }: any) {

    return (

        <TouchableOpacity
            style={[
                styles.tab,
                active && { backgroundColor: "#00b894" }
            ]}
            onPress={onPress}
        >

            <Text style={{ color: "#fff" }}>
                {label}
            </Text>

        </TouchableOpacity>

    );

}

function Row({ label, value, red, green, big }: any) {

    return (

        <View style={styles.row}>

            <Text style={styles.rowLabel}>
                {label}
            </Text>

            <Text style={[
                styles.rowValue,
                red && { color: "#ff4d4d" },
                green && { color: "#00b894" },
                big && { fontSize: 18, fontWeight: "700" }
            ]}>
                {value}
            </Text>

        </View>

    );

}

const chartConfig = {

    backgroundGradientFrom: "#2d3436",
    backgroundGradientTo: "#2d3436",
    color: () => "#00b894",
    labelColor: () => "#aaa",
    barPercentage: 0.6

};

const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: "#1a1a1a", top: 35, marginBottom: 35 },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#2d3436"
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },

    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 10
    },

    content: { padding: 20 },

    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },

    earnCard: {
        flex: 1,
        backgroundColor: "#00b894",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginRight: 6
    },

    earnValue: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700"
    },

    earnLabel: {
        color: "#fff",
        fontSize: 12
    },

    statCard: {
        flex: 1,
        backgroundColor: "#2d3436",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 6
    },

    statValue: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700"
    },

    statLabel: {
        color: "#777",
        fontSize: 12
    },

    tabs: {
        flexDirection: "row",
        marginBottom: 20
    },

    tab: {
        flex: 1,
        padding: 10,
        backgroundColor: "#2d3436",
        alignItems: "center",
        borderRadius: 8,
        marginHorizontal: 2
    },

    card: {
        backgroundColor: "#2d3436",
        padding: 15,
        borderRadius: 12,
        marginBottom: 20
    },

    sectionTitle: {
        color: "#fff",
        fontWeight: "700",
        marginBottom: 10
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    },

    rowLabel: {
        color: "#aaa"
    },

    rowValue: {
        color: "#fff"
    },

    divider: {
        height: 1,
        backgroundColor: "#444",
        marginVertical: 10
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },

    outlineBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#555",
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 6
    },

    btnText: {
        color: "#fff",
        marginLeft: 6,
    },

    mainBtn: {
        flex: 1,
        backgroundColor: "#00b894",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 6,
    },

    mainBtnText: {
        color: "#fff",
        fontWeight: "600"
    }

});