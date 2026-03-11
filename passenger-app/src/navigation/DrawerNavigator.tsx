import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Wallet from "../screens/Wallet";
import RideHistory from "../screens/RideHistory";
import Notifications from "../screens/Notifications";
import SupportChat from "../screens/SupportChat";
import EmergencyContacts from "../screens/EmergencyContacts";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Screen name="Profile" component={ProfileScreen} />

      <Drawer.Screen name="Wallet" component={Wallet} />

      <Drawer.Screen name="RideHistory" component={RideHistory} />

      <Drawer.Screen name="Notifications" component={Notifications} />

      <Drawer.Screen name="SupportChat" component={SupportChat} />

      <Drawer.Screen
        name="EmergencyContacts"
        component={EmergencyContacts}
      />

      <Drawer.Screen name="Settings" component={SettingsScreen} />

    </Drawer.Navigator>
  );
}