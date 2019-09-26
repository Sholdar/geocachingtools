import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  navigate(path, param = {}) {
    const { navigation } = this.props;
    navigation.navigate(path, param);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Touchable
            onPress={this.navigate.bind(this, 'reverseWigScreen')}
          >
            <View
              style={{
                width: 30,
                height: 30,
                margin: 18,
                backgroundColor: 'green',
              }}
            />
          </Touchable>
          <Touchable
            onPress={this.navigate.bind(this, 'testScreen')}
          >
            <View
              style={{
                width: 30,
                height: 30,
                margin: 18,
                backgroundColor: 'blue',
              }}
            />
          </Touchable>

        </View>
      </SafeAreaView>
    )
  }
}
