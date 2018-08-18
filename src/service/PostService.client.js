let _singleton = Symbol();

class PostServiceClient {

    HEROKU_URL = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/topic/';
    LOCAL_URL = 'http://localhost:8080/api/topic/';
    Topic_API_URL = this.HEROKU_URL;


    createPost(post) {
        return fetch("http://localhost:4550/post/", {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(post),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    }

    updatePost(message, postID) {
        return fetch("http://localhost:4550/post/" + postID, {
            method: 'put',
            credentials: 'include',
            body: JSON.stringify(message),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    }

    findPostForUser(userID) {
        return fetch("http://localhost:4550/post/findPostForUser/" + userID, {
            credentials: 'include',
        }).then(response => {
            return response.json();
        }, err => {
            return null
        });
    }


    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new PostServiceClient(_singleton);
        return this[_singleton]
    }
}

export default PostServiceClient;