/**
 * Created by yuluo on 16/04/14.
 * 图书列表
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
  ListView,
  Navigator
} from 'react-native';

import Loading from './loading'
import BookDetail from './book_detail'

import NavigationBar from 'react-native-navbar'

const _actions = {}
const _data = {}
const _navigator = {}

export default class BookList extends Component{
	constructor(props, context) {
        super(props, context)  
        _navigator = this.props.navigator
        if(this.props.data.books.length==0)
        {
          this.props.actions.load_more();
        }   
        _actions = this.props.actions
        _data = this.props.data
         this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    }

    render(){  
      if(this.props.data.books.length==0)
      {
          return(
            <Loading />
            )
      }   
      const rightButtonConfig = {
        title: 'Next',
        handler: () => alert('hello!'),
      };

      const titleConfig = {
        title: '儿童读物',
      }; 
      return (
        <View  style={{ flex: 1, }}>
          <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig} />
          <ListView
            dataSource={this.dataSource.cloneWithRows(this.props.data.books)}
            pageSize={10}
            renderRow={this.renderList}
            style={styles.listView}
            renderFooter={this.renderFooter}
            onEndReached={this.endReached}/>
          </View>
      )    	
    }


    /**
   * 滚动到底部的时候加载更多
   */
  endReached(){
    //this.fetchData(REQUEST_URL + this.state.pageOffset * 10);
    console.log('toend load more...');
     _actions.load_more(_data.page_data.current_page);
  }

  


  /**
   * 底部视图
   * @returns {XML}
   */
  renderFooter() {

    /**
     * 加载更多
     */
    let onLoadMore = function(){
      console.log('click load more...');
      _actions.load_more(_data.page_data.current_page);
    }
    return (
      <TouchableHighlight
        onPress={()=>onLoadMore()}
        underlayColor='#FFFFFF'>
        <View style={styles.containerFooter}>              
                <Text style={styles.loadeMoreBtn}>
                  点击加载更多...
                </Text>                
        </View>
      </TouchableHighlight>
    )
  }

 

  

  /**
   * 开始加载列表
   * @param post
   * @returns {XML}
   */
  renderList(item) {
     let onSelectItem= function(item){
       // console.log(item);
       // console.log(_navigator)
       _actions.reset_current_book()
       _navigator.push({
            title: item.title,
            component: BookDetail,
            passProps: item,
            data:_data,
            name:'BookDetail'       
        });

    }
    return (
      <TouchableHighlight
        onPress={()=>onSelectItem(item)}
        underlayColor='#FFFFFF'>
        <View style={styles.listRow}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textDesc}>{item.descriptions}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  listView: {
    paddingBottom: 20,
    marginTop:20
  },

  loadingText: {
    marginTop: 100,
    textAlign: 'center',
    flex: 1,
  },

  containerFooter: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
  },

  loadeMoreBtn: {
    textAlign: 'center',
    flex: 1,
    color: '#f34943',
    fontSize: 14,
    marginTop: 5,
  },

  listRow:{
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
  },
  textTitle: {
    flex: 1,
    marginTop:5,
    marginLeft:5,
    fontSize:16
  },
  textDesc: {
    flex: 1,
    marginTop:5,
    marginLeft:5,
    color:'#999999',
  },
});