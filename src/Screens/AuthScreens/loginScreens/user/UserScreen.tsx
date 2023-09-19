import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../../../../hooks/useAppNavigation';
import React from 'react';

export const UserScreen = ({}: UserScreenProps) => {
    const navigation = useAppNavigation();

    return (
        <View>
            <Text>User screen</Text>

            <Button
                onPress={() => navigation.navigate('Auth', {screen: 'Forgot'})}
                title="Jump to Forgot"
                color="#841584"
            />
        </View>
    );
};

interface UserScreenProps {

}