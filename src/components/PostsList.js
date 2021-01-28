import React, { Component } from "react";
import PostsDetails from "./PostsDetails";
import { connect } from "react-redux";
 

class PostsList extends Component {
 
  render() {
      const {posts} = this.props ;
      
    return (
      <div className="container" style={{ marginTop: "4rem" }}>
        <div className="row">
          {
              posts && posts.map( post => (
                  <PostsDetails post={post} key={post.id} />
               ) )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostsList);
