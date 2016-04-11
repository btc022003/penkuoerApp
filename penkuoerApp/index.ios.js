/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';

import Root from './app/root'

class penkuoerApp extends Component {
  render() {
    return (
      <Root />
    );
  }
}


AppRegistry.registerComponent('penkuoerApp', () => penkuoerApp);
