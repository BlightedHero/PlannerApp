import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({navigation, route}) {

    const [tasks, setTasks] = React.useState([]);
  
    const addTask = () => {
      // Create a new task
      const newTask = { title: route.params?.title, prio: route.params?.prio, color: route.params?.color };
  
      // Add the new task to the state
      setTasks([...tasks, newTask]);
    };
  
    useFocusEffect(
      React.useCallback(() => {
        // Your function here
        if(route.params?.from === 'TaskScreen') {
          const newTask = { title: route.params?.title, prio: route.params?.prio, color: route.params?.color };
  
          setTasks([...tasks, newTask]);
          console.log('hi')
        }
      }, [route.params?.from])
    );
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
  
        <Button
          title="Go to Menu"
          onPress={() => navigation.navigate('MenuScreen', {itemId: 5})}
        />
  
        <Button
          title="Create Task"
          onPress={() => navigation.navigate('TaskScreen')}
        />
  
        <Button title="Add Task" onPress={addTask} />
  
        {tasks.map(task => <Text key={task.key}> {task.title}, {task.prio}, {task.color}, {JSON.stringify(task.key)} </Text>)}
  
      </View>
    );
  }