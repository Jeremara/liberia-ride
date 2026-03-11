import React from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView,
SafeAreaView
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
ArrowLeft,
Plus,
ArrowDownToLine,
ArrowUpFromLine,
Wallet as WalletIcon,
CreditCard,
Smartphone
} from "lucide-react-native";

export default function Wallet(){

const navigation = useNavigation<any>();

const transactions = [
{ id:1,type:"Ride",amount:-850,date:"Feb 27, 2026"},
{ id:2,type:"Top-up",amount:5000,date:"Feb 26, 2026"},
{ id:3,type:"Ride",amount:-1200,date:"Feb 26, 2026"},
{ id:4,type:"Ride",amount:-650,date:"Feb 25, 2026"},
{ id:5,type:"Top-up",amount:3000,date:"Feb 24, 2026"},
{ id:6,type:"Ride",amount:-900,date:"Feb 24, 2026"},
];

return(

<SafeAreaView style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity
onPress={()=>navigation.navigate("Home")}
>

<ArrowLeft color="white"/>

</TouchableOpacity>

<Text style={styles.headerTitle}>
My Wallet
</Text>

<TouchableOpacity
onPress={()=>navigation.navigate("PaymentMethods")}
>

<CreditCard color="white"/>

</TouchableOpacity>

</View>

<ScrollView>

{/* BALANCE CARD */}

<View style={styles.balanceCard}>

<View style={styles.walletIcon}>

<WalletIcon color="white" size={32}/>

</View>

<Text style={styles.balanceLabel}>
Available Balance
</Text>

<Text style={styles.balanceAmount}>
L$ 8,400
</Text>

<Text style={styles.balanceUSD}>
≈ $44.20 USD
</Text>

</View>

{/* QUICK ACTIONS */}

<View style={styles.actions}>

<TouchableOpacity style={styles.actionCard}>

<Plus size={26} color="#00b894"/>

<Text>Add Money</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.actionCard}>

<ArrowUpFromLine size={26} color="#0984e3"/>

<Text>Withdraw</Text>

</TouchableOpacity>

</View>

{/* PAYMENT METHODS */}

<Text style={styles.sectionTitle}>
Payment Methods
</Text>

<View style={styles.card}>

<View style={styles.row}>

<View style={styles.paymentIconOrange}>

<Smartphone color="white"/>

</View>

<View>

<Text>Orange Money</Text>
<Text style={styles.small}>
**** 4532
</Text>

</View>

</View>

<Text style={styles.default}>
Default
</Text>

</View>

<View style={styles.card}>

<View style={styles.row}>

<View style={styles.paymentIconYellow}>

<Smartphone color="white"/>

</View>

<View>

<Text>MTN Mobile Money</Text>
<Text style={styles.small}>
**** 7821
</Text>

</View>

</View>

</View>

{/* TRANSACTIONS */}

<View style={styles.transactionsHeader}>

<Text style={styles.sectionTitle}>
Recent Transactions
</Text>

<TouchableOpacity
onPress={()=>navigation.navigate("RideHistory")}
>

<Text style={styles.viewAll}>
View All
</Text>

</TouchableOpacity>

</View>

{transactions.map((tx)=>(

<View key={tx.id} style={styles.transactionCard}>

<View style={styles.row}>

<View style={styles.transactionIcon}>

{tx.amount>0
? <ArrowDownToLine color="#00b894"/>
: <ArrowUpFromLine color="#999"/>
}

</View>

<View>

<Text>{tx.type}</Text>

<Text style={styles.small}>
{tx.date}
</Text>

</View>

</View>

<Text style={[
styles.amount,
tx.amount>0
? {color:"#00b894"}
: {color:"#000"}
]}>

{tx.amount>0?"+":""}
L$ {Math.abs(tx.amount)}

</Text>

</View>

))}

</ScrollView>

</SafeAreaView>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5",
top:35
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:20,
backgroundColor:"#00b894"
},

headerTitle:{
color:"white",
fontSize:18,
fontWeight:"600"
},

balanceCard:{
backgroundColor:"#00b894",
padding:30,
alignItems:"center"
},

walletIcon:{
backgroundColor:"rgba(255,255,255,0.2)",
padding:15,
borderRadius:40,
marginBottom:10
},

balanceLabel:{
color:"white",
opacity:0.8
},

balanceAmount:{
fontSize:42,
fontWeight:"bold",
color:"white"
},

balanceUSD:{
color:"white",
opacity:0.7
},

actions:{
flexDirection:"row",
justifyContent:"space-around",
marginTop:20
},

actionCard:{
backgroundColor:"white",
padding:20,
borderRadius:12,
alignItems:"center",
width:140
},

sectionTitle:{
fontSize:16,
fontWeight:"600",
margin:20
},

card:{
backgroundColor:"white",
padding:15,
marginHorizontal:20,
marginBottom:10,
borderRadius:10,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

row:{
flexDirection:"row",
alignItems:"center",
gap:10
},

small:{
color:"#777",
fontSize:12
},

default:{
color:"#00b894",
fontSize:12
},

paymentIconOrange:{
backgroundColor:"#ff6b00",
padding:10,
borderRadius:10
},

paymentIconYellow:{
backgroundColor:"#ffcc00",
padding:10,
borderRadius:10
},

transactionsHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:20
},

viewAll:{
color:"#00b894"
},

transactionCard:{
backgroundColor:"white",
padding:15,
marginHorizontal:20,
marginBottom:10,
borderRadius:10,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

transactionIcon:{
backgroundColor:"#eee",
padding:10,
borderRadius:20
},

amount:{
fontWeight:"600"
}

});