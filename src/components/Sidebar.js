import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faTrophy,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <Container className="hideshow">
      <LogoSection>
        <h1 className="logo">blueCube</h1>
      </LogoSection>
      <ListSection>
        <ul>
          <Link className="link">
            {" "}
            <FontAwesomeIcon icon={faHome} />
            {/* <img src={dashboard} alt="dash" /> */}
            <li>Home</li>
          </Link>

          <Link className="link">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            <li>Message</li>
          </Link>
          <Link className="link">
            {" "}
            <FontAwesomeIcon icon={faTrophy} />
            <li>Ranking</li>
          </Link>
          <Link className="link">
            {" "}
            {/* <img src={logout} alt="logout" /> <li>Logout</li> */}
            <FontAwesomeIcon icon={faTrophy} />
            <li>Challenge</li>
          </Link>
          <Link className="link">
            {" "}
            {/* <img src={logout} alt="logout" /> <li>Logout</li> */}
            <FontAwesomeIcon icon={faSmile} />
            <li>Party</li>
          </Link>
        </ul>
      </ListSection>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  width: 230px;
  background-color: #ffffff;
  position: fixed;
  z-index: 2;
`;

const LogoSection = styled.div`
  // background: #1e2a36;
  width: 230px;
  height: 70px;
  border-bottom-left-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: blue;
    font-weight: bold;
    margin-top: 40px;
  }
`;
const ListSection = styled.div`
  margin-top: 40px;
  ul {
    list-style-type: none;
    padding-inline-start: 20px !important;
  }
  .link {
    font-family: "Poppins", sans-serif;
    padding-left: 20px;
    font-size: 20px;
    padding-bottom: 50px !important;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: gray;
    /* opacity: 0.9; */
    &:hover {
      opacity: 1;
      color: blue;
    }
  }
  .options {
    .hide {
      display: none;
    }
    .show {
      display: flex;
      flex-direction: column;
      margin-top: -30px;
      padding-bottom: 10px;
      li {
        padding-bottom: 20px;
        cursor: pointer;

        &:hover {
          opacity: 0.5;
        }
      }
      .option {
        color: white;
        text-decoration: none;
      }
    }
  }
  li {
    color: white;
    letter-spacing: 0.4px;
    /* font-size: 14px; */
    font: normal normal normal 14px/16px Open Sans;
    letter-spacing: 0.4px;
    color: gray;
    // padding-left: 40px;
    padding: 25px;
    padding-right: 0px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    &:hover {
      opacity: 1;
      color: blue;
    }
  }
`;
