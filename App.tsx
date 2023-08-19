import {StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';

export default function App() {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={setValue} style={[globalStyles.border, styles.input]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4e8d4f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 10,
        width: 200,
        backgroundColor: '#fff',
        fontSize: 18,
    },
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
    }
});
