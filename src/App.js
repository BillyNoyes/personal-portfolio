import React, { useState } from "react";
import "./App.css";
import Header from "./Sections/Header/Header";
import Project from "./Sections/Project/Project";
import { Paper, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const handleSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme} className="app">
      <Paper elevation={0} style={{ height: "100%" }}>
        <div className="app__topBar">
          <h4>billynoyes</h4>
          <Switch
            checked={darkMode}
            onChange={handleSwitch}
            color="default"
            className="app__switch"
          />
        </div>
        <Header />
        <Project
          projectScreenshot="https://media.idownloadblog.com/wp-content/uploads/2016/07/macOS-Sierra-Picture-in-Picture-enable-on-YouTube-Mac-screenshot-001.jpg"
          projectName="Slack Clone"
          projectStack="React, MaterialUI, Firebase Firestore & Authentication"
          projectDescription="Clone of slack with a fully functioning real-time chat for each channel and login system implemented using the Firebase Authentication to give a user their own account to chat in each of the channels."
          projectLink="https://slack-clone-17944.web.app/"
        />
        <Project
          projectScreenshot="https://media.idownloadblog.com/wp-content/uploads/2016/07/macOS-Sierra-Picture-in-Picture-Vimeo-Mac-screenshot-001.jpg"
          projectName="Slack Clone"
          projectStack="React, MaterialUI, Firebase Firestore & Authentication"
          projectDescription="Clone of slack with a fully functioning real-time chat for each channel and login system implemented using the Firebase Authentication to give a user their own account to chat in each of the channels."
          projectLink="https://slack-clone-17944.web.app/"
        />

        <div className={`app__overlay ${darkMode ? "app__overlayDark" : ""}`}>
          <h2>
            <a href="mailto:wbillypn@gmail.com" target="_blank">
              wbillypn@gmail.com
            </a>{" "}
            ───{" "}
            <a href="http://instagram.com/billy.noyes" target="_blank">
              Instagram
            </a>{" "}
            ───{" "}
            <a href="https://github.com/BillyNoyes" target="_blank">
              GitHub
            </a>{" "}
            ───{" "}
            <a href="https://www.linkedin.com/in/billynoyes/" target="_blank">
              LinkedIn
            </a>
          </h2>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
