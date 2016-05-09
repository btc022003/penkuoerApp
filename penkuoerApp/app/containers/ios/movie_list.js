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
  Navigator,
  Image
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

    render(){  
      if(this.props.data.movies.length==0)
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
        title: '网盘电影',
      };

      return (
        <View  style={{ flex: 1, }}>
          <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig} />
          <ListView
            dataSource={this.dataSource.cloneWithRows(this.props.data.movies)}
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
       _actions.reset_current_movie()
       _navigator.push({
            title: item.title,
            component: BookDetail,
            passProps: item,
            data:_data,
            name:'MovieDetail'       
        });

    }
    return (
      <TouchableHighlight
        onPress={()=>onSelectItem(item)}
        underlayColor='#FFFFFF'>
        <View style={styles.pageContainer}>
                    <View style={[styles.container, styles.newsItemContainer]}>
                        <Image
                            source={{uri : item.pic}}
                            style={styles.newsPic} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            
                        </View>
                    </View>
                </View>
      </TouchableHighlight>
    );
  }    
}

const styles = StyleSheet.create({
  pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  rightContainer: {
        flex: 1,
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
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
  newsTitle : {
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
    },
    newsSummary : {
        color : '#bababa',
        fontSize : 14,
        textAlign : 'left',
    },
    newsPic : {
      width : 90,
        height : 60,
        margin: 10,
        marginLeft: 0,
    }
});
