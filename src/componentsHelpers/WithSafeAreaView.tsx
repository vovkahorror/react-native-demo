import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export const WithSafeAreaView = ({children}: WithSafeAreaViewPropsType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    );
};

type WithSafeAreaViewPropsType = {
    children: ReactNode;
}