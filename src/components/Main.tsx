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
            <p>Data Engineer</p>

            <div className="social_icons">
              <a href="https://github.com/ap001AP" target="_blank" rel="noreferrer">
                <GitHubIcon/>
              </a>
              <a href="https://media1.tenor.com/m/gu8O4jWASToAAAAd/caught-in8k-caught-in8k-meme.gif" target="_blank" rel="noreferrer">
                <LinkedInIcon/>
              </a>
            </div>
          </div>

          {/* Mobile Icons (keep this) */}
          <div className="mobile_social_icons">
            <a href="https://github.com/ap001AP" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://media1.tenor.com/m/gu8O4jWASToAAAAd/caught-in8k-caught-in8k-meme.gif" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;