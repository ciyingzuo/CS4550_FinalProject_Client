import React from 'react'
import {Router, Route, hashHistory} from 'react-router';
import UserServiceClient from "../../service/UserService.client";
import PostServiceClient from "../../service/PostService.client";
import GroupServiceClient from "../../service/GroupService.client";
import ConversationServiceClient from "../../service/ConversationService.client";
import PostBox from "./PostBox";
import PostList from "./PostList";

class PostComponent extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance;
        this.groupService = GroupServiceClient.instance;
        this.conversationService = ConversationServiceClient.instance;
        this.sendPost= this.sendPost.bind(this);
        this.state = {
            post: [{
                _id: "",
                owner: {
                    username: String
                },
                location: String,
                text: String,
                date: Date,
                like: Number,
                message: [{
                    text: String,
                    from: {username: String}
                }],
            }],
            location: ""
        }
    }

    componentDidMount() {
        if(this.props.user._id)
        this.postService.findPostForUser(this.props.user._id).then(post => {
            this.setState({post: post})
        })
    }
    componentWillReceiveProps(newProps) {
        if(newProps.user._id)
        this.postService.findPostForUser(newProps.user._id).then(post => {
            this.setState({post: post})
        })
    }

    sendPost(event, text, location) {
        this.postService.createPost({text: text, location: location, owner: {}, message: []}).then(post => {
            this.setState({post: post})
        })
    }

    replyPost(text, postID) {
        this.postService.updatePost({
            text: text,
            type: "reply"
        }, postID).then(this.postService().findPostForUser(this.props.user._id)
            .then(post => this.setState({post: post})))
    }

    render() {
        return (<div>
            <PostBox
                sendPost={this.sendPost}/>
            <br></br>
            Recent Post
            {/*<br></br>*/}
            {/*{this.state.post.map((post, postIndex) => {*/}
            {/*return <PostList key={post._id}*/}
            {/*replyPost={this.replyPost}/>*/}
            {/*})}*/}
        </div>)
    }
}

export default PostComponent;