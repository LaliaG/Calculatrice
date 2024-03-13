import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
// import CalculatorButton from './component/CalculatorButton';

const btnValues = [
  ['AC', '^', '%', "/"],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['.', '0', 'Del', '='],
];

const toLocaleString = num =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const removeSpaces = num => num.toString().replace(/\s/g, '');

const CalculatorButton = ({value, onPress}) => (
  <Pressable
    style={({pressed}) => [
      {
        backgroundColor: pressed ? '#ddd' : '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 5,
      },
    ]}
    onPress={onPress}>
    <Text>{value}</Text>
  </Pressable>
);

const App = () => {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  });

  const handleButtonClick = value => {
    if (value === 'AC') {
      setCalc({
        sign: '',
        num: 0,
        res: 0,
      });
    } else if (value === '^') {
      setCalc({...calc, num: Math.pow(Number(removeSpaces(calc.num)), 2)});
    } else if (value === 'Del') {
      setCalc({...calc, num: removeSpaces(calc.num).slice(0, -1)});
    } else if (value === '=') {
      setCalc({...calc, res: calculateResult()});
    } else {
      setCalc({
        ...calc,
        num: toLocaleString(Number(removeSpaces(calc.num + value))),
      });
    }
  };

  const calculateResult = () => {
    return eval(removeSpaces(calc.res + calc.sign + calc.num));
  };

  return (
    <View>
      <Text>{calc.num}</Text>

      {btnValues.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((buttonValue, colIndex) => (
            <CalculatorButton
              key={colIndex}
              value={buttonValue}
              onPress={() => handleButtonClick(buttonValue)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default App;
