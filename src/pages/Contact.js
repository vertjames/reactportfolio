import React, { Component } from "react";
import "../components/assets/css/style.css"

class Contact extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="hero-text">
                <h1>Let's Chat, Bro</h1>
                <p>
                  <em>I want you to want me. I need you to need me. I'd love you to love me. I'm beggin' you to beg me. I'll shine up my old brown shoes. I'll put on a brand new shirt. I'll get home early from work if you say that you love me.</em>
                </p>
                <p>
                  Wait, that last part about work - that's not true. Because I am 100% dedicated to my work. So I want you to want me, but I will <em>not</em> get home early from work if there's a job to do.
                </p>
                <p>
                  If you're interested in discussing said work or anything else, get cozy with the buttons on this page.
                </p>
              </div>
            </div>

            <div className="col-md-6 hero-text align-self-center">
              <a href="tel:555-555-5555">
                <button type="button" className="btn btn-info btn-lg btn-block">Dial for Dollars</button>
              </a>  
              <br />
              <a href="mailto:rambo@stallone.com?subject=You%20Are%20So%20Incredibly%20Awesome&body=Dear%20Sir%20-%20Here%20is%20all%20the%20monies!">
                <button type="button" className="btn btn-info btn-lg btn-block">Email for... Emollars</button>
              </a> 
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
