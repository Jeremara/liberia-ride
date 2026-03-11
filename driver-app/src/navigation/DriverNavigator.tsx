import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Driver Screens
import DriverSplash from "../screens/DriverSplashScreen";
import DriverLogin from "../screens/DriverLoginScreen";
import DriverRegistration from "../screens/DriverRegistrationScreen";
import DocumentUpload from "../screens/DocumentUploadScreen";
import VerificationPending from "../screens/VerificationPendingScreen";
import DriverDashboard from "../screens/DriverDashboardScreen";
import RideRequest from "../screens/RideRequestScreen";
import PickupNavigation from "../screens/PickupNavigationScreen";
import DriverRideInProgress from "../screens/DriverRideInProgressScreen";
import DriverTripComplete from "../screens/DriverTripCompleteScreen";
import DriverProfile from "../screens/DriverProfileScreen";
import DriverEarnings from "../screens/DriverEarningsScreen";
import DriverWallet from "../screens/DriverWalletScreen";


export type DriverStackParamList = {
    DriverSplash: undefined;
    DriverLogin: undefined;
    DriverRegistration: undefined;
    DocumentUpload: undefined;
    VerificationPending: undefined;
    DriverDashboard: undefined;
    RideRequest: undefined;
    PickupNavigation: undefined;
    DriverRideInProgress: undefined;
    DriverTripComplete: undefined;
    DriverProfile: undefined;
    DriverEarnings: undefined;
    DriverWallet: undefined;
};

const Stack = createNativeStackNavigator();

export default function DriverNavigator() {

    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="DriverSplash"
            >

                <Stack.Screen name="DriverSplash" component={DriverSplash} />

                <Stack.Screen name="DriverLogin" component={DriverLogin} />

                <Stack.Screen name="DriverRegistration" component={DriverRegistration} />

                <Stack.Screen name="DocumentUpload" component={DocumentUpload} />

                <Stack.Screen name="VerificationPending" component={VerificationPending} />

                <Stack.Screen name="DriverDashboard" component={DriverDashboard} />

                <Stack.Screen name="RideRequest" component={RideRequest} />

                <Stack.Screen name="PickupNavigation" component={PickupNavigation} />

                <Stack.Screen name="DriverRideInProgress" component={DriverRideInProgress} />

                <Stack.Screen name="DriverTripComplete" component={DriverTripComplete} />

                <Stack.Screen name="DriverProfile" component={DriverProfile} />

                <Stack.Screen name="DriverEarnings" component={DriverEarnings} />

                <Stack.Screen name="DriverWallet" component={DriverWallet} />

            </Stack.Navigator>
        </NavigationContainer>

    );

}