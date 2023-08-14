import * as React from 'react';
import { Button, View, Text } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export default function HomeScreen({navigation, route}) {

    const [tasks, setTasks] = React.useState([]);
  
    React.useEffect(() => {
        if(route.params?.from === 'TaskScreen') {
            const newTask = { title: route.params?.title, prio: route.params?.prio, color: route.params?.color, key: uuidv4()};

            setTasks([...tasks, newTask]);
        }
    }, [route.params?.title, route.params?.prio, route.params?.color, route.params?.from])
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
  
        <Button
          title="Go to Menu"
          onPress={() => navigation.push('MenuScreen', {itemId: 5})}
        />
  
        <Button
          title="Create Task"
          onPress={() => navigation.navigate('TaskScreen', {from: 'HomeScreen'})}
        />
  
        {tasks.map(task => <Text key={task.key}> {task.title}, {task.prio}, {task.color} </Text>)}
  
      </View>
    );
  }