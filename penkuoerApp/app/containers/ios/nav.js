/*****
* Created by yuluo on 16/04/14.
* 导航空间
* ****/

import React,{TabBarIOS,Component,Navigator,Text,TabBarItemIOS,StyleSheet} from 'react-native';

import App  from './app'
import BookDetail from './book_detail'

import MoviesApp from './app_movies'
import Loading from './loading'
export default class Nav extends Component{
	constructor(props, context) {
        super(props, context)
        const {dispatch,location} = this.props   

        this.state = {selectedTab:1}
        // this.setState({selectedTab:'blueTab'})
        console.log(this.state)
    }
    
    configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(router, navigator){
      var Component = null;
      // this._navigator = navigator;
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
    configureSceneNavMovie(route){
      return Navigator.SceneConfigs.FadeAndroid;
    }

    renderSceneNavMovie(router, navigator){
      var Component = null;
      // this._navigator = navigator;
      //console.log('do nav bd '+router.name);
      switch(router.name){
        case "Movies":
          Component = MoviesApp;
          break;

        case "MovieDetail":
            console.log(this)
            Component = BookDetail;
            break;

        case "pan_movie":
          //Component = FeedView;
          break;
        default: //default view
          Component = MoviesApp;

      }
      // const {dispatch,location} = router.props

      return <Component navigator={navigator} passProps={router.passProps} data={router.data}/>
    }

    render(){
    	return(
    		
                <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
        systemIcon="bookmarks"
          title="Blue Tab" selected={this.state.selectedTab == '1'}

          onPress={() => {
            this.setState({
              selectedTab: 1,
            });
          }}

          >
          <Navigator
                initialRoute={{name: 'App'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />  
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab == '2'}
          onPress={() => {
            this.setState({
              selectedTab: 2,
            });
          }}
          >
           <Navigator
                initialRoute={{name: 'Movies'}}
                configureScene={this.configureSceneNavMovie}
                renderScene={this.renderSceneNavMovie} /> 
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon="featured"
        selected={this.state.selectedTab == '3'}
          onPress={() => {
            this.setState({
              selectedTab: 3,
            });
          }}
          >
          <Text>333</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );            
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