import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigator from "./DrawerNavigator";

// Import Screens
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileSetupScreen from "../screens/ProfileSetupScreen";

import SetDestinationScreen from "../screens/SetDestinationScreen";
import FareEstimationScreen from "../screens/FareEstimationScreen";
import RideTypesScreen from "../screens/RideTypesScreen";
import BookingConfirmationScreen from "../screens/BookingConfirmationScreen";
import SearchingDriverScreen from "../screens/SearchingDriverScreen";
import DriverAssignedScreen from "../screens/DriverAssignedScreen";
import RideInProgressScreen from "../screens/RideInProgressScreen";
import TripCompleteScreen from "../screens/TripCompleteScreen";
import RatingScreen from "../screens/RatingScreen";

import PaymentMethods from "../screens/PaymentMethods";
import RideDetails from "../screens/RideDetails";
import DriverTracking from "../screens/DriverTracking";

// New Sidebar Screens
import EmergencyContacts from "../screens/EmergencyContacts";
import SettingsScreen from "../screens/SettingsScreen";

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  ProfileSetup: undefined;

  Main: undefined;

  SetDestination: undefined;
  FareEstimation: undefined;
  RideTypes: undefined;
  BookingConfirmation: undefined;
  SearchingDriver: undefined;
  DriverAssigned: undefined;
  RideInProgress: undefined;
  TripComplete: undefined;
  Rating: undefined;

  PaymentMethods: undefined;

  RideDetails: { rideId: string };
  DriverTracking: { driverId: string };

  EmergencyContacts: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />

        {/* Drawer Navigation (Home + Sidebar) */}
        <Stack.Screen name="Main" component={DrawerNavigator} />

        {/* Ride Flow */}
        <Stack.Screen
          name="SetDestination"
          component={SetDestinationScreen}
        />

        <Stack.Screen
          name="FareEstimation"
          component={FareEstimationScreen}
        />

        <Stack.Screen name="RideTypes" component={RideTypesScreen} />

        <Stack.Screen
          name="BookingConfirmation"
          component={BookingConfirmationScreen}
        />

        <Stack.Screen
          name="SearchingDriver"
          component={SearchingDriverScreen}
        />

        <Stack.Screen
          name="DriverAssigned"
          component={DriverAssignedScreen}
        />

        <Stack.Screen
          name="RideInProgress"
          component={RideInProgressScreen}
        />

        <Stack.Screen
          name="TripComplete"
          component={TripCompleteScreen}
        />

        <Stack.Screen name="Rating" component={RatingScreen} />

        {/* Payments */}
        <Stack.Screen
          name="PaymentMethods"
          component={PaymentMethods}
        />

        {/* Ride Details */}
        <Stack.Screen name="RideDetails" component={RideDetails} />

        {/* Driver Tracking */}
        <Stack.Screen
          name="DriverTracking"
          component={DriverTracking}
        />

        {/* Safety */}
        <Stack.Screen
          name="EmergencyContacts"
          component={EmergencyContacts}
        />

        {/* Settings */}
        <Stack.Screen name="Settings" component={SettingsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}