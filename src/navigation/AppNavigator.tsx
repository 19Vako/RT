import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from '../screens/MenuScreen';
import WelcomeLoaderScreen from '../screens/WelcomeLoadScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AffirmationsScreen from '../screens/AffirmationsScreen';
import RiskToleranceScreen from '../screens/RiskToleranceScreen';
import BudgetScreen from '../screens/BudgetScreen';
import PotentialLossesScreen from '../screens/PotentialLossesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddAffirmationScreen from '../screens/AddAffirmationScreen';
import PastBargainsScreen from '../screens/PastBargainsScreen';
import BudgetEditScreen from '../screens/BudgetEditScreen';
import SupportScreen from '../screens/SupportScreen';
import TotalIncomeScreen from '../screens/TotalIncomeScreen';
import SoundSettingsScreen from '../screens/SoundSettingsScreen';
import TradeHistoryScreen from '../screens/TradeHistoryScreen';
import ScreenSettingsScreen from '../screens/ScreenSettingsScreen';
import UpdateScreen from '../screens/UpdateScreen';



const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeLoader" screenOptions={{headerShown: false}}>
                <Stack.Screen name="WelcomeLoader" component={WelcomeLoaderScreen} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Affirmations" component={AffirmationsScreen} />
                <Stack.Screen name="RiskTolerance" component={RiskToleranceScreen} />
                <Stack.Screen name="Budget" component={BudgetScreen} />
                <Stack.Screen name="PotentialLosses" component={PotentialLossesScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="AddAffirmation" component={AddAffirmationScreen} />
                <Stack.Screen name="PastBargainsScreen" component={PastBargainsScreen} />
                <Stack.Screen name="BudgetEdit" component={BudgetEditScreen} />
                <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
                <Stack.Screen name="Support" component={SupportScreen} />
                <Stack.Screen name="TotalIncome" component={TotalIncomeScreen} />
                <Stack.Screen name="SoundSettings" component={SoundSettingsScreen} />
                <Stack.Screen name="TradeHistory" component={TradeHistoryScreen} />
                <Stack.Screen name="ScreenSettings" component={ScreenSettingsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
