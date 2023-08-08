import * as React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationController from './navigation/navigationController';

export function HomeScreen({navigation, route}) {

  const {itemId} = route.params;

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.push('Menu', {itemId: 5})}
      />
       <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

export function MenuScreen({navigation, route}) {

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
        //setOptions used for screen shit
        onPress={() => navigation.setOptions({title: Math.floor(Math.random() * 100).toString()})}
      />
      <Button
        title="Change itemId"
        //setParams used for non screen shit
        onPress={() => navigation.setParams({itemId: Math.floor(Math.random() * 100)})}
      />
    </View>
  );
}

// Creates seperate screen allowing params to be sent through
export function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'HomeScreen',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

function App() {
  return (
    <NavigationController/>
  );
}

export default App;