import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';
import { Circle } from './components/Circle';
import PureChart from 'react-native-pure-chart';

const HeartSummaryPage = () => {

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

return (
    <View style={styles.heartratepage}>
        <Title> Heart Summary </Title>
        <Subtitle>Average Heart Rate </Subtitle>
        <PureChart data={sampledData} type='bar'/> 
        <Subtitle>Average Heart Rate: </Subtitle>
        <Subtitle>Resting Heart Rate: </Subtitle>
        <Subtitle>Fastest Heart Rate: </Subtitle>
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

export {HeartSummaryPage};