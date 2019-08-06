import React, { Component } from 'react';
import { 
      Text, 
      View,
      ScrollView,
      Image,
      Dimensions,
      StyleSheet } from 'react-native';

import {Title} from './pages/components/Title'
import {BiofeedbackPage} from './pages/BiofeedbackPage';
import { HeartRatePage } from './pages/HeartRatePage';
import { Circle } from './pages/components/Circle';
import { BreathingPage } from './pages/BreathingPage';
import { HeartSummaryPage } from './pages/HeartSummaryPage';
import { BreathingSummaryPage } from './pages/BreathingSummaryPage';

export default class BiofeedbackApp extends Component {
  
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} // only for ios
      >
        <View style={{ width: screenWidth}}>
          <BiofeedbackPage/>
        </View>
        <View style={{width: screenWidth}}>
          <HeartRatePage/>
        </View>
        <View style={{width: screenWidth}}>
          <BreathingPage/>
        </View>
        <View style={{width: screenWidth}}>
          <HeartSummaryPage/>
        </View>
        <View style={{width: screenWidth}}>
          <BreathingSummaryPage/>
        </View>
        <View style={{width: screenWidth}}>
          <BreathingSummaryPage/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
})