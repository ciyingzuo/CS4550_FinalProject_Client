import React from 'react'
import UserServiceClient from "../../service/UserService.client";
import PostServiceClient from "../../service/PostService.client";
import GroupServiceClient from "../../service/GroupService.client";
import ConversationServiceClient from "../../service/ConversationService.client";

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.postService = PostServiceClient.instance;
        this.groupService = GroupServiceClient.instance;
        this.conversationService = ConversationServiceClient.instance;
        this.state = {
            username: "",
            password: "",
            valid_password: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            birthDate: "",
        }
    }

    register = () => {
        if (this.state.valid_password === this.state.password) {
            this.userService.register({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailAddress: this.state.emailAddress,
                phoneNumber: this.state.phoneNumber,
                registerDate: "",
                birthDate: this.state.birthDate,
                privacy: "Public"
            }).then(status => {
                if (status === 400) {
                    alert("Username already exist")
                } else {
                    window.location.href = 'mainPage';
                }
            })
        } else {
            alert("Please check your password")
        }
    };


    render() {
        return (<div className="container-fluid row">
            <div className="col-4"/>
            <div className="col-4">
                <h1>Register</h1>
                <div>
                    Username: <input className="form-control" type="text" placeholder="Username" onChange={(event) => {
                    this.setState({username: event.target.value})
                }}/>
                </div>
                <div>
                    Password: <input className="form-control" type="password" placeholder="Password"
                                     onChange={(event) => {
                                         this.setState({password: event.target.value})
                                     }}/>
                </div>
                <div>
                    Reenter Password:
                    <input className="form-control" type="password" placeholder="Reenter Password"
                           onChange={(event) => {
                               this.setState({valid_password: event.target.value})
                           }}/>
                </div>
                <div>
                    First Name:
                    <input className="form-control" type="text" placeholder="First Name" onChange={(event) => {
                        this.setState({firstName: event.target.value})
                    }}/>
                </div>
                <div>
                    Last Name:
                    <input className="form-control" type="text" placeholder="Last Name" onChange={(event) => {
                        this.setState({lastName: event.target.value})
                    }}/>
                </div>
                <div>
                    Email Address:
                    <input className="form-control" type="email" placeholder="Email Address" onChange={(event) => {
                        this.setState({emailAddress: event.target.value})
                    }}/>
                </div>
                <div>
                    Phone Number
                    <input className="form-control" type="tel" placeholder="(xxx)-xxx-xxxx" onChange={(event) => {
                        this.setState({phoneNumber: event.target.value})
                    }}/>
                </div>
                <div>
                    Birth Date:
                    <input className="form-control" type="date" onChange={(event) => {
                        this.setState({birthDate: event.target.value})
                    }}/>
                    <div>
                        <button className="btn btn-primary form-control" onClick={() => {
                            this.register()
                        }}>Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-4"/>
        </div>)
    }
}

export default RegisterPage;