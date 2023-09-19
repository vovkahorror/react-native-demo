import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../../../hooks/useAppNavigation';

export const ModeratorScreen = () => {
    const navigation = useAppNavigation();

    return (
        <View>
            <Text>Moderator screen</Text>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Forgot'})}
                title="Jump to Forgot"
                color="#841584"
            />
        </View>
    );
};