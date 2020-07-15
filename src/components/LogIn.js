import React, { Component } from 'react';

class LogIn extends Component {
    
    render() {
        return (
        <section className = 'sections'>
            {/* <div className = 'login'>
                <form>
                        <label for="uname"><b>Username</b></label>
                        <br />
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <br />
                        <label for="psw"><b>Password</b></label>
                        <br/>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <br/>
                        <button type="submit">Login</button>
                        <button type="social-signin facebook">Log in with facebook</button>
                        <button type="social-signin twitter">Log in with Twitter</button>
                        <button type="social-signin google">Log in with Google+</button>
                </form>
            </div> */}


            <div class="body"></div>
                <div class="grad"></div>
                    <div class="login-header">
                        <div>infiniT<span>Nutrition</span></div>
                </div>
                <br/>
                <div class="login">
                        <input type="text" placeholder="username" name="user"/>
                        <br/>
                        <input type="password" placeholder="password" name="password"/>
                        <br/>
                        <input type="button" value="Login"/>
		</div>

            
    </section>

        );
    }
}

export default LogIn;