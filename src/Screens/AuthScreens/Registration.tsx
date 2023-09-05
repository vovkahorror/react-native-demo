import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import {RootAuthScreenProps} from '../../Types/NavigationTypes';

export const Registration = ({route, navigation}: RootAuthScreenProps<'Registration'>) => {
    const {id, name} = {...route.params}

    return (
        <View style={[globalStyles.center]}>
            <Text>Registration</Text>
            <Text>ID: {id}</Text>
            <Text>Name: {name}</Text>

            <Button
                onPress={() => navigation.navigate('User')}
                title="Jump to User"
                color="#841584"
            />
        </View>
    );
};