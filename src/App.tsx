import React, {ReactNode,} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';


const App: () => ReactNode = () => {
    return (
        <>
            <SafeAreaView style={styles.root}>
                <Text>Hello World!</Text>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center'
    },
});

export default App;
