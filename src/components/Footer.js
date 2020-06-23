import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="sticky-footer" className="py-3 bg-light text-dark-50">
        <div className="container text-center">
          <small>&copy;2020 Me  •  <a href="https://github.com/vertjames" class="footerLink" target="_blank">GitHub</a>  •  <a href="https://www.linkedin.com/in/sylvester-stallone-3a9b7886" class="footerLink" target="_blank">LinkedIn</a>  •  <a href="resume" class="footerLink" target="_blank">Resume</a></small>
        </div>
      </footer>
    )
  }
}

export default Footer;
