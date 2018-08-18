import React from 'react'
import UserServiceClient from "../../service/UserService.client";
import PostServiceClient from "../../service/PostService.client";
import GroupServiceClient from "../../service/GroupService.client";
import ConversationServiceClient from "../../service/ConversationService.client";
import {geolocated} from 'react-geolocated';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance;
        this.groupService = GroupServiceClient.instance;
        this.conversationService = ConversationServiceClient.instance;
        this.state = {
            text: "",
            showReplyBox: false
        }
    }

    replyComponent() {
        if (this.state.showReplyBox) {
            this.setState({showReplyBox: true});
            this.props.replyPost(this.state.text, this.props.post._id)
        } else {
            this.setState({showReplyBox: true});
        }
    }

    showLocation() {
        if (this.props.post.location === "") {
            return null
        }
        return <div><img
            src={"https://maps.googleapis.com/maps/api/staticmap?&size=300x150&markers=color:blue%7Clabel:S%7C"
            + this.props.post.location + "&key=AIzaSyAk1ApFVFLEDVmVBHhBxuAY3lYKpTB7cpk"}
            alt="location"/></div>
    }

    textBox() {
        if (this.state.showReplyBox) {
            return <textarea onChange={(event) => {
                this.setState({text: event.target.value})
            }}/>
        }
    }

    render() {
        return (<div>
            {this.props.post.owner} said on {this.props.post.date}
            <br></br>
            {this.props.post.text}
            {this.showLocation}
            <br></br>
            {this.textBox}
            <br></br>
            <i className="far fa-thumbs-up"/> {this.props.post.like}
            <button onClick={this.replyComponent}>Reply</button>
            <br></br>
            {this.props.post.message.map((reply, replyIndex) => {
                    return <li>
                        {reply.from.username}: {reply.text}
                    </li>
                }
            )}
        </div>)
    }
}

export default PostList;