import React from "react";
import logo from '../logo.svg';
import "./main.css";

function Main(){
    return(
        <div className="main">
            <header>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title">지속성장하는 개발자 김준영</h1>
            </header>
            <div className="wrap">
              <div className="explorer">
                  <dl className="table-of-contents">
                    <dt className="toc-title"><i class="fa-solid fa-angle-down"></i>목차</dt>
                    <dd className="toc-item"><i className="fa-solid fa-star"></i>들어가며</dd>
                    <dd className="toc-item"><i className="fa-solid fa-circle-info"></i>기본정보</dd>
                    <dd className="toc-item"><i className="fa-solid fa-road"></i>경력사항</dd>
                    <dd className="toc-item"><i className="fa-solid fa-code"></i>보유기술</dd>
                    <dd className="toc-item"><i className="fa-solid fa-lightbulb"></i>프로젝트</dd>
                  </dl>
              </div>
              <div className="component-box">
                  <ul className="navigation">
                      <li className="nav-item"><i className="fa-solid fa-star"></i>들어가며</li>
                      <li className="nav-item"><i className="fa-solid fa-circle-info"></i>기본정보</li>
                      <li className="nav-item"><i className="fa-solid fa-road"></i>경력사항</li>
                      <li className="nav-item"><i className="fa-solid fa-code"></i>보유기술</li>
                      <li className="nav-item"><i className="fa-solid fa-lightbulb"></i>프로젝트</li>
                  </ul>
                  <div className="component">컴포넌트 렌더 위치</div>
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