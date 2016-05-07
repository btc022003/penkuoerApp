/**
 * Created by yuluo on 06/05/14.
 * movie详情
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MoviesActions from '../../actions/movies_action'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import HTMLView from 'react-native-htmlview'
import NavigationBar from 'react-native-navbar'
import Loading from './loading'
class MovieDetail extends Component{
	constructor(props, context) {
        super(props, context)  
        
        _navigator = props.navigator
        _current_item = props.passProps
        _data = props.data                          
    }
    componentDidMount(){
      _actions.load_movie_detail(_current_item.id)      
    }

    do_back(){
        console.log('do pop');
        _navigator.pop()
      }
    
    render(){
       const {dispatch,location,data} = this.props

       _actions = bindActionCreators(MoviesActions,dispatch) 
       
        const leftButtonConfig = {
          title: 'Back',
          handler: () => {_navigator.pop()}
        };

        const titleConfig = {
          title: _current_item.title==null?"详情":_current_item.title,
        }; 
       
    	
         if (!this.props.data) {
            return (
              <View>
                <NavigationBar
                  title={titleConfig}
                  leftButton={leftButtonConfig} />
                <Loading />
                <Text>111</Text>
              </View>
                
            );
        }

        return (
            <ScrollView style={styles.pageContainer}>                
                <NavigationBar
                  title={titleConfig}
                  leftButton={leftButtonConfig} />                
                <HTMLView value={this.props.data.content}></HTMLView>
            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
  pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
  btnBack:{
    flex: 1,
    textAlign:'right'
  },
  pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
})

function mapStateToProps(state){
    return{
        data : state.app.movies.current_movie
    }
}

export default connect(mapStateToProps)(MovieDetail);