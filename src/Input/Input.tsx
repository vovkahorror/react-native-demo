import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';

import {globalStyles} from '../../global-styles';

export const Input = (props: InputProps) => {
    const [value, setValue] = useState(props.title);

    return (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TextInput value={value}
                       onChangeText={setValue}
                       style={[styles.input, globalStyles.border]}
            />
            <Button title={'+'} onPress={() => props.changeTitle(props.taskId, value)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 4,
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 18,
    },
});

type InputProps = {
    taskId: number;
    title: string;
    changeTitle: (taskId: number, newTitle: string) => void;
}