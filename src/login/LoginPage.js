import React from 'react'

class LoginPage extends React.Component {
    render() {
        return (<div class="container-fluid row">
            <div class="col-4"/>
            <div class="col-4">
                    <h1>Login</h1>
                    <input class="form-control" type="text" placeholder="Username"/>
                    <input class="form-control" type="text" placeholder="Password"/>
                    <div>
                        <button class="btn btn-primary form-control">Login</button>
                        <div>or</div>
                        <button style={{background: 'purple', color: 'white'}} class="btn form-control"><i
                            class="fa fa-facebook-square"/> Login with Facebook
                        </button>
                </div>
            </div>
            <div class="col-4"/>
        </div>)
    }
}

export default LoginPage;