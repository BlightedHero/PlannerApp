import * as React from 'react';
import { Button, TextInput, View, } from 'react-native';

export default function TaskScreen({navigation, route}) {
    const [taskTitle, setTaskTitle] = React.useState('');
    const [taskPrio, setTaskPrio] = React.useState('');
    const [taskColor, setTaskColor] = React.useState('');
    const [id, setId] = React.useState('');

    return (
        <View>
            <TextInput
                multiline
                placeholder="Title/Name"
                style={{ height: 50, padding: 10, backgroundColor: 'white' }}
                value={taskTitle}
                onChangeText={setTaskTitle}
            />

            <TextInput
                multiline
                placeholder="Priority: High, Medium, Low"
                style={{ height: 50, padding: 10, backgroundColor: 'white' }}
                value={taskPrio}
                onChangeText={setTaskPrio}
            />  

            <TextInput
                multiline
                placeholder="Color"
                style={{ height: 50, padding: 10, backgroundColor: 'white' }}
                value={taskColor}
                onChangeText={setTaskColor}
            />
            
            <Button
                title="Confirm Task"
                onPress={() => {
                // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'HomeScreen',
                        params: { title: taskTitle, prio: taskPrio, color: taskColor, from: 'TaskScreen'},
                        merge: true,
                    })
                }}
            />
        </View>
    );

}