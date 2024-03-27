import React from "react";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Marquee.css";
import { Container } from "../Container/Container.styled";

function MarqueeComponent() {
  return (
    <Container className="main-marquee-container">
      <div className="shadow-container">
        <div className="shadow"></div>
      </div>
      <Marquee
        direction="left"
        className="marquee-container"
      >
        <div className="icon-container">
          <i className="icon devicon-react-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-nextjs-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-nextjs-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-typescript-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-python-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-rust-original"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-figma-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-javascript-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-java-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-html5-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-css3-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-angular-plain-wordmark"></i>
        </div>
      </Marquee>
      <Marquee
        direction="right"
        className="marquee-container"
      >
        <div className="icon-container">
          <i className="icon devicon-react-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-nextjs-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-javascript-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-java-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-html5-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-nextjs-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-typescript-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-python-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-rust-original"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-figma-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-nextjs-original-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-javascript-plain"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-java-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-html5-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-css3-plain-wordmark"></i>
        </div>
        <div className="icon-container">
          <i className="icon devicon-angular-plain-wordmark"></i>
        </div>
      </Marquee>
    </Container>
  );
}

export default MarqueeComponent;
