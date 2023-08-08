import * as React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, MenuScreen, CreatePostScreen } from '../App';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function NavigationController() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={DrawerNavigation} 
                options={{headerShown: false}} 
                />
                <Stack.Screen 
                name="Menu" 
                component={DrawerNavigation}
                options={{headerShown: false}} 
                />
                <Stack.Screen 
                name="CreatePost" 
                component={CreatePostScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="HomeScreen" 
                component={HomeScreen} 
                options={{ title: 'Overview' }} 
                initialParams={{ itemId: 42 }}/>
            <Drawer.Screen 
                name="MenuScreen" 
                component={MenuScreen}
                options={{ title: 'MenuScreen' }} 
                initialParams={{ itemId: 17 }}/>
        </Drawer.Navigator>
    );
}