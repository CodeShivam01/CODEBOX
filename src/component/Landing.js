import React from "react";
// import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
// import Code from "../page/Code"
// import Epage from "../code-editor/Epage"

function Landing() {
  return (
    <>
      <div className="landing-container">
        <div className="landing-txt">
          <h1>
            {" "}
            The best place to build, test, and discover front - end code.{" "}
          </h1>{" "}
          <p>
            CodeBox is a social development environment for front - end
            designers and developers.Build a website, show off your work, build
            test cases to learn and debug, and find inspiration.{" "}
          </p>{" "}
          <Link className="editor-btn nav-link" to="/code">
            <span> StartCoding </span>{" "}
          </Link>{" "}
        </div>{" "}
        <div className="landing-code-container">
          <div className="l-bg-container"> </div>{" "}
          <div className="l-3-container">
            <div className="l-html code-container">
              <header>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                    fill="#4C4F5A"
                  ></path>{" "}
                </svg>{" "}
                <h1> HTML </h1>{" "}
                <svg
                  width="16"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                    fill="#4C4F5A"
                  ></path>{" "}
                </svg>{" "}
              </header>{" "}
              <div className="l-html-container code-padding">
                <code>
                  <span class="l-html-div"> &lt; div </span>{" "}
                  <span class="l-html-div"> class </span> <span>= </span>{" "}
                  <span class="HomepageAnonHeaderHero_cg-49xQf"> "rect" </span>{" "}
                  <span class="HomepageAnonHeaderHero_cr-aN2bn">
                    &gt; &lt; /div&gt;{" "}
                  </span>{" "}
                </code>{" "}
              </div>{" "}
            </div>
            <div className="l-css code-container">
              <header>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                    fill="#4C4F5A"
                  ></path>{" "}
                </svg>{" "}
                <h1> CSS </h1>{" "}
                <svg
                  width="16"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                    fill="#4C4F5A"
                  ></path>{" "}
                </svg>{" "}
              </header>{" "}
              <div className="l-css-container code-padding">
                <code>
                  {" "}
                  {
                    ".rect { background: linear-gradient(-119deg, $gray 0%, $dark-gray 100%); }"
                  }{" "}
                </code>{" "}
              </div>{" "}
            </div>
            <div className="l-js code-container">
              <header>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                    fill="#4C4F5A"
                  ></path>{" "}
                </svg>{" "}
                <h1> JS </h1>{" "}
                <svg
                  width="16"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                    fill="#4C4F5A"
                  ></path>{" "}
                </svg>{" "}
              </header>{" "}
              <div className="l-js-container code-padding">
                <code>
                  {" "}
                  {`var colors = 
                 ["#74B087","#DE7300","#74B087"];
                 
                 
                 function animate() {};`}{" "}
                </code>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Landing;
