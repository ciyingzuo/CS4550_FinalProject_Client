import React from 'react'
import UserServiceClient from "../../service/UserService.client";
import PostServiceClient from "../../service/PostService.client";
import GroupServiceClient from "../../service/GroupService.client";
import ConversationServiceClient from "../../service/ConversationService.client";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance
        this.groupService = GroupServiceClient.instance
        this.conversationService = ConversationServiceClient.instance
        this.state = {
            user: {
                username: "ciyingzuo", birthday: "1996-10-22", firstName: "Yingzuo", registerDate: "1996-10-22",
                lastName: "Ci", country: "China", emailAddress: "huntercyz@outlook.com", phoneNumber: "123456789"
            },
            username: "",
            password: ""
        }
    }

    sm = () => {
        this.conversationService.updateConversation(
            {date: "2018-5-8", text: "wow", type: "reply", from: "5b7487641980a43c80757335"} , "5b74b068c615dd3d38996f15"
        )
    }

    cg = () => {
        this.groupService.createGroup({
            name: "666",
        })
    }

    jg = () => {
        this.groupService.joinGroup("5b74b068c615dd3d38996f16")
    }

    register = () => {
        this.postService.updatePost(
            {date: "2018-5-8", text: "wow", type: "reply", from: "5b7487641980a43c80757335"}, "5b7493a62b37f03240874fc9"
        )
        // this.userService.register(
        //     {username: this.state.username, password: this.state.password}
        // )
    }

    testBlock = () => {
        this.userService.changeRelationship("5b7487641980a43c80757335", "addBlock")
        // this.userService.register(
        //     {username: this.state.username, password: this.state.password}
        // )
    }

    newPost = () => {
        this.postService.createPost(
            {date: "2018-5-8", text: "yeah", type: "post", from: "5b74875d1980a43c80757334"}
        )
        // this.userService.register(
        //     {username: this.state.username, password: this.state.password}
        // )
    }

    login() {
        this.userService.login({username: this.state.username, password: this.state.password});
    }

    render() {
        return (<div className="container-fluid row">
            <div className="col-4"/>
            <div className="col-4">
                <h1>Login</h1>
                <input className="form-control" type="text" placeholder="Username" onChange={(event) => {
                    this.setState({username: event.target.value})
                }}/>
                <input className="form-control" type="text" placeholder="Password" onChange={(event) => {
                    this.setState({password: event.target.value})
                }}/>
                <div>
                    <button className="btn btn-primary form-control" onClick={() => {this.login()}}>Login</button>
                    <button className="btn btn-primary form-control" onClick={() => {this.sm()}}>af</button>
                    <button className="btn btn-primary form-control" onClick={() => {this.register()}}>rp</button>
                    <button className="btn btn-primary form-control" onClick={() => {this.newPost()}}>np</button>
                    <div>or</div>
                    <button style={{background: 'purple', color: 'white'}} className="btn form-control"><i
                        className="fa fa-facebook-square"/> Login with Facebook
                    </button>
                </div>
            </div>
            <div className="col-4"/>
        </div>)
    }
}

export default LoginPage;