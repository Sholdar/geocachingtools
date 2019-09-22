import React, { Component } from 'react';
import { View, SafeAreaView, TextInput, Button, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { calculateCoords } from './reverseWigCalculator';

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
    console.log(text, index)
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
    calculateCoords(firstCode, secondCode, thirdCode);
  }

  render() {
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
              backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button
              title="back"
              onPress={this.goBack.bind(this)}
            />
          </View>
          <View
            style={{
              padding: 16,
            }}
          >
            <TextInput
              maxLength={6}
              autoCorrect={false}
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
              }}
              onChangeText={this.textChange.bind(this, 1)}
            />
            <TextInput
              maxLength={6}
              autoCorrect={false}
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
              }}
              onChangeText={this.textChange.bind(this, 2)}
            />
            <TextInput
              maxLength={6}
              autoCorrect={false}
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
              }}
              onChangeText={this.textChange.bind(this, 3)}
            />
            <Touchable onPress={this.calculate} >
            <Text>asdf</Text>
            </Touchable>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
