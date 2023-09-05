import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './Login';
import {Registration} from './Registration';
import {RootAuthParamList} from '../../Types/NavigationTypes';

const Stack = createStackNavigator<RootAuthParamList>();

export const RootAuth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Registration'} component={Registration}/>
        </Stack.Navigator>
    );
};