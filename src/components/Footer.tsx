import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ap001AP" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://media1.tenor.com/m/gu8O4jWASToAAAAd/caught-in8k-caught-in8k-meme.gif" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;