import emailjs from "emailjs-com";
import React from 'react';

export default function Order() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_g34fyem', e.target, 'user_hx6XjpzWaltesvlWTzf8T')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert("Your Message has been sent.")
    }

    return(
        <div>
            <h1 className="order-title">How to Order</h1>
            <div className="instructions">
                <p className="instructions-text">Fill out the form below with your contact information.  In the message box tell me what type of cake you are wanting, when you need it by, how big, what flavor, colors, the more
                     details the better!  I will reply to your email within 24 hours with a quote.
                </p>
            </div>
            <div className="form-container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="name-holder">
                            <input type="text" className="name-box" placeholder="First and Last Name" name="name"/>
                        </div>
                        <div className="email-holder">
                            <input type="email" className="email-box" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="msg-holder">
                            <textarea className="msg-box" id="" cols="30" rows="20" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="button-holder">
                            <input type="submit" className="send-button" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}