import React from 'react'
import UserServiceClient from "../../service/UserService.client";
import PostServiceClient from "../../service/PostService.client";
import GroupServiceClient from "../../service/GroupService.client";
import ConversationServiceClient from "../../service/ConversationService.client";
import {geolocated} from 'react-geolocated';

class PostBox extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance;
        this.groupService = GroupServiceClient.instance;
        this.conversationService = ConversationServiceClient.instance;
        this.state = {
            location: "",
            text: ""
        }
    }

    getPosition(boolean) {
        if (boolean) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.receivePosition);
            } else {
                alert("You browser doesn't support this feature");
            }
        } else {
            this.setState({location: ""})
        }

    }

    receivePosition(position) {
        const latlon = position.coords.latitude + "," + position.coords.longitude;
        this.setState({location: latlon});
        return <img
            src={"https://maps.googleapis.com/maps/api/staticmap?&size=300x150&markers=color:blue%7Clabel:S%7C" + latlon + "&key=AIzaSyAk1ApFVFLEDVmVBHhBxuAY3lYKpTB7cpk"}
            alt="location"/>;
    }

    render() {
        return (<div>
            <textarea placeholder="Say Something..." onChange={(event) => {
                this.state.text = event.target.value
            }}/>
            <br></br>
            <button className="btn btn-primary" onClick={(event) => {
                this.props.sendPost(event, this.state.text, this.state.location)
            }}>Post
            </button>
            <input type='checkbox' onChange={(event) => {
                this.getPosition(this.state.text = event.target.value)
            }}/> Show My Position
        </div>)
    }
}

export default PostBox;