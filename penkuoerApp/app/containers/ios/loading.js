/*****
* Created by yuluo on 16/04/14.
* ladoing-ctrl
* ****/

import React from 'react-native';

var {
    StyleSheet,
    Text,
    View,
} = React;

var Loading = React.createClass({

    render : function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ffffff'
    }
});

export default Loading;
