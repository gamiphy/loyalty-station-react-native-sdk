import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';


interface Props {
    loadingIndicator?: React.ReactNode
}

/**
 *
 * @param loadingIndicator
 * @constructor
 *
 * Default loading indicator to indicate the loading the Loyalty station webview.
 * note: this could be custom, you just need to send props called loadingIndicator with your custom loading
 *
 */
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
