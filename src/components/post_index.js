import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetch_posts} from '../actions';
class PostIndex extends Component{
  componentDidMount(){
    this.props.fetch_posts();
  }
  renderPosts(){
    return _.map(this.props.posts,post=>{
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  render(){
    return(
      <div>
      <h3>Posts</h3>
      <ul className="list-group">
      {this.renderPosts()}
      </ul>
      </div>

)
  }
}
function mapStateToProps(state){
  return {posts:state.posts};
}
export default connect (mapStateToProps,{fetch_posts})(PostIndex);