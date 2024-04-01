import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '../utils/colors';

const { width, height } = Dimensions.get('window');

const WorldclockScreen: React.FC = () => {

  const [mode, setMode] = useState('');
  const [time, setTime] = useState(0);

  async function fetchTime (str: string, mod: string) {
    try {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/Asia/${str}`);
      const data = await response.json();
      const timeComponents = data.datetime.split(/[T:.+]/);
      const hour = parseInt(timeComponents[1]);
      const minute = parseInt(timeComponents[2]);
      const second = parseInt(timeComponents[3]);
      setTime((hour * 3600) + (minute * 60) + second);
      setMode(mod);
    } catch (error) {
      console.error('Error fetching time:', error);
    }
  }

  const formatDuration = (): string => {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const remainingSeconds: number = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime =>
        prevTime + 1,
        );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <Text style={styles.time}>{mode === '' ? '-- : -- : --' : formatDuration()}</Text>
      </View>
      <View style={styles.toggle}>
        <TouchableOpacity onPress={() => fetchTime('Kolkata','IST')} style={[styles.toggleButton,{elevation: mode === 'IST' ? 10 : 0, backgroundColor: mode === 'IST' ? Colors.primaryColor : 'transparent' }]}>
          <Text style={[styles.toggleButtonText, {color: mode === 'IST' ? 'white' : 'black'}]}>IST</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fetchTime('Karachi','PST')} style={[styles.toggleButton,{elevation: mode === 'PST' ? 10 : 0, backgroundColor: mode === 'PST' ? Colors.primaryColor : 'transparent' }]}>
          <Text style={[styles.toggleButtonText, {color: mode === 'PST' ? 'white' : 'black'}]}>PST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 80
  },
  toggle: {
    flexDirection: 'row',
    paddingHorizontal: '20%',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40
  },
  toggleButtonText: {
    fontSize: 24,
  },
  clock: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.primaryColor,
    marginBottom: 80
  },
  time: {
    fontSize: 32,
    backgroundColor: Colors.tertiaryColor,
    padding: 8,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: Colors.primaryColor,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default WorldclockScreen;
