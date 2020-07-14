import React, { Component } from 'react';

class LogIn extends Component {
    render() {
        return (
        <section className = 'sections'>
            <div className = 'Login'>
                <form>
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>

                        <button type="submit">Login</button>
                </form>
            </div>
        </section>

        );
    }
}

export default LogIn;