

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/colors';
import { Timer } from '../screens/CountdownScreen';

interface TimeCardProps {
    timer: Timer
    deleteTimer: (id: number) => void;
}

const TimeCard: React.FC<TimeCardProps> = ({timer, deleteTimer}) => {

    const formatDuration = (): string => {
        const hours: number = Math.floor(timer.remainingTime / 3600);
        const minutes: number = Math.floor((timer.remainingTime % 3600) / 60);
        const remainingSeconds: number = timer.remainingTime % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    
  return (
    <View style={styles.container}>
        <Text style={styles.time}>{formatDuration()}</Text>
        <TouchableOpacity style={styles.delete}>
            <Text onPress={()=> deleteTimer(timer.id)} style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '5%',
    padding: 15,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
    marginBottom: 10
  },
  time: {
    fontSize: 24,
    color: Colors.primaryColor
  },
  delete: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5
  },
  deleteText: {
    color: 'white',
    fontSize: 16
  }
});

export default TimeCard;

