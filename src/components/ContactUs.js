import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
          <section className = 'sections'>
              <body>

              <div class="container2">  
                <form id="contact">
                  <h3>Contact Us!</h3>
                  <h4>Contact us today, and get reply soon!</h4>
                  <fieldset>
                    <input placeholder="Your name" type="text" required autofocus></input>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Email Address" type="email" required></input>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Phone Number" type="tel" required></input>
                  </fieldset>
                  <fieldset>
                    <textarea placeholder="Enter comments or concerns..."  required></textarea>
                  </fieldset>
                  <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                  </fieldset>
                </form>
              
                
              </div>

              {/* <h1>The fieldset element</h1>

              <form>
                <legend>Information:</legend>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"></input><br/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"></input><br/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input><br/>
              </form> */}

              </body>
          </section>

        );
    }
}

export default ContactUs;