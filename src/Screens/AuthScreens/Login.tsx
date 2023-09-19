import React from 'react';
import {NestedLoginRole, RootAuthScreenProps} from '../../types/NavigationTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminScreen} from './loginScreens/admin/AdminScreen';
import {ModeratorScreen} from './loginScreens/moderator/ModeratorScreen';
import {UserScreen} from './loginScreens/user/UserScreen';

const Stack = createNativeStackNavigator<NestedLoginRole>();

export const Login = ({navigation}: RootAuthScreenProps<'Login'>) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={'Admin'} component={AdminScreen}/>
            <Stack.Screen name={'Moderator'} component={ModeratorScreen}/>
            <Stack.Screen name={'User'} component={UserScreen}/>
        </Stack.Navigator>
    );
};