import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../../../../hooks/useAppNavigation';
import React from 'react';

export const AdminScreen = () => {
    const navigation = useAppNavigation();

    return (
        <View>
            <Text>Admin screen</Text>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Forgot'})}
                title="Jump to Forgot"
                color="#841584"
            />
        </View>
    );
};