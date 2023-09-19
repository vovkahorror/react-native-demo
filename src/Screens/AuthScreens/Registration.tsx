import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import {RootAuthScreenProps} from '../../types/NavigationTypes';

export const Registration = ({route, navigation}: RootAuthScreenProps<'Registration'>) => {
    const {id, name} = {...route.params}

    return (
        <View style={[globalStyles.center]}>
            <Text>Registration</Text>
            <Text>ID: {id}</Text>
            <Text>Name: {name}</Text>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Forgot'})}
                title="Jump to Forgot"
                color="#841584"
            />

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Login', params: {screen: 'Admin'}})}
                title="Jump to Log In Admin"
                color="#841584"
            />
            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Login', params: {screen: 'Moderator'}})}
                title="Jump to Log In Moderator"
                color="#841584"
            />
            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Login', params: {screen: 'User'}})}
                title="Jump to Log In User"
                color="#841584"
            />
        </View>
    );
};