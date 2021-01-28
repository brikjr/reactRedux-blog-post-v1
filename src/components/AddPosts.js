import React, { Component } from "react";
import {connect} from 'react-redux' ;

class AddPosts extends Component {
  state = {
    post :{
      id : Math.floor(Math.random()*20),
      title: '',
      content: ''
    }
  }
  handleChange = (e) =>{
    this.setState({
      post :{
        ...this.state.post,
        [e.target.name] : e.target.value 
      }
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault() ;
    this.props.addPost(this.state.post) ;
    this.setState({
      post: {
        title: "",
        content: ""
        
      }
    })

  }
  render() {
    return (
      <div className="container">
        <h4 className="blue-text center-align" style={ {margin: "3rem auto"} }>Blog Post</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="post-title">Title</label>
            <input type="text" name="title" value={this.state.post.title} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="post-content">Content</label>
            <textarea
              className="materialize-textarea"
              name="content"
              value={this.state.post.content}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
              <button className="btn blue">
                  Submit
                  <i className="material-icons right">send</i>
              </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToMaps = (dispatch) =>{
  return {
    addPost:  (post) =>{
      dispatch({type: 'ADD_POST', post})
    }
  }
}
export default connect(null,mapDispatchToMaps)(AddPosts);
