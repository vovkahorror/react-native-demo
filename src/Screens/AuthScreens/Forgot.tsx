import {RootAuthScreenProps} from '../../types/NavigationTypes';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import React from 'react';

export const Forgot = ({navigation}: RootAuthScreenProps<'Forgot'>) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>Forgot password</Text>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Registration', params: {id: 1, name: 'Sasha'}})}
                title="Jump to Registration Sasha"
                color="#841584"
            />
            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Registration', params: {id: 0, name: 'Anastasia'}})}
                title="Jump to Registration Nastya"
                color="#841584"
            />
        </View>
    );
};