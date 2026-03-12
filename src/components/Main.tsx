import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">

          <h1>Abhi Patel</h1>

          {/* NEW ROW */}
          <div className="title-row">
            <p>Building Data Pipelines & Lakehouses</p>

            <div className="social_icons">
              <a href="https://github.com/ap001AP" target="_blank" rel="noreferrer">
                <GitHubIcon/>
              </a>
              <a href="https://www.linkedin.com/in/ap-abhipatel/" target="_blank" rel="noreferrer">
                <LinkedInIcon/>
              </a>
            </div>
          </div>

          {/* Mobile Icons (keep this) */}
          <div className="mobile_social_icons">
            <a href="https://github.com/ap001AP" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/ap-abhipatel/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;