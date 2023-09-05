import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Profile: {myName: string, myAge: number} | undefined;
    User: undefined;
    Auth: NavigatorScreenParams<RootAuthParamList>;
};

export type RootAuthParamList = {
    Login: undefined;
    Registration: {id: number, name: string};
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;

export type RootAuthScreenProps<T extends keyof RootAuthParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootAuthParamList, T>,
    StackScreenProps<RootStackParamList>
>