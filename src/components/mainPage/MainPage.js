import React from 'react'
import {Router, Route, hashHistory} from 'react-router';
import UserServiceClient from "../../service/UserService.client";
import PostServiceClient from "../../service/PostService.client";
import GroupServiceClient from "../../service/GroupService.client";
import ConversationServiceClient from "../../service/ConversationService.client";
import PostComponent from "./PostComponent";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance;
        this.groupService = GroupServiceClient.instance;
        this.conversationService = ConversationServiceClient.instance;
        this.state = {
            user: {_id: "", username: ""},
        }
    }

    componentDidMount() {
        this.userService.currentUser().then(user => {
            this.setState({user: user})
        });
    }


    ifLogin() {
        return <Route path="/MainPage/:userID" component={PostComponent}/>
    }

    render() {
        return (<div>
            {/*<Route path="/MainPage/:userID" component={PostComponent}/>*/}
            <PostComponent
                user={this.state.user}
            postService={this.postService}/>
        </div>)
    }
}

export default MainPage;