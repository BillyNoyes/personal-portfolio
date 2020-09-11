import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <img
            src="https://avatars0.githubusercontent.com/u/13952236?s=460&u=7b8dad7c7aeaa3e53906646dd47ee66b95e489ac&v=4"
            alt="billy noyes"
          />
        </div>
        <div className="header__right">
          <h3>
            <span role="img" aria-labelledby="hand wave">
              👋🏻
            </span>{" "}
            Open to new projects
          </h3>
          <h1 className="noselect">
            BILLY
            <br />
            NOYES
          </h1>
          <p>
            is a front-end web designer with an understanding of UX design.
            <br />
            Eager to learn new skills and continue becoming a better designer{" "}
            <br />
            and programmer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
