

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../utils/colors';

interface NewTimerProps {
    addTimer: (sec: number) => void;
}

const { width, height } = Dimensions.get('window');

const NewTimer: React.FC<NewTimerProps> = ({addTimer}) => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [time, setTime] = useState('');

    function handleTime(str: string) {
        if(time.length < 6){
        setTime(time + str);
        if(time.length === 0) {
            setSeconds('0' + str);
        } else if(time.length === 1) {
            setSeconds(seconds[1] + str);
        } else if(time.length === 2) {
            setMinutes('0' + seconds[0]);
            setSeconds(seconds[1] + str);
        } else if(time.length === 3) {
            setMinutes(minutes[1] + seconds[0]);
            setSeconds(seconds[1] + str);
        } else if(time.length === 4) {
            setHours('0' + minutes[0]);
            setMinutes(minutes[1] + seconds[0]);
            setSeconds(seconds[1] + str);
        } else if(time.length === 5) {
            setHours(hours[1] + minutes[0]);
            setMinutes(minutes[1] + seconds[0]);
            setSeconds(seconds[1] + str);
        }
    }
    }

    function clearTime () {
        setTime('');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
    }

  return (
    <View style={styles.container}>
        <View style={styles.timeBox}>
        <Text style={styles.timeBoxText}>{hours} : {minutes} : {seconds}</Text>
        </View>
        <View style={styles.numberBox}>
        {[9,8,7,6,5,4,3,2,1,0].map((number, index) => (
        <TouchableOpacity onPress={()=>{handleTime(number.toString())}} key={index} style={styles.numberContainer}>
          <Text style={styles.numberText}>{number}</Text>
        </TouchableOpacity>
      ))}
      </View>

      <View style={styles.actionBox}>
        <TouchableOpacity style={styles.actionClear} onPress={()=>{clearTime()}}>
            <Text style={[styles.actionText, {color: 'black'}]}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionStart} onPress={()=> {addTimer(parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)); clearTime();}}>
            <Text style={[styles.actionText, {color: 'white'}]}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 40,
  },
  timeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.8,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 20,
    borderColor: Colors.primaryColor,
    borderWidth: 4,
    paddingVertical:16
  },
  timeBoxText: {
    fontSize: 32,
    color: Colors.primaryColor,
    fontWeight: 'bold'
  },
  numberBox: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16
  },
  numberContainer: {
    width: '17%',
    marginHorizontal: '1.5%',
    paddingVertical: 6,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  actionBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  actionClear: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingVertical: 10, 
    paddingHorizontal: 60,
    elevation: 5,
    marginRight: 5
  },
  actionStart: {
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    paddingVertical: 10, 
    paddingHorizontal: 60,
    elevation: 5,
    marginLeft: 5
  },
  actionText: {
    fontSize: 20,
  }
});

export default NewTimer;

