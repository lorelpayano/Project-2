import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
          <section className = 'sections'>
              <body>

              <div class="container2">  
                <form id="contact">

                  <div className='contact-header'>
                  <h3>Contact Us!</h3>
                  <h4>Contact us today, and get a reply soon!</h4>
                  </div>

                  <fieldset className='contact-inputs'>
                    <input placeholder="First name" type="text" required autofocus></input>
                  </fieldset>
                  <fieldset className='contact-inputs'>
                    <input placeholder="Last name" type="text" required autofocus></input>
                  </fieldset>
                  <fieldset className='contact-inputs'>
                    <input placeholder="Your Email Address" type="text" required></input>
                  </fieldset>
                  <fieldset className='contact-inputs'>
                    <input placeholder="Your Phone Number" type="text" required></input>
                  </fieldset>
                  <fieldset className='contact-inputs'>
                    <textarea placeholder="Enter comments or concerns..."  required></textarea>
                  </fieldset>
                  <fieldset className='contact-inputs'>
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