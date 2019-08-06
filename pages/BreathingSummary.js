import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';
import { Circle } from './components/Circle';
import PureChart from 'react-native-pure-chart';

export class BreathingSummary extends Component {
    constructor() {
        super()
        this.state = {}
        this.state = {}
    
    let sample = [
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

}

      render() {
        return (
            <View style={styles.heartratepage}>
            <Title> Breathing Summary </Title>  
            <Subtitle> Average Breathing Rate </Subtitle>
            <PureChart data={sample} type='bar'/> 
            <Subtitle> Average Breathing Rate: </Subtitle>
            <Subtitle> Resting Breathing Rate: </Subtitle>
            <Subtitle> Fastest Breathing Rate: </Subtitle>
            <Circle style={{alignItems: 'center'}}/>
            </View>
          );
      }
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