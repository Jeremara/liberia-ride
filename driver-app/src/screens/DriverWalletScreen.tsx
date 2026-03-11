import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    TextInput
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
    ArrowLeft,
    Wallet,
    ArrowUpFromLine,
    ArrowDownToLine,
    CreditCard,
    Smartphone
} from "lucide-react-native";

export default function DriverWalletScreen() {

    const navigation = useNavigation<any>();

    const [amount, setAmount] = useState("");

    const transactions = [
        { id: 1, type: "Trip Earnings", amount: 680, date: "Mar 2, 2026" },
        { id: 2, type: "Trip Earnings", amount: 1020, date: "Mar 2, 2026" },
        { id: 3, type: "Withdrawal", amount: -15000, date: "Mar 1, 2026" },
        { id: 4, type: "Bonus", amount: 500, date: "Mar 1, 2026" },
        { id: 5, type: "Trip Earnings", amount: 850, date: "Mar 1, 2026" },
        { id: 6, type: "Trip Earnings", amount: 920, date: "Feb 28, 2026" },
    ];

    return (

        <SafeAreaView style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.iconBtn}
                    onPress={() => navigation.navigate("DriverDashboard")}
                >
                    <ArrowLeft color="#fff" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Driver Wallet
                </Text>

                <TouchableOpacity
                    style={styles.iconBtn}
                    onPress={() => navigation.navigate("DriverEarnings")}
                >
                    <ArrowUpFromLine color="#fff" />
                </TouchableOpacity>

            </View>

            <ScrollView style={styles.content}>

                {/* BALANCE */}

                <View style={styles.balanceCard}>

                    <View style={styles.walletIcon}>
                        <Wallet color="#fff" size={32} />
                    </View>

                    <Text style={styles.balanceLabel}>
                        Available Balance
                    </Text>

                    <Text style={styles.balanceValue}>
                        L$ 24,350
                    </Text>

                    <Text style={styles.balanceUsd}>
                        ≈ $128.15 USD
                    </Text>

                </View>

                {/* QUICK ACTIONS */}

                <View style={styles.actionsRow}>

                    <TouchableOpacity style={styles.actionCard}>

                        <ArrowUpFromLine color="#00b894" />

                        <Text style={styles.actionText}>
                            Withdraw
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionCard}>

                        <ArrowDownToLine color="#0984e3" />

                        <Text style={styles.actionText}>
                            History
                        </Text>

                    </TouchableOpacity>

                </View>

                {/* WITHDRAWAL METHODS */}

                <Text style={styles.sectionTitle}>
                    Withdrawal Methods
                </Text>

                <View style={styles.methodCard}>

                    <View style={styles.methodRow}>

                        <View style={styles.methodIconOrange}>
                            <Smartphone color="#fff" />
                        </View>

                        <View>
                            <Text style={styles.methodName}>
                                Orange Money
                            </Text>
                            <Text style={styles.methodSub}>
                                **** 4532
                            </Text>
                        </View>

                    </View>

                    <Text style={styles.primaryBadge}>
                        Primary
                    </Text>

                </View>

                <View style={styles.methodCard}>

                    <View style={styles.methodRow}>

                        <View style={styles.methodIconYellow}>
                            <Smartphone color="#fff" />
                        </View>

                        <View>
                            <Text style={styles.methodName}>
                                MTN Mobile Money
                            </Text>
                            <Text style={styles.methodSub}>
                                **** 7821
                            </Text>
                        </View>

                    </View>

                </View>

                <View style={styles.methodCard}>

                    <View style={styles.methodRow}>

                        <View style={styles.methodIconBank}>
                            <CreditCard color="#fff" />
                        </View>

                        <View>
                            <Text style={styles.methodName}>
                                Bank Account
                            </Text>
                            <Text style={styles.methodSub}>
                                Ecobank **** 3456
                            </Text>
                        </View>

                    </View>

                </View>

                {/* WITHDRAW */}

                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        Quick Withdrawal
                    </Text>

                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        placeholder="Enter amount"
                        placeholderTextColor="#777"
                        style={styles.input}
                    />

                    <View style={styles.quickButtons}>

                        <QuickBtn label="L$ 5,000" />
                        <QuickBtn label="L$ 10,000" />
                        <QuickBtn label="All" />

                    </View>

                    <TouchableOpacity style={styles.withdrawBtn}>

                        <Text style={styles.withdrawText}>
                            Withdraw Now
                        </Text>

                    </TouchableOpacity>

                </View>

                {/* TRANSACTIONS */}

                <Text style={styles.sectionTitle}>
                    Recent Transactions
                </Text>

                {transactions.map((t) => {

                    const positive = t.amount > 0;

                    return (

                        <View key={t.id} style={styles.transaction}>

                            <View style={styles.txLeft}>

                                <View style={[
                                    styles.txIcon,
                                    positive ? styles.txGreen : styles.txGray
                                ]}>

                                    {positive
                                        ? <ArrowDownToLine color="#00b894" />
                                        : <ArrowUpFromLine color="#fff" />
                                    }

                                </View>

                                <View>

                                    <Text style={styles.txType}>
                                        {t.type}
                                    </Text>

                                    <Text style={styles.txDate}>
                                        {t.date}
                                    </Text>

                                </View>

                            </View>

                            <Text style={[
                                styles.txAmount,
                                positive && { color: "#00b894" }
                            ]}>

                                {positive ? "+" : ""}
                                L$ {Math.abs(t.amount)}

                            </Text>

                        </View>

                    );

                })}

            </ScrollView>

        </SafeAreaView>

    );

}

