/**
 * Created by yuluo on 16/04/11.
 */
import React from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './store/configure_store'
import App from './containers/ios/app'
import Nav from './containers/ios/nav'
const store = configureStore();


class RootIos extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}

export default RootIos;