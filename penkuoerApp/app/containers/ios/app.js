/**
 * Created by yuluo on 16/04/11.
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as BooksActions from '../../actions/books_action'
import React, {
  Component
} from 'react-native';
import BookList  from './book_list'

class App extends Component{
  
  constructor(props, context) {
      super(props, context)      
  }

  render() {
      const {dispatch,location,data} = this.props
      const actions = bindActionCreators(BooksActions,dispatch)
      return(
       <BookList navigator={this.props.navigator} actions={actions} data={this.props.data}/>
       )
  }
}


function mapStateToProps(state){
    return{
        data : state.app.books
    }
}

export default connect(mapStateToProps)(App);

// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import * as MovieActions from '../../actions/movies_action'
// import React, {
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Loading  from './loading'
// import Nav from './nav'

// class App extends Component{

  
//   constructor(props, context) {
//         super(props, context)
//         const {dispatch,location} = this.props
//         const actions = bindActionCreators(MovieActions,dispatch)


//         if (this.props.data.movies.length == 0) {
//             actions.load_movies_data()
//         }
//         else {
//             console.log("数据已加载");
//         }
//     }

// 	render() {
//     if(this.props.data.movies.length==0)  //////没有加载数据之前显示loading
//     {
//       return(<Loading />)
//     }
//     else
//     {
//       return (
//       <View style={styles.container}>


//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
        
//         {this.props.data.movies.map(function (item) {
//                     const str = "article_detail?id=" + item.id
//                     return (
// <Text style={styles.instructions} key={item.id}>
//           {item.title}
//         </Text>
//                       )
//                 })}
//         <Nav />
//       </View>
//     )
//     }   
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// function mapStateToProps(state){
//     return{
//         data : state.app.movies
//     }
// }

// export default connect(mapStateToProps)(App);
