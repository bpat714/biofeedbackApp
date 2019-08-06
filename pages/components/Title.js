import React, {
    Component
  } from 'react';
  import {
    Text,
    StyleSheet
  } from 'react-native';
  
  const Title = (props) => {
    return(
        <Text style={styles.title}> {props.children} </Text>
    )
  }
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      padding: 45,
      color: '#665856',
      textAlign: 'center',
    }
  })
  
  export {Title};
  
  