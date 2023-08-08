import * as React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, MenuScreen, CreatePostScreen } from '../App';


const Stack = createNativeStackNavigator();

export default function NavigationController() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'Overview' }} 
                initialParams={{ itemId: 42 }}
                />

                <Stack.Screen 
                name="Menu" 
                component={MenuScreen}
                options={{ title: 'Overview' }} 
                initialParams={{ itemId: 17 }}
                />
                <Stack.Screen 
                name="CreatePost" 
                component={CreatePostScreen}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}