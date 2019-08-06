import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Subtitle = (props) => {

return (
        <Text style={styles.subtitle}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        padding: 20,
        color: '#665856',
        alignSelf: 'flex-start'
    }
})

export {Subtitle};