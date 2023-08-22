import {StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Checkbox} from 'expo-checkbox';

export default function App() {
    const [value, setValue] = useState('');

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'React', isDone: true},
        {id: 5, title: 'React Native', isDone: false},
    ]);

    const addTask = () => {

    }

    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[{width: '80%', alignItems: 'center', paddingVertical: 30}]}>
                    <TextInput value={value} onChangeText={setValue} style={[styles.input]}/>
                </View>
            </HideKeyboard>
            <View style={[globalStyles.border, {backgroundColor: 'red'}]}>
                <Button title={'Add task'} onPress={() => {}}/>
            </View>
            <View style={{width: '60%'}}>
                {tasks.map(task => (
                    <View key={task.id} style={[globalStyles.border, styles.boxTask]}>
                        <Checkbox value={task.isDone}></Checkbox>
                        <Text>{task.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const HideKeyboard = ({children}: { children: ReactNode }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e17',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 4,
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 18,
    },
    boxTask: {
        flexDirection: 'row',
        marginVertical: 4,
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#fffffe',
        justifyContent: 'space-between',
    },
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
    },
});
