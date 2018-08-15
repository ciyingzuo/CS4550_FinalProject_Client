let _singleton = Symbol();

class ConversationServiceClient {

    HEROKU_URL = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/topic/';
    LOCAL_URL = 'http://localhost:8080/api/topic/';
    Topic_API_URL = this.HEROKU_URL;

    updateConversation(message, conversationID) {
        return fetch("http://localhost:4550/conversation/" + conversationID, {
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


    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ConversationServiceClient(_singleton);
        return this[_singleton]
    }
}

export default ConversationServiceClient;