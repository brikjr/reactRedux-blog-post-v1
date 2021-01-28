import React from 'react'
import AddPosts from './AddPosts'
import PostsList from './PostsList'

const Homepage = () => {
    return (
        <div>
            <AddPosts />
            <PostsList />
        </div>
    )
}

export default Homepage