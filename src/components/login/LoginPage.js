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
            username: "",
            password: ""
        }
    }


    login() {
        this.userService.login({username: this.state.username, password: this.state.password}).then(user => {
            window.location.href = 'MainPage/'+user._id;
        }, err => {
            alert("Incorrect username or password");
        });
    }

    toRegister() {
            window.location.href = 'Register';
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
                    <a style={{cursor: 'pointer'}} onClick={() => {this.toRegister()}}>Register</a>
                    {/*<button className="btn btn-primary form-control" onClick={() => {this.sm()}}>af</button>*/}
                    {/*<button className="btn btn-primary form-control" onClick={() => {this.register()}}>rp</button>*/}
                    {/*<button className="btn btn-primary form-control" onClick={() => {this.newPost()}}>np</button>*/}
                    {/*<div>or</div>*/}
                    {/*<button style={{background: 'purple', color: 'white'}} className="btn form-control"><i*/}
                        {/*className="fa fa-facebook-square"/> Login with Facebook*/}
                    {/*</button>*/}
                </div>
            </div>
            <div className="col-4"/>
        </div>)
    }
}

export default LoginPage;