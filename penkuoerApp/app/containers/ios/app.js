/**
 * Created by yuluo on 16/04/11.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MovieActions from '../../actions/movies_action'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component{

  
  constructor(props, context) {
        super(props, context)
        const {dispatch,location} = this.props
  const actions = bindActionCreators(MovieActions,dispatch)


        if (this.props.data.movies.length == 0) {
            actions.load_movies_data()
        }
        else {
            console.log("数据已加载");
        }
    }

	render() {
  
    return (
      <View style={styles.container}>


        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        
        {this.props.movies.map(function (item) {
                    const str = "article_detail?id=" + item.id
                    return (
<Text style={styles.instructions}>
          {item.title}
        </Text>
                      )
                })}
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
