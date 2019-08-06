import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';
import { Circle } from './components/Circle';
import PureChart from 'react-native-pure-chart';

const HeartRatePage = () => {

let sampleData = [30, 200, 170, 250, 10];

return (
        <View style={styles.heartratepage}>
            <Title> Heart Rate </Title>
            <Subtitle> Heart Rate (HR)</Subtitle>
            <PureChart data={sampleData} type='line'/> 
            <Subtitle> Heart Rate Variation (HRV) </Subtitle>
            <PureChart data={sampleData} type='line'/> 
            <View styles={styles.empty}/>
            <Circle style={{alignItems: 'center'}}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    heartratepage: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center' 
    },
    empty: {
        width: 80,
        height: 100,
        backgroundColor: 'white'
    }
})

export {HeartRatePage};