import React from 'react'

class PrivateProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "ciyingzuo", birthday: "1996-10-22", firstName: "Yingzuo", registerDate: "1996-10-22",
                lastName: "Ci", country: "China", emailAddress: "huntercyz@outlook.com", phoneNumber: "123456789"
            },
            select: "Basic"
        }

    }

    mainProfile() {
        if (this.state.select === "Basic") {
            return (<ul class="list-group list-group-flush">
                <li class="list-group-item">
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
                <li class="list-group-item">
                    Birth Date: <input disabled value={this.state.user.birthday}/>
                </li>
            </ul>)
        } else if (this.state.select === "Security") {
            return (<ul class="list-group list-group-flush">
                <li className="list-group-item">
                    Register Date: <input disabled value={this.state.user.registerDate}/>
                </li>
                <li class="list-group-item">
                    Enter New Password: <input type="password" placeholder={"New Password"}/>
                </li>
                <li className="list-group-item">
                    Personal Profile Visibility: <select className="form-control">
                    <option value="Student"> Everyone</option>
                    <option value="Student"> Friends Only</option>
                    <option value="Student"> Private</option>
                </select>
                </li>
            </ul>)
        } else if (this.state.select === "Privacy") {
            return (<ul class="list-group list-group-flush">
                <li class="list-group-item">
                    Log Out
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
                    Friends and Groups
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
                    Friends and Groups
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
                    Friends and Groups
                </li>
            </div>)
        }
    }

    render() {
        return (<div class="container-fluid row">
            <div className="col-4">
                {this.profileMenu()}
                <br></br>
                <button className="btn btn-success form-control">
                    Save All Changes
                </button>
                <button className="btn btn-warning form-control">
                    Log Out
                </button>

            </div>
            <div class="col-8">
                {this.mainProfile()}
            </div>
        </div>)
    }
}


export default PrivateProfile;