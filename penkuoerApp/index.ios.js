/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';

import RootIos from './app/root_ios'

class penkuoerApp extends Component {
  render() {
    return (
      <RootIos />
    );
  }
}


AppRegistry.registerComponent('penkuoerApp', () => penkuoerApp);