/* QUICK BUTTON */

function QuickBtn({ label }: any) {

    return (

        <TouchableOpacity style={styles.quickBtn}>

            <Text style={styles.quickText}>
                {label}
            </Text>

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        top: 35,
        marginBottom: 35
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#00b894"
    },

    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },

    iconBtn: {
        padding: 8
    },

    content: {
        padding: 20
    },

    balanceCard: {
        backgroundColor: "#00b894",
        padding: 25,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 20
    },

    walletIcon: {
        marginBottom: 10
    },

    balanceLabel: {
        color: "#fff",
        opacity: 0.8
    },

    balanceValue: {
        fontSize: 36,
        fontWeight: "700",
        color: "#fff"
    },

    balanceUsd: {
        color: "#fff",
        opacity: 0.7
    },

    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    actionCard: {
        flex: 1,
        backgroundColor: "#2d3436",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: 5
    },

    actionText: {
        color: "#fff",
        marginTop: 8
    },

    sectionTitle: {
        color: "#fff",
        fontWeight: "600",
        marginBottom: 10
    },

    methodCard: {
        backgroundColor: "#2d3436",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },

    methodRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    methodName: {
        color: "#fff",
        fontWeight: "600"
    },

    methodSub: {
        color: "#777"
    },

    primaryBadge: {
        color: "#00b894"
    },

    methodIconOrange: {
        backgroundColor: "#ff6b00",
        padding: 10,
        borderRadius: 8,
        marginRight: 10
    },

    methodIconYellow: {
        backgroundColor: "#ffcc00",
        padding: 10,
        borderRadius: 8,
        marginRight: 10
    },

    methodIconBank: {
        backgroundColor: "#3b82f6",
        padding: 10,
        borderRadius: 8,
        marginRight: 10
    },

    card: {
        backgroundColor: "#2d3436",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },

    input: {
        backgroundColor: "#1a1a1a",
        borderRadius: 8,
        padding: 12,
        color: "#fff",
        marginBottom: 10
    },

    quickButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },

    quickBtn: {
        backgroundColor: "#1a1a1a",
        padding: 10,
        borderRadius: 8
    },

    quickText: {
        color: "#fff"
    },

    withdrawBtn: {
        backgroundColor: "#00b894",
        padding: 14,
        borderRadius: 10,
        alignItems: "center"
    },

    withdrawText: {
        color: "#fff",
        fontWeight: "600"
    },

    transaction: {
        backgroundColor: "#2d3436",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25
    },

    txLeft: {
        flexDirection: "row",
        alignItems: "center"
    },

    txIcon: {
        padding: 10,
        borderRadius: 20,
        marginRight: 10
    },

    txGreen: {
        backgroundColor: "rgba(0,184,148,0.2)"
    },

    txGray: {
        backgroundColor: "#444"
    },

    txType: {
        color: "#fff",
        fontWeight: "600"
    },

    txDate: {
        color: "#777"
    },

    txAmount: {
        color: "#fff",
        fontWeight: "600"
    }

});