import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import {NestedLoginRole, RootAuthScreenProps} from '../../types/NavigationTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminScreen} from './loginScreens/admin/AdminScreen';
import {ModeratorScreen} from './loginScreens/moderator/ModeratorScreen';
import {UserScreen} from './loginScreens/user/UserScreen';

const Stack = createNativeStackNavigator<NestedLoginRole>();

export const Login = ({navigation}: RootAuthScreenProps<'Login'>) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>Log in</Text>

            <Stack.Navigator>
                <Stack.Screen name={'Admin'} component={AdminScreen}/>
                <Stack.Screen name={'Moderator'} component={ModeratorScreen}/>
                <Stack.Screen name={'User'} component={UserScreen}/>
            </Stack.Navigator>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Registration', params: {id: 0, name: 'Anastasia'}})}
                title="Jump to Registration"
                color="#841584"
            />
        </View>
    );
};