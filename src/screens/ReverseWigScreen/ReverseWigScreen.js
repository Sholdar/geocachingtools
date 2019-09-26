import React, { Component } from 'react';
import { View, SafeAreaView, TextInput, Button, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { calculateCoords } from './reverseWigCalculator';
import styles from './reverseWigScreen.less';

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
    switch (index) {
      case 1:
        this.setState({
          firstCode: text,
        });
        break;
      case 2:
        this.setState({
          secondCode: text,
        });
        break;
      case 3:
        this.setState({
          thirdCode: text,
        });
        break;
      default:
    }
  }

  calculate() {
    const { firstCode, secondCode, thirdCode } = this.state;
    if (firstCode.length !== 6 || secondCode.length !== 6 || thirdCode.length !== 6) {
      return;
    }
    const [latCoord, longCoord ] = calculateCoords(firstCode, secondCode, thirdCode);
    this.setState({
      latCoord,
      longCoord,
    })
  }

  render() {
    const {latCoord, longCoord} = this.state;
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              height: 56,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Touchable
              style={{
                height: 36,
                justifyContent: 'center',
                alignItems: 'center',
                width: 56,
              }}
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
            <TextInput
              maxLength={6}
              keyboardType="phone-pad"
              autoCorrect={false}
              style={styles.text_input}
              onChangeText={this.textChange.bind(this, 1)}
            />
            <TextInput
              maxLength={6}
              keyboardType="phone-pad"
              autoCorrect={false}
              style={styles.text_input}
              onChangeText={this.textChange.bind(this, 2)}
            />
            <TextInput
              maxLength={6}
              keyboardType="phone-pad"
              autoCorrect={false}
              style={styles.text_input}
              onChangeText={this.textChange.bind(this, 3)}
            />
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
            <Text
              style={styles.coordinate_text}
            >
              {latCoord}
            </Text>
            <Text
              style={styles.coordinate_text}
            >
              {longCoord}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
