import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation, route}) {

  const {itemId} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.push('Menu', {itemId: 5})}
      />
    </View>
  );
}

function MenuScreen({navigation, route}) {

  const {itemId} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.push('Menu', {itemId: 7})}
      />
      <Button
        title="Change Title"
        onPress={() => navigation.setOptions({title: Math.floor(Math.random() * 100).toString()})}
      />
      <Button
        title="Change itemId"
        onPress={() => navigation.setParams({itemId: Math.floor(Math.random() * 100)})}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;