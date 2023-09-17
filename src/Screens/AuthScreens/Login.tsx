import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import {NestedLoginRole, RootAuthScreenProps} from '../../types/NavigationTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<NestedLoginRole>();

export const Login = ({navigation}: RootAuthScreenProps<'Login'>) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>Log in</Text>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Registration', params: {id: 0, name: 'Anastasia'}})}
                title="Jump to Registration"
                color="#841584"
            />
        </View>
    );
};