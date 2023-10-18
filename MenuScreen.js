import { Button, View, Text } from 'react-native';

export default function MenuScreen({navigation, route}) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Menu Screen</Text>
        <Button
          title="Go to Menu"
          onPress={() => navigation.navigate('HomeScreen')}
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