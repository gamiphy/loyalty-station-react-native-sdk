import React, {FunctionComponentElement} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';


interface Props {
    loadingIndicator?: FunctionComponentElement<any> | undefined
}

export const LoadingIndicator: React.FC<Props> = ({loadingIndicator}) => {

    return (
        <View style={styles.root}>
            {
                loadingIndicator && (
                    loadingIndicator
                )
            }
            {
                !loadingIndicator && (
                    <ActivityIndicator size='large'/>
                )
            }
        </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});