import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
SafeAreaView,
ScrollView
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
ArrowLeft,
CreditCard,
Wallet,
Banknote,
Check,
Plus
} from "lucide-react-native";

const paymentMethods = [
{
id:"mobile-money",
name:"Mobile Money",
description:"Orange Money, MTN, Lonestar",
icon:Wallet,
color:"#ff9500",
isDefault:true
},
{
id:"cash",
name:"Cash",
description:"Pay your driver in cash",
icon:Banknote,
color:"#00b894",
isDefault:false
},
{
id:"card",
name:"Credit/Debit Card",
description:"Visa, Mastercard",
icon:CreditCard,
color:"#0984e3",
isDefault:false
}
];

export default function PaymentMethods(){

const navigation = useNavigation<any>();
const [selectedMethod,setSelectedMethod] = useState("mobile-money");

return(

<SafeAreaView style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity onPress={()=>navigation.goBack()}>
<ArrowLeft color="#000"/>
</TouchableOpacity>

<Text style={styles.headerTitle}>
Payment Methods
</Text>

</View>

<ScrollView style={styles.content}>

<Text style={styles.title}>
Select Payment Method
</Text>

<Text style={styles.subtitle}>
Choose how you'd like to pay for your rides
</Text>

{/* METHODS */}

{paymentMethods.map((method)=>{

const Icon = method.icon;
const selected = selectedMethod === method.id;

return(

<TouchableOpacity
key={method.id}
style={[
styles.methodCard,
selected && styles.selectedCard
]}
onPress={()=>setSelectedMethod(method.id)}
>

<View style={styles.methodRow}>

<View
style={[
styles.iconCircle,
{backgroundColor:method.color+"20"}
]}
>

<Icon color={method.color} size={26}/>

</View>

<View style={{flex:1}}>

<View style={styles.methodTitleRow}>

<Text style={styles.methodTitle}>
{method.name}
</Text>

{method.isDefault && (

<Text style={styles.defaultBadge}>
Default
</Text>

)}

</View>

<Text style={styles.methodDesc}>
{method.description}
</Text>

</View>

{selected && (

<View style={styles.checkCircle}>

<Check color="#fff" size={16}/>

</View>

)}

</View>

</TouchableOpacity>

);

})}

{/* ADD METHOD */}

<TouchableOpacity style={styles.addBtn}>

<Plus color="#00b894"/>

<Text style={styles.addText}>
Add New Payment Method
</Text>

</TouchableOpacity>

{/* MOBILE MONEY DETAILS */}

{selectedMethod === "mobile-money" && (

<View style={styles.detailsCard}>

<Text style={styles.detailsTitle}>
Linked Mobile Money Accounts
</Text>

<View style={styles.accountRow}>

<View style={styles.orangeIcon}>
<Wallet color="#fff"/>
</View>

<View>

<Text style={styles.accountName}>
Orange Money
</Text>

<Text style={styles.accountNumber}>
+231 770 123 456
</Text>

</View>

<Text style={styles.primary}>
Primary
</Text>

</View>

<TouchableOpacity style={styles.addAccount}>

<Text style={styles.addAccountText}>
+ Add Another Account
</Text>

</TouchableOpacity>

</View>

)}

</ScrollView>

{/* SAVE BUTTON */}

<TouchableOpacity style={styles.saveBtn}>

<Text style={styles.saveText}>
Save Payment Method
</Text>

</TouchableOpacity>

</SafeAreaView>

);

}

const styles = StyleSheet.create({

container:{flex:1,backgroundColor:"#fff",top:35},

header:{
flexDirection:"row",
alignItems:"center",
padding:20
},

headerTitle:{
fontSize:18,
fontWeight:"600",
marginLeft:15
},

content:{
padding:20
},

title:{
fontSize:18,
fontWeight:"600"
},

subtitle:{
color:"#777",
marginBottom:20
},

methodCard:{
borderWidth:1,
borderColor:"#eee",
padding:15,
borderRadius:12,
marginBottom:10
},

selectedCard:{
borderColor:"#00b894",
backgroundColor:"#eafaf5"
},

methodRow:{
flexDirection:"row",
alignItems:"center"
},

iconCircle:{
width:50,
height:50,
borderRadius:25,
justifyContent:"center",
alignItems:"center",
marginRight:10
},

methodTitleRow:{
flexDirection:"row",
alignItems:"center"
},

methodTitle:{
fontWeight:"600"
},

methodDesc:{
color:"#777"
},

defaultBadge:{
backgroundColor:"#00b894",
color:"#fff",
fontSize:10,
paddingHorizontal:6,
paddingVertical:2,
borderRadius:10,
marginLeft:8
},

checkCircle:{
backgroundColor:"#00b894",
padding:6,
borderRadius:20
},

addBtn:{
borderWidth:2,
borderStyle:"dashed",
borderColor:"#ddd",
padding:15,
borderRadius:12,
alignItems:"center",
flexDirection:"row",
justifyContent:"center",
marginVertical:20
},

addText:{
color:"#00b894",
fontWeight:"600",
marginLeft:8
},

detailsCard:{
borderWidth:1,
borderColor:"#eee",
padding:15,
borderRadius:12
},

detailsTitle:{
fontWeight:"600",
marginBottom:10
},

accountRow:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between"
},

orangeIcon:{
backgroundColor:"#ff9500",
padding:10,
borderRadius:20
},

accountName:{
fontWeight:"600"
},

accountNumber:{
color:"#777"
},

primary:{
backgroundColor:"#00b894",
color:"#fff",
fontSize:10,
paddingHorizontal:6,
paddingVertical:2,
borderRadius:10
},

addAccount:{
marginTop:10
},

addAccountText:{
color:"#00b894",
fontWeight:"600"
},

saveBtn:{
backgroundColor:"#00b894",
padding:16,
alignItems:"center"
},

saveText:{
color:"#fff",
fontWeight:"600"
}

});