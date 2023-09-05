import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import {RootAuthScreenProps} from '../../Types/NavigationTypes';

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