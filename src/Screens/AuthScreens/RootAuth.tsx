import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './Login';
import {Registration} from './Registration';
import {RootAuthParamList} from '../../Types/NavigationTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Forgot} from './Forgot';

// const Stack = createStackNavigator<RootAuthParamList>();
const Stack = createNativeStackNavigator<RootAuthParamList>();

export const RootAuth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Registration'} component={Registration}/>
            <Stack.Screen name={'Forgot'} component={Forgot}/>
        </Stack.Navigator>
    );
};