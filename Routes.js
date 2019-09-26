import { createStackNavigator } from 'react-navigation';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { ReverseWigScreen } from './src/screens/ReverseWigScreen/ReverseWigScreen';
import { TestScreen } from './src/screens/TestScreen/TestScreen';

export const MainNavigator = createStackNavigator({
  App: createStackNavigator({
    screen: MainScreen,
    reverseWigStack: createStackNavigator({
      reverseWigScreen: ReverseWigScreen,
    }, {
      defaultNavigationOptions: {
        header: null,
      }
    }),
    testStack: createStackNavigator({
      testScreen: TestScreen,
    }, {
      defaultNavigationOptions: {
        header: null,
      }
    })
  }, {
    defaultNavigationOptions: {
      header: null,
    }
  })
}, {
  defaultNavigationOptions: {
    header: null,
  }
});

