import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Title} from './components/Title';
import { Circle } from './components/Circle';
import {BreathingGif} from './components/BreathingGif';

const BiofeedbackPage = () => {

return (
        <View style={styles.mainpage}>
            <Text style={styles.title}> Biofeedback Exercise </Text>
            <View style={styles.square}></View>
            <BreathingGif/>
            <View style={styles.empty}></View>
            <Circle/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainpage: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center'
    },
    
    title: {
        fontSize: 30,
        padding: 30,
        color: '#665856',
        textAlign: 'center',
      },
    
      empty: {
        width: 100,
        height: 70,
        backgroundColor: 'white'
      },

    square: {
        width: 20,
        height:20,
        backgroundColor: 'white'
    }
})

export {BiofeedbackPage};

