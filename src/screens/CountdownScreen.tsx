import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '../utils/colors';
import NewTimer from '../components/NewTimer';
import TimeCard from '../components/TimerCard';
import { ScrollView } from 'react-native-gesture-handler';


export interface Timer {
    id: number;
    time: number;
    remainingTime: number;
  }

const CountdownScreen: React.FC = () => {
    
    const [timers, setTimers] = useState<Timer[]>([]);

    function addTimer(sec: number) {
        if (sec > 0) {
        const newTimer: Timer = {
            id: Date.now() + Math.random(),
            time: sec,
            remainingTime: sec,
        };
        setTimers([...timers, newTimer]);
        }
    }

    const deleteTimer = (id: number) => {
        setTimers(timers.filter(timer => timer.id !== id));
      };

      useEffect(() => {
        const interval = setInterval(() => {
          setTimers(prevTimers =>
            prevTimers.map(timer => ({
              ...timer,
              remainingTime: timer.remainingTime - 1 > 0 ? timer.remainingTime - 1 : 0,
            }))
          );
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <ScrollView contentContainerStyle={{paddingVertical:20}} style={styles.container}>
        <NewTimer addTimer={addTimer}/>
        {timers.map((timer, index) => (
        <TimeCard key={timer.id} timer={timer} deleteTimer={deleteTimer}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CountdownScreen;
