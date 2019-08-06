import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';
import { Circle } from './components/Circle';
import PureChart from 'react-native-pure-chart';

const BreathingPage = () => {

let sampleData = [68, 90, 150, 69, 88];

return (
        <View style={styles.breathingratepage}>
            <Title> Breathing Rate </Title>
            <Subtitle> Breathing Rate (BR)</Subtitle>
            <PureChart data={sampleData} type='line'/> 
            <View style={styles.empty}/>
            <Circle style={{alignItems: 'center'}}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    breathingratepage: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center' 
    },

    empty: {
        width: 50,
        height: 200,
    }
})

export {BreathingPage};