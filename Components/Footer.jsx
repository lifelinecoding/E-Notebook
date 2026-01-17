import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* App Info */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">E-Notebook</h5>
            <p className="text-light">
              E-Notebook is a secure and user-friendly note-taking application
              that helps users manage notes efficiently anytime, anywhere.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li className="text-light">Create Notes</li>
              <li className="text-light">Edit & Update Notes</li>
              <li className="text-light">Delete Notes</li>
              <li className="text-light">Secure Authentication</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/login" className="text-light text-decoration-none">
                  Login
                </a>
              </li>
              <li>
                <a href="/signup" className="text-light text-decoration-none">
                  Signup
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">Developer</h5>
            <p className="text-light mb-1">Aditya Patel</p>
            <p className="text-light mb-1">Full Stack Developer</p>
            <p className="text-light mb-0">
              <a
                href="https://github.com/lifelinecoding/"
                target="_blank"
                rel="noreferrer"
                className="text-light text-decoration-none"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="text-center text-light">
          <small>
            © {new Date().getFullYear()} E-Notebook | Built with ❤️ using MERN
            Stack
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
