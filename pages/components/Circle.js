import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class Circle extends Component {
    constructor() {
        super()
        this.state = {}
        this.state.customStyle = {
          backgroundColor: 'red'
        }
    
        let getColour = () => {
          let letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++ ) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
    
    
        setInterval(() => {
          this.setState({
            customStyles: {
              backgroundColor: getColour()
            }
          })
        }, 1000)
    
      }

      render() {
        return (
            <View style={styles.container}>
              <View style={[styles.circle, this.state.customStyles]}/>
            </View>
          );
      }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //marginTop: 20,
      //justifyContent: 'center',
      //alignContent: 'center',
      //alignItems: 'center',
      backgroundColor: 'white'
    },
  
    circle: {
      width: 80,
      height: 80,
      borderRadius: 100/2,
      backgroundColor: 'white',
      marginBottom: 10
    //   marginTop: 600,
    //   marginLeft: 135
    }
  
  })
