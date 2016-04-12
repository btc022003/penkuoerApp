/**
 * Created by yuluo on 16/04/11.
 */
import React from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './store/configure_store'
import App from './containers/ios/app'
const store = configureStore();
class RootIos extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default RootIos;