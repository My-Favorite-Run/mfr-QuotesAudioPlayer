import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import AudioProvider from '../context/AudioProvider';
import { Ionicons } from '@expo/vector-icons';

export default function AudioScreen({navigation}) {
   
    return (
        <View style={styles.body}>
          <Text style={styles.title}>Guided Audio Run</Text>
          <Text style={styles.text}>Join Elinor Fish for a 10-minute warmup run. </Text>
         
          <AudioProvider></AudioProvider> 
  
      </View>
    );
}

const styles = StyleSheet.create ({
    body: {
        flex: 1,
        backgroundColor: '#e6ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
      fontSize: 23,
      margin: 10,
      alignContent:'center',
    },
    text: {
        fontSize: 16,
        margin: 10,
        alignSelf:'center',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    slider: {
      alignSelf: 'stretch',
      marginLeft: 15,
      marginRight: 15,
      height: 40,
      padding: 15,
    },  
    buttonText: {
      color: '#ffffff',
    },
    playButton: {
        alignItems: 'center',
        backgroundColor: '#dd99ff', 
        padding: 10,
        width: 60,
        borderRadius: 100,
        fontWeight: 'bold',
    },
    stopButton: {
      alignItems: 'center',
      backgroundColor: '#ff3333', 
      padding: 10,
      width: 60,
      borderRadius: 8,
      fontWeight: 'bold',
    },
})