import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

export default function SupportChat(){

const [messages,setMessages]=useState([
{id:"1",text:"Hello, how can we help you?",sender:"support"}
]);

const [input,setInput]=useState("");

function sendMessage(){

if(!input) return;

setMessages([
...messages,
{id:Date.now().toString(),text:input,sender:"user"}
]);

setInput("");

}

return(

<SafeAreaView style={styles.container}>

<FlatList
data={messages}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(

<View style={[
styles.message,
item.sender==="user"?styles.user:styles.support
]}>

<Text>{item.text}</Text>

</View>

)}
/>

<View style={styles.inputRow}>

<TextInput
style={styles.input}
placeholder="Type message..."
value={input}
onChangeText={setInput}
/>

<TouchableOpacity onPress={sendMessage} style={styles.send}>
<Text style={{color:"white"}}>Send</Text>
</TouchableOpacity>

</View>

</SafeAreaView>

);

}

const styles=StyleSheet.create({

container:{flex:1,backgroundColor:"#f5f5f5",top:35,marginBottom:35},
message:{padding:10,borderRadius:8,margin:10,maxWidth:"70%"},
user:{alignSelf:"flex-end",backgroundColor:"#00b894"},
support:{alignSelf:"flex-start",backgroundColor:"white"},
inputRow:{flexDirection:"row",padding:10,backgroundColor:"white"},
input:{flex:1,borderWidth:1,borderColor:"#ccc",borderRadius:8,padding:8},
send:{backgroundColor:"#00b894",padding:10,marginLeft:10,borderRadius:8}

});