import React, { useRef, useState } from "react";
import logo from '../logo.svg';
import BasicInfo from "./basicInfo/BasicInfo";
import Career from "./career/Career";
import Intro from "./intro/Intro";
import "./main.css";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function Main(){
    const [menu,setMenu] = useState("intro")
    const toc = useRef();
    const arrow = useRef();
    const tocToggle = () => {
        arrow.current.classList.toggle("fa-angle-down")
        arrow.current.classList.toggle("fa-angle-right")
        toc.current.classList.toggle("slide");
    }

    return(
        <div className="main">
            <header>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="main-title">지속성장하는 개발자 김준영</h1>
            </header>
            <div className="wrap">
              <div className="explorer">
                  <div className="toc-title" onClick={tocToggle}><i className="fa-solid fa-angle-down" ref={arrow}></i>목차</div>
                  <ul className="table-of-contents" ref={toc}>
                    <li className={ menu === "intro" ? "toc-item on" : "toc-item" } onClick={e => setMenu("intro")} ><i className="fa-solid fa-star"></i>들어가며</li>
                    <li className={ menu === "info" ? "toc-item on" : "toc-item" } onClick={e => setMenu("info")}><i className="fa-solid fa-circle-info"></i>기본정보</li>
                    <li className={ menu === "career" ? "toc-item on" : "toc-item" } onClick={e => setMenu("career")}><i className="fa-solid fa-road"></i>경력사항</li>
                    <li className={ menu === "skills" ? "toc-item on" : "toc-item" } onClick={e => setMenu("skills")}><i className="fa-solid fa-code"></i>보유기술</li>
                    <li className={ menu === "projects" ? "toc-item on" : "toc-item" } onClick={e => setMenu("projects")}><i className="fa-solid fa-lightbulb"></i>프로젝트</li>
                  </ul>
              </div>
              <div className="component-box">
                  <ul className="navigation">
                      <li className={ menu === "intro" ? "nav-item on" : "nav-item" } onClick={e => setMenu("intro")}><i className="fa-solid fa-star"></i>들어가며</li>
                      <li className={ menu === "info" ? "nav-item on" : "nav-item" } onClick={e => setMenu("info")}><i className="fa-solid fa-circle-info"></i>기본정보</li>
                      <li className={ menu === "career" ? "nav-item on" : "nav-item" } onClick={e => setMenu("career")}><i className="fa-solid fa-road"></i>경력사항</li>
                      <li className={ menu === "skills" ? "nav-item on" : "nav-item" } onClick={e => setMenu("skills")}><i className="fa-solid fa-code"></i>보유기술</li>
                      <li className={ menu === "projects" ? "nav-item on" : "nav-item" } onClick={e => setMenu("projects")}><i className="fa-solid fa-lightbulb"></i>프로젝트</li>
                  </ul>
                  <div className="component">
                      { menu === "intro" ? <Intro /> : null }
                      { menu === "info" ? <BasicInfo /> : null }
                      { menu === "career" ? <Career /> : null }
                      { menu === "skills" ? <Skills /> : null }
                      { menu === "projects" ? <Projects /> : null }
                      {/* <Route exact path="/" component={Intro} />
                      <Route path="/basicinfo" component={BasicInfo} />
                      <Route path="/career" component={Career} />
                      <Route path="/skills" component={Skills} />
                      <Route path="/projects" component={Projects} /> */}
                  </div>
                  <footer>
                      <p className="contact-info">
                          최종업데이트일 : 2022-03-18
                      </p>
                      <p className="contact-info">
                          <span>[email]</span> ts1revan@naver.com
                      </p>
                      <p className="contact-info">
                          <span>[tel]</span> 010-3923-2357
                      </p>
                  </footer>
              </div>
            </div>
        </div>
    );
};

export default Main;