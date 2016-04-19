/**
 * Created by yuluo on 16/04/14.
 * 图书详情
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as BookActions from '../../actions/books_action'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import HTMLView from '../../components/ios/HTMLView/HTMLView'

const _navigator = {}
const _current_item = {}
const _data = {}
const _actions = {}

class BookDetail extends Component{
	constructor(props, context) {
        super(props, context)  
        _navigator = props.navigator
        _current_item = props.passProps
        _data = props.data   


        

    }

    do_back(){
        console.log('do pop');
        _navigator.pop()
      }
    
    render(){
       const {dispatch,location} = this.props
       

       if(this.props.data.current_book.content == null){
        _actions = bindActionCreators(BookActions,dispatch) 
       }
        _actions.load_blog_detail(_current_item.id)  
       
    	
         if (!this.props.data.current_book) {
            return (
              <View>
                <TouchableHighlight
                  onPress={()=>this.do_back()}
                  underlayColor='#FFFFFF'>
                  <View>
                    <Text style={styles.btnBack}>返回</Text>
                    <Text>{_data.item.title}</Text>
                </View>
                </TouchableHighlight>
                <LoadingView />
              </View>
                
            );
        }

        return (
            <ScrollView style={styles.pageContainer}>
                <TouchableHighlight
                  onPress={()=>this.do_back()}
                  underlayColor='#FFFFFF'>
                  <View>
                    <Text style={styles.btnBack}>返回</Text>
                    <Text>{_current_item.title}</Text>
                  </View>
                </TouchableHighlight>
                <HTMLView value={this.props.data.current_book.content}></HTMLView>
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
        data : state.app.books
    }
}

export default connect(mapStateToProps)(BookDetail);