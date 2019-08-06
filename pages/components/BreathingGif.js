import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

const BreathingGif = () => {
    return (
        <Image
            source={{uri: "https://thumbs.gfycat.com/HideousDefinitiveAmphibian-size_restricted.gif"}}
            style={styles.breathingGif}
        />
    )
}

const styles = StyleSheet.create({
    breathingGif: {
        height: 350,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export {BreathingGif};