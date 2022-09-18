import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authorization from './components/Auth';
import Posts from './components/Posts';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Authorization"
                    component={Authorization}
                />
                <Stack.Screen
                    name="Posts"
                    component={Posts}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;