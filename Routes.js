import { createStackNavigator } from 'react-navigation';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { ReverseWigScreen } from './src/screens/ReverseWigScreen/ReverseWigScreen';

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

