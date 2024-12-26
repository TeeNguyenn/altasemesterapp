import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './Demo2910.style';

const Demo2910 = () => {

  const [opacityLevel, setOpacityLevel] = useState(0);
  const [action, setAction] = useState('increase');
  const [result, setResult] = useState(0);
  const [value, setValue] = useState('');

  const handleChange = () => {

    if(opacityLevel >= 0.9) {
        setAction('decrease');
    } else if ( opacityLevel <= 0) {
        setAction('increase');
    }

    if(action === 'increase') {
        setOpacityLevel(prev => prev + 0.1);
    } else {
        setOpacityLevel(prev => prev - 0.1);
    }
  }

  const getDayNumber = async ():Promise<number> => {
    return new Promise(resolve =>{
        const today = new Date();
        
        const endDate = new Date((today.getFullYear() + 1).toString() + '-01-01');
        const endDateMiliSecond = endDate.getTime();
        const toDayMiliSecond = today.getTime();

        resolve(Math.ceil((endDateMiliSecond - toDayMiliSecond) / (1000 * 60 * 60 * 24)));
    });
  };

  useEffect(() => {
    async function getValue() {
        let value:number = await getDayNumber();
        setResult(value);
    }
    getValue();
  }, [])


  return (
    <View style={styles.container}>
        <ImageBackground style={styles.imgBg} source={require('../../assets/images/LoginRight.png')}>
            <View style={[styles.imgBgContainer, {backgroundColor: `rgba(0, 0, 0, ${opacityLevel})`}]}>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Enter money/day:</Text>
                    <TextInput value={value} onChangeText={text => setValue(text)}  style={styles.textInput} keyboardType='numeric'/>
                    <Text style={styles.label}>Total: { Number(value) * result}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleChange}>
                    <Text style={styles.btnText}>Change opacity</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Hello World</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Demo2910