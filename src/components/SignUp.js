import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <section className = 'sections'>
                <div className = "Signup">
                <form>
                         <label for="name"><b>Full Name</b></label>
                        <br />
                        <input type="text" placeholder="Enter your full name" name="Email" required/>
                        <br/>
                        <label for="Email"><b>Email</b></label>
                        <br />
                        <input type="text" placeholder="Enter Email" name="Email" required/>
                        <br />
                        <label for="psw"><b>Password</b></label>
                        <br />
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <br />
                        <label for="psw-repeat"><b>Confirm Password</b></label>
                        <br />
                        <input type="password" placeholder="Enter password again" name="cfrm-psw" required/>
                        <br />
                        <input type="checkbox" checked="checked" name="remember" required/>
                        <label>By creating an account you agree to our Terms & Privacy.</label>



                        <button type="submit">Sign up</button>
                </form>
                </div>
            </section>
        );
    }
}

export default SignUp;