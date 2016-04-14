/*****
* Created by yuluo on 16/04/14.
* 导航空间
* ****/

import React,{TabBarIOS,Component} from 'react-native';

export default class Nav extends Component{
	constructor(props, context) {
        super(props, context)
        const {dispatch,location} = this.props        
    }

    render(){
    	return(
    		<TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="电影">          
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="图书">          
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="儿童读物">          
        </TabBarIOS.Item>
         </TabBarIOS>
    		)
    }
}