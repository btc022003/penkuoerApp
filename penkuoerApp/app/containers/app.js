/**
 * Created by yuluo on 16/04/11.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MovieActions from '../actions/movies'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component{
	render() {
  const {dispatch,location} = this.props
    const actions = bindActionCreators(MovieActions,dispatch)

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function mapStateToProps(state){
    return{
        data : state.app.movies
    }
}

export default connect(mapStateToProps)(App);
