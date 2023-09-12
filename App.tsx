import {
    Alert,
    Animated,
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
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Checkbox} from 'expo-checkbox';
import {Input} from './src/Input/Input';
import {globalStyles} from './global-styles';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {WithSafeAreaView} from './src/ComponentsHelpers/WithSafeAreaView';
import {HomeProps, ProfileProps, RootStackParamList, UserProps} from './src/Types/NavigationTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootAuth} from './src/Screens/AuthScreens/RootAuth';

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();
// const Stack = createDrawerNavigator<RootStackParamList>();

const image = require('./assets/background.jpg');

const HomeScreen = ({navigation}: HomeProps) => {
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
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <WithSafeAreaView>
                <View style={styles.container}>
                    <HideKeyboard>
                        <View style={[{width: '80%', alignItems: 'center', paddingVertical: 30}]}>
                            <TextInput value={value} onChangeText={setValue} style={[styles.input]}/>
                        </View>
                    </HideKeyboard>

                    <View style={[globalStyles.border]}>
                        <Button title={'Add task'} color={'#ff8906'} onPress={addTask}/>
                    </View>

                    <View style={{width: '60%'}}>
                        {tasks.map((task, index) => (
                            <CheckboxItem key={task.id} task={task} index={index} show={show} setShow={setShow}
                                          changeStatus={changeStatus} changeTitle={changeTitle}/>
                        ))}
                    </View>

                    <View>
                        <Pressable onPress={() => {
                            Alert.alert('pressed!');
                        }}>
                            {({pressed}) =>
                                <Text style={{...styles.text, color: pressed ? 'red' : '#fff'}}>I'm pressable!</Text>}
                        </Pressable>
                    </View>

                    <Button
                        onPress={() => navigation.navigate('Profile',
                            {
                                myName: 'Volodymyr',
                                myAge: 31
                            })}
                        title="Jump to Profile"
                        color="#841584"
                    />
                </View>
            </WithSafeAreaView>
        </ImageBackground>
    );
};

const ProfileScreen = ({route, navigation}: ProfileProps) => {
    const {myName, myAge} = {...route.params};

    return (
        <WithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile Screen</Text>
                <Text>My name: {myName}</Text>
                <Text>My age: {myAge}</Text>

                <Button
                    onPress={() => navigation.navigate('User')}
                    title="Jump to User"
                    color="#841584"
                />
            </View>
        </WithSafeAreaView>
    );
};

const UserScreen = ({navigation}: UserProps) => {
    return (
        <WithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile Screen</Text>

                <Button
                    onPress={() => navigation.navigate('Auth', {screen: 'Login'})}
                    title="Jump to Auth"
                    color="#841584"
                />
            </View>
        </WithSafeAreaView>
    );
};

export default function App() {


    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{myName: 'Nastya', myAge: 30}}/>
                    <Stack.Screen name="User" component={UserScreen}/>
                    <Stack.Screen name="Auth" component={RootAuth}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const HideKeyboard = ({children}: { children: ReactNode }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const CheckboxItem = ({task, index, show, setShow, changeStatus, changeTitle}: CheckboxItemProps) => {
    const opacityAnimValue = useRef(new Animated.Value(0)).current;
    const translateYAnimValue = useRef(new Animated.Value(200)).current;
    const translateXAnimValue = useRef(new Animated.Value(200)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacityAnimValue, {
                toValue: 1,
                duration: 500,
                delay: 200 * index,
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnimValue, {
                toValue: 0,
                duration: 500,
                delay: 200 * index,
                useNativeDriver: true,
            }),
            Animated.timing(translateXAnimValue, {
                toValue: 0,
                duration: 500,
                delay: 200 * index,
                useNativeDriver: true,
            })]).start();
    }, []);

    return (
        <Animated.View style={[globalStyles.border, styles.boxTask, {
            opacity: opacityAnimValue,
            transform: [{translateY: translateYAnimValue}, {translateX: translateXAnimValue}],
        }]}>
            <Checkbox value={task.isDone}
                      onValueChange={value => changeStatus(task.id, value)}></Checkbox>
            {show === task.id
                ? <Input taskId={task.id} title={task.title} changeTitle={changeTitle}/>
                : <Text onLongPress={() => setShow(task.id)}>{task.title}</Text>}
        </Animated.View>
    );
};

type CheckboxItemProps = {
    task: TaskType;
    index: number;
    show: number | null;
    setShow: (taskId: number) => void;
    changeStatus: (taskId: number, value: boolean) => void;
    changeTitle: (taskId: number, title: string) => void;
}

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    text: {
        fontSize: 26,
        color: '#fff',
    },
});

