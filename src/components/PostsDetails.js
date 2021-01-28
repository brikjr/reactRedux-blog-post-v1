import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostsDetails extends Component {
    render() {
        const {post} = this.props

        return (
            <div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.content}</p>
                        </div>
                        <div className="card-action">
                            <button onClick={() => this.props.deletePosts(post.id)} className="btn red">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deletePosts: (id) =>{
            dispatch({type: 'DELETE_POSTS', id})
        }
    }
}

export default connect(null,mapDispatchToProps)(PostsDetails)
