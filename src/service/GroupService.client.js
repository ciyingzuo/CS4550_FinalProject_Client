let _singleton = Symbol();

class GroupServiceClient {

    HEROKU_URL = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/topic/';
    LOCAL_URL = 'http://localhost:8080/api/topic/';
    Topic_API_URL = this.HEROKU_URL;


    createGroup(group) {
        return fetch("http://localhost:4550/group", {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(group),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    }

    joinGroup(groupID) {
        return fetch("http://localhost:4550/group/joinGroup/" + groupID, {
            credentials: 'include',
        }).then(response => {
            return response.json();
        });
    }

    leaveGroup(groupID) {
        return fetch("http://localhost:4550/group/leaveGroup/" + groupID, {
            credentials: 'include',
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
            this[_singleton] = new GroupServiceClient(_singleton);
        return this[_singleton]
    }
}

export default GroupServiceClient;