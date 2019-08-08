import { types } from './actions';

const initialState = {
    posts: []
}

export default (post = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_FETCHED_POSTS:
            return {
                ...post,
                posts: [...action.payload.posts],
            };
        default:
            return post;
    }
}