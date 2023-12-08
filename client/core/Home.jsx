import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Styles from "../Styles";
import CardActions from "@material-ui/core/CardActions";
export default function Home() {
  return (
    <>
      <Styles />
      <main>
        <section id="intro">
          <div className="intro-text">
            <img
              src="./../assets/images/logo.png"
              alt="Filatino Logo"
              width="300px"
              height="300px"
            />
            <h1>Welcome to the Country Trivia Website!</h1>
            <p>To start you can Log In, Sign Up or Continue as guest!</p>
          </div>
          <div className="startoptions">
            <div className="startoptions-row">
              <Link to="/signin" className="flag-link">
                  <Button color="primary" variant="contained">
                  Sign In
                  </Button>
              </Link>
              <Link to="/signup">
                  <Button color="primary" variant="contained">
                  Sign Up
                  </Button>
              </Link>
            </div>
            <div className="startoptions-row">
              <Link to="/main">
                  <Button color="primary" variant="contained">
                    Continue as guest
                  </Button>
              </Link>
            </div>
            
            
          </div>
        </section>
      </main>
    </>
  );
}
