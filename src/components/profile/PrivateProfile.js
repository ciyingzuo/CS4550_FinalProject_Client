import React from 'react'
import UserServiceClient from "../../service/UserService.client";

class PrivateProfile extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserServiceClient.instance;
        this.state = {
            user: {
                username: String, firstName: "", registerDate: "",
                lastName: "", emailAddress: "", phoneNumber: "", privacy: "", birthDate: Date
            },
            select: "Basic"
        }

    }

    componentDidMount() {
        this.userService.currentUser().then(user => {
            this.setState({user: user})
        })
    }

    updateProfile() {
        this.userService.updateUser(this.user).then(status => {
            alert("Update Success")
        });
    }

    logout() {
        this.userService.logout().then(
            window.location.href = 'login'
        )
    }

    mainProfile() {
        if (this.state.select === "Basic") {
            return (<ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Username: <input disabled value={this.state.user.username}/>
                </li>
                <li className="list-group-item">
                    First Name: <input value={this.state.user.firstName}/>
                </li>
                <li className="list-group-item">
                    Last Name: <input value={this.state.user.lastName}/>
                </li>
                <li className="list-group-item">
                    Email Address: <input value={this.state.user.emailAddress}/>
                </li>
                <li className="list-group-item">
                    Phone Number: <input value={this.state.user.phoneNumber}/>
                </li>
                <li className="list-group-item">
                    Birth Date: <input disabled value={this.state.user.birthDate}/>
                </li>
            </ul>)
        } else if (this.state.select === "Security") {
            return (<ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Register Date: <input disabled value={this.state.user.registerDate}/>
                </li>
                <li className="list-group-item">
                    Enter New Password: <input type="password" placeholder={"New Password"}/>
                </li>
            </ul>)
        } else if (this.state.select === "Privacy") {
            return (<ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Personal Profile Visibility: <select className="form-control"
                                                         defaultValue={this.state.user.privacy}>
                    <option value="Public"> Public</option>
                    <option value="Private"> Private</option>
                </select>
                </li>
                <li className="list-group-item">
                    <button className="btn btn-danger">Delete All message</button>
                </li>
            </ul>)
        }
    }

    profileMenu() {
        if (this.state.select === "Basic") {
            return (<div>
                <li className="list-group-item active" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Basic"})
                }}>
                    Basic
                </li>
                <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Security"})
                }}>
                    Security
                </li>
                <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Privacy"})
                }}>
                    Privacy
                </li>
            </div>)
        } else if (this.state.select === "Security") {
            return (<div>
                <li className="list-group-item " style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Basic"})
                }}>
                    Basic
                </li>
                <li className="list-group-item active" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Security"})
                }}>
                    Security
                </li>
                <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Privacy"})
                }}>
                    Privacy
                </li>
            </div>)
        } else if (this.state.select === "Privacy") {
            return (<div>
                <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Basic"})
                }}>
                    Basic
                </li>
                <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Security"})
                }}>
                    Security
                </li>
                <li className="list-group-item active" style={{cursor: 'pointer'}} onClick={() => {
                    this.setState({select: "Privacy"})
                }}>
                    Privacy
                </li>
            </div>)
        }
    }

    render() {
        return (<div className="container-fluid row">
            <div className="col-4">
                {this.profileMenu()}
                <br></br>
                <button className="btn btn-success form-control" onClick={() => {
                    this.updateProfile()
                }}>
                    Save All Changes
                </button>
                <button className="btn btn-warning form-control" onClick={() => {
                    this.logout()
                }}>
                    Log Out
                </button>

            </div>
            <div className="col-8">
                {this.mainProfile()}
            </div>
        </div>)
    }
}


export default PrivateProfile;