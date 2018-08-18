let _singleton = Symbol();

class UserServiceClient {

    HEROKU_URL = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/topic/';
    LOCAL_URL = 'http://localhost:8080/api/topic/';
    Topic_API_URL = this.HEROKU_URL;


    register(user) {
        return fetch("http://localhost:4550/user/createUser", {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.status;
        });
    }

    login(user) {
        return fetch("http://localhost:4550/user/login", {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    }

    logout() {
        return fetch("http://localhost:4550/user/logout", {
            credentials: 'include',
        });
    }

    updateUser(user) {
        return fetch("http://localhost:4550/user/updateUser", {
            method: 'put',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    }

    currentUser() {
        return fetch("http://localhost:4550/user/currentUser", {
            credentials: 'include'
        }).then(response => {
            return response.json();
        });
    }

    searchUser(username) {
        return fetch("http://localhost:4550/user/search/" + username, {
            credentials: 'include'
        }).then(response => {
            return response.json()
        })
    }

    changeRelationship(userID, type) {
        return fetch("http://localhost:4550/user/" + type + "/" + userID, {
            credentials: 'include'
        }).then(response => {
            return response.json();
        });
    }

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UserServiceClient(_singleton);
        return this[_singleton]
    }
}

export default UserServiceClient;