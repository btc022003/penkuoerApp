/**
 * Created by yuluo on 04/05/14.
 * 电影列表
 * 电影列表有图片资源需要显示
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MovieActions from '../../actions/movies_action'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Navigator
} from 'react-native';

import Loading from './loading'
import BookDetail from './book_detail'

import NavigationBar from 'react-native-navbar'

const _actions = {}
const _data = {}
const _navigator = {}

export default class MovieList extends Component{
	constructor(props, context) {
        super(props, context)  
        _navigator = this.props.navigator
        if(this.props.data.movies.length==0)
        {
          this.props.actions.load_more();
        }   
        _actions = this.props.actions
        _data = this.props.data
         this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    }

    
}