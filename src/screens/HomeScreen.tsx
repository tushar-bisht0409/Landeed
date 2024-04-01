import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '../utils/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC = () => {

    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigate('CountdownScreen')} style={styles.button}>
            <Text style={styles.buttonText}>Countdown Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigate('WorldclockScreen')} style={styles.button}>
            <Text style={styles.buttonText}>World Clock</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    elevation: 10,
    justifyContent: 'center',
    width: width * 0.7,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 60,
    marginBottom: 20
  },
  buttonText: {
    color: Colors.tertiaryColor,
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
