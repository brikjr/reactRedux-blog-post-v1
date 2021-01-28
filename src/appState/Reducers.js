
const initialState = {
    posts: [
        {id: 1 , title: 'post one', content: 'this is post number 1 please take care of it'},
        {id: 2 , title: 'post two', content: 'this is post number 2 please take care of it'},
    ]
}

const reducers = (state = initialState, action) =>{
    switch (action.type){
        case 'DELETE_POSTS' : return {
            posts : state.posts.filter( post => post.id !== action.id) 
        }
        case 'ADD_POST': return{
           posts:  [action.post, ...state.posts]
        }
        default :
        return state 
    }
    
}

export default reducers