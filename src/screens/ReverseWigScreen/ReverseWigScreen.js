import React, { Component } from 'react';
import { View, SafeAreaView, TextInput, Button, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { calculateCoords } from './reverseWigCalculator';
import styles from './reverseWigScreen.less';

const fields = [
  {
    code: 'firstCode',
  },
  {
    code: 'secondCode',
  },
  {
    code: 'thirdCode',
  },
];

export class ReverseWigScreen extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.calculate = this.calculate.bind(this);
    this.state={
      firstCode: '',
      secondCode: '',
      thirdCode: '',
    }
  }

  goBack() {
    const { navigation } = this.props;
    navigation.pop();
  }

  textChange(index, text) {
    this.setState({
      [fields[index].code]: text,
    })
  }

  calculate() {
    const { firstCode, secondCode, thirdCode } = this.state;

    for(let i = 0; i < fields.length; i += 1) {
      const field = fields[i];
      if (this.state[field.code].length !== 6) {
        return;
      }
    }

    const coords = calculateCoords(firstCode, secondCode, thirdCode);
    this.setState({
      coords,
    })
  }

  render() {
    const {coords} = this.state;
    return (
      <SafeAreaView
        style={styles.flex_fill}
      >
        <View
          style={styles.flex_fill}
        >
          <View
            style={styles.header}
          >
            <Touchable
              style={styles.header_back_button}
              onPress={this.goBack}
            >
              <Text>
                Back
              </Text>
            </Touchable>
          </View>
          <View
            style={styles.reverse_container}
          >
            {
              fields.map((field, index) => {
                return (
                  <TextInput
                    key={index}
                    maxLength={6}
                    keyboardType="phone-pad"
                    autoCorrect={false}
                    style={styles.text_input}
                    onChangeText={this.textChange.bind(this, index)}
                  />
                )
              })
            }
            <Touchable
              onPress={this.calculate}
              style={styles.calculate_button}
            >
              <Text
                style={styles.calculate_text}
              >
                Calculate
              </Text>
            </Touchable>
            {coords && coords.map((coord, index) => {
              return(
                <Text
                  key={index}
                  style={styles.coordinate_text}
                >
                  {coord}
                </Text>
              )
            })}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
