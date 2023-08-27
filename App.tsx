import {
    Alert,
    Button,
    ImageBackground,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Checkbox} from 'expo-checkbox';
import {Input} from './Input/Input';
import {globalStyles} from './global-styles';

const image = require('./assets/background.jpg');

export default function App() {
    const [value, setValue] = useState('');
    const [show, setShow] = useState<number | null>(null);
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'React', isDone: true},
        {id: 5, title: 'React Native', isDone: false},
    ]);

    const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            title: value,
            isDone: false,
        };
        setTasks([newTask, ...tasks]);
        setValue('');
    };

    const changeStatus = (taskId: number, status: boolean) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: status} : task));
    };

    const changeTitle = (taskId: number, title: string) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, title} : task));
        setShow(null);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <HideKeyboard>
                    <View style={[{width: '80%', alignItems: 'center', paddingVertical: 30}]}>
                        <TextInput value={value} onChangeText={setValue} style={[styles.input]}/>
                    </View>
                </HideKeyboard>
                <View style={[globalStyles.border]}>
                    <Button title={'Add task'} color={'#ff8906'} onPress={addTask}/>
                </View>
                <View style={{width: '60%'}}>
                    {tasks.map(task => (
                        <View key={task.id} style={[globalStyles.border, styles.boxTask]}>
                            <Checkbox value={task.isDone}
                                      onValueChange={value => changeStatus(task.id, value)}></Checkbox>
                            {show === task.id
                                ? <Input taskId={task.id} title={task.title} changeTitle={changeTitle}/>
                                : <Text onPress={() => setShow(task.id)}>{task.title}</Text>}
                        </View>
                    ))}
                </View>
                <View>
                    <Pressable onPress={() => {
                        Alert.alert('pressed!')
                    }}>
                        {({pressed}) =>
                            <Text style={{...styles.text, color: pressed ? 'red' : '#fff' }}>I'm pressable!</Text>}
                    </Pressable>
                </View>
            </ImageBackground>
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
        alignItems: 'stretch',
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
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

