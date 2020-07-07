
import React from 'react';
import { Main } from './style';
import { AiOutlineGithub,AiFillLinkedin,AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <Main>
        <div className="max-container">
            <a href="https://github.com/CaioCFV" rel="noopener noreferrer" target="_blank">
                <AiOutlineGithub /> CaioCFV
            </a>
            <a href="https://www.linkedin.com/in/caiofvieira/" rel="noopener noreferrer" target="_blank">
                <AiFillLinkedin /> Caio Vieira
            </a>
            <a href="https://www.instagram.com/caiiuh/" rel="noopener noreferrer" target="_blank">
                <AiOutlineInstagram /> @caiiuh
            </a>
           
        </div>
      </Main>
    </>
  );
}




export default Footer;


