import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';
import { Circle } from './components/Circle';
import PureChart from 'react-native-pure-chart';

const SummaryPage = () => {

let sampledData = [
    {
        seriesName: 'series1',
        data: [
            {x: 'Mon', y: 68},
            {x: 'Tues', y: 80},
            {x: 'Wed', y: 95},
            {x: 'Thurs', y: 60},
            {x: 'Fri', y: 90},
        ],
        color: '#297AB1'
    }
]

let sample = [
    {
        seriesName: 'series1',
        data: [
            {x: 'Mon', y: 20},
            {x: 'Tues', y: 80},
            {x: 'Wed', y: 50},
            {x: 'Thurs', y: 66},
            {x: 'Fri', y: 76},
        ],
        color: '#297AB1'
    }
]

return (
    <View style={styles.heartratepage}>
        <Title> Summary </Title>
        <Subtitle>Average Heart Rate </Subtitle>
        <PureChart data={sampledData} type='bar'/> 
        <Subtitle> Average Breathing Rate </Subtitle>
        <PureChart data={sample} type='bar'/> 
        <Text> Average Heart Rate: </Text>
        <Text> Resting Heart Rate: </Text>
        <Text> Fastest Heart Rate: </Text>
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
        height: 10,
    }
})

export {SummaryPage};