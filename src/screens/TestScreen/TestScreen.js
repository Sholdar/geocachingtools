import React, { Component } from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import styles from './TestScreen.less';

export class TestScreen extends Component {
  constructor(props) {
    super(props); // Ignore props for now

    this.state={  //Define variables
      text: 'test text'
    }
  }

  goBack() {
    const { navigation } = this.props;
    navigation.pop();
  }

  textChange(input) {
    this.setState({
      text: input
    });
  }

  render() {
    const {text} = this.state;
    return (
      <SafeAreaView
        style={{    //One way to define style
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
            style={styles.reverse_container}  // Here you define style in the "styles"-document, that's CSS
          >
            <TextInput
              style={styles.text_input}
              onChangeText={this.textChange.bind(this)} // How to call functions with params
            />
            <Text
              style={styles.coordinate_text}
            >
              {text}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
