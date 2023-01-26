import React from "react";
import Validate from "./Validate";
import Login from "./Login.jpg";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import styled from "styled-components";

const Box = () => {
  return (
    <Grid>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ position: "relative", top: "1.5rem", left: "4rem" }}>
          Sign Up
        </h2>
        <Validate />
        <Link
          className="links"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   gap: "1.5rem",
          //   position: "absolute",
          //   bottom: "0rem",
          //   left: "5rem",
          // }}
        >
          <pre>&copy; designed by MUHAMMAD WALEED AHSAN</pre>
          <div
            className="icons"
            style={{ marginTop: "10px", display: "flex", gap: "1rem" }}
          >
            <a href="https://github.com/Waleed0260">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/waleed0260/">
              <BsLinkedin />
            </a>
            <a href="https://www.facebook.com/Waleed0260">
              <BsFacebook />
            </a>
            <ReactWhatsapp
              number="+923342987718"
              message="Hello World!!!"
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                marginTop: "-10px",
                color: "blue",
              }}
            >
              <BsWhatsapp />
            </ReactWhatsapp>
          </div>
        </Link>
      </div>
      <div className="image">
        <Img
          // style={{ height: "27rem", width: "34vw", marginTop: "20px" }}
          src={Login}
          alt=""
        />
      </div>
    </Grid>
  );
};

const Grid = styled.div`
  height: 32rem;
  width: 80vw;
  background-color: whitesmoke;
  filter: drop-shadow(0 0 0.75rem crimson);
  position: absolute;
  top: 4rem;
  left: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 960px) {
    left: 6rem;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 56rem;
    bottom: 2rem;
    justify-content: space-around;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    left: 2rem;
  }
  @media screen and (max-width: 400px) {
    width: 110vw;
    // left: 2rem;
  }
`;

const Img = styled.img`
height: 27rem; 
width: 34vw;
marginTop: 20px; 
@media screen and (max-width: 768px) {
  width: 55vw;
  margin-left: 8vw;
}
@media screen and (max-width: 480px) {
  width: 84vw;
  margin-left: 4vw;
}
`;


const Link = styled.div`
display: flex;
flexDirection: row;
gap: 1.5rem;
position: absolute;
bottom: 0rem;
left: 5rem;
@media screen and (max-width: 480px) {
  left: 1rem;
}
`


export default Box;
