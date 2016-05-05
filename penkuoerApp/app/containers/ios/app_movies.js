/**
 * Created by yuluo on 16/04/11.
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MoviesActions from '../../actions/movies_action'
import React, {
  Component
} from 'react-native';
import MovieList  from './movie_list'

class MoviesApp extends Component{
  
  constructor(props, context) {
      super(props, context)      
  }

  render() {
      const {dispatch,location,data} = this.props
      const actions = bindActionCreators(BooksActions,dispatch)
      return(
       <MovieList navigator={this.props.navigator} actions={actions} data={this.props.data}/>
       )
  }
}


function mapStateToProps(state){
    return{
        data : state.app.movies
    }
}

export default connect(mapStateToProps)(MoviesApp);
