import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Topic2.style';

const Topic2 = () => {
  const [result, setResult] = useState('');

  const hanldeCalculate = () => {
    const index = result
      .split('')
      .findIndex(
        char =>
          char === '+' ||
          char === '-' ||
          char === '/' ||
          char === 'x' ||
          char === '%',
      );
    const firstNum = Number.parseInt(result.substring(0, index));
    const cal = result.split('').splice(index, 1).at(0);
    const secondNum = Number.parseInt(result.substring(index + 1));

    let outPut;

    switch (cal) {
      case '+':
        outPut = firstNum + secondNum;
        break;
      case '-':
        outPut = firstNum - secondNum;

        break;
      case 'x':
        outPut = firstNum * secondNum;
        break;
      case '/':
        outPut = firstNum / secondNum;
        break;
      case '%':
        outPut = firstNum % secondNum;
        break;

      default:
        break;
    }

    setResult(result + ' = ' + outPut + '');

    return;
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={[styles.subcontainer, styles.subcontainer1]}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.item} onPress={() => setResult('')}>
            <Text>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous.slice(0, -1))}>
            <Text>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '%')}>
            <Text>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '/')}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '7')}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '8')}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '9')}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + 'x')}>
            <Text>x</Text>
          </TouchableOpacity>
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '4')}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '5')}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '6')}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '-')}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '1')}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '2')}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '3')}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '+')}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {/* Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.largeItem} onPress={() => setResult(previous => previous + '0')}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResult(previous => previous + '0')}>
            <Text>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={hanldeCalculate}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Topic2;
