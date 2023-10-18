import * as React from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
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


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.taskItem} onPress={() => navigation.navigate('Info', {title: item.title, prio: item.prio, color: item.color})}>
            <Text style={styles.taskTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
  

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
        <Button
          title="Go to Menu"
          onPress={() => navigation.navigate('MenuScreen')}
        />
  
        <Button
          title="Create Task"
          onPress={() => navigation.navigate('Tasks', {from: 'HomeScreen'})}
        />
  
        {tasks.map(task => <Text key={task.key}> {task.title}, {task.prio}, {task.color} </Text>)}

        <SafeAreaView style={styles.container}>

            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                style={styles.taskList}
            />
        </SafeAreaView>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%'
    },
    taskList: {
        flex: 1,
    },
    taskItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 4,
        width: '100%'
    },
    taskTitle: {
        fontSize: 18,
    },
});