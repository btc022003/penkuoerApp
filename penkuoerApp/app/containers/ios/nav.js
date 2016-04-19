/*****
* Created by yuluo on 16/04/14.
* 导航空间
* ****/

import React,{TabBarIOS,Component,Navigator,TabBarItemIOS,StyleSheet} from 'react-native';

import App  from './app'
import BookDetail from './book_detail'
import Loading from './loading'
export default class Nav extends Component{
	constructor(props, context) {
        super(props, context)
        const {dispatch,location} = this.props   

        this.state = {selectedTab:'blueTab'}
        // this.setState({selectedTab:'blueTab'})
        console.log(this.state)
    }
    
    configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(router, navigator){
      var Component = null;
      this._navigator = navigator;
      //console.log('do nav bd '+router.name);
      switch(router.name){
        case "App":
          Component = App;
          break;

        case "BookDetail":
            console.log(this)
            Component = BookDetail;
            break;

        case "pan_movie":
          //Component = FeedView;
          break;
        default: //default view
          Component = App;

      }
      // const {dispatch,location} = router.props

      return <Component navigator={navigator} passProps={router.passProps} data={router.data}/>
    }

    render(){
    	return(
    		<Navigator
                initialRoute={{name: 'App'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />)              
    }
}
const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});