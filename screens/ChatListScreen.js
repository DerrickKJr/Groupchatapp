import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, Modal, TouchableOpacity, FlatList, TextInput, Appearance, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

var DATA = [
  {
    chatTitle: "Title of Chat",
    time: "12:34",
    lastSentMsg: "Hello, welcome to our new...",
  }
];

export default function ChatListScreen({navigation}) {
  const [isChatListRender, setisChatListRender] = useState(false);
  const Item = ({item, myNavigation}) =>(
    <TouchableOpacity onPress={() =>  navigation.navigate("ChatRoom", {chatTitle: item.chatTitle, chatTime: item.time})} style={styles.itemView1}>
      <Text style={styles.headingFont}>{item.chatTitle}</Text>
      <Text style={styles.chatTimerFont}>{item.time}</Text>
      <Text style={styles.subHeadingFont}>{item.lastSentMsg}</Text>
      <View style={styles.chatActivity}></View>
    </TouchableOpacity>
  );
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {DATA.push({chatTitle: "CreatedTest", time: "00:00", lastSentMsg: "Blah Test"}); setisChatListRender(!isChatListRender);}}style={styles.createChatButton}>
          <Text style={{textAlign: "center", fontSize: "20px", color: "#fff"}}>Create Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.joinChatButton}>
          <Text style={{textAlign: "center", fontSize: "20px", color: "#fff"}}>Join Chat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chatListContainer}>
        <FlatList 
          data={DATA} 
          renderItem= {Item}
          extraData={isChatListRender}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#1b1c1e",
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    paddingBottom: "5px",
    padding: "50px",
    height: "11%",
    marginLeft: "-40px",
    marginRight: "-40px",
  },
  createChatButton:{
    backgroundColor: "#575757",
    margin: "auto",
    borderRadius: "15px",
    padding: "5px",
    width: "150px",
  },
  joinChatButton:{
    backgroundColor: "#575757",
    margin: "auto",
    borderRadius: "15px",
    padding: "5px",
    width: "150px",
  },
  itemView1:{
    backgroundColor: "#c9c9c9",
    borderRadius: "15px",
    margin: "10px",
    padding: "10px",
  },
  headingFont:{
    fontSize: "22px",
    fontWeight: "bold",

  },
  itemView2:{},
  chatTimer:{},
  chatTimerFont:{
    position: "absolute",
    left: "295px",
    backgroundColor: "#878787",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    padding: "2px",
    paddingLeft: "5px",
    paddingRight: "35px",
  },
  subHeadingFont:{
    fontSize: "18px",
  },
  chatActivity:{},
});