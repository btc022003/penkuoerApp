/**
 * Created by yuluo on 16/04/14.
 * 图书详情
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as BookActions from '../../actions/movies_action'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BookDetail extends Component{
	constructor(props, context) {
        super(props, context)
        const {dispatch,location} = this.props

        const actions = bindActionCreators(BookActions,dispatch)

    }


}