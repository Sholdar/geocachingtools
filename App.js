/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { MainNavigator } from './Routes';


const AppContainer =  createAppContainer(MainNavigator);
//export default from './storybook';
// export default App;
export default AppContainer;
