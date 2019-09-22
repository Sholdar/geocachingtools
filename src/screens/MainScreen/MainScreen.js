import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    const { navigation } = this.props;
    navigation.navigate('reverseWigScreen');
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
            onPress={this.navigate}
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

        </View>
      </SafeAreaView>
    )
  }
}
