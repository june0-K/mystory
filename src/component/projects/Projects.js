import React from "react";
import './projects.css';

function Projects(){
    return(
        <div className="projects">
            <h1 className="projects-title title-b">Digitalzone 설문조사 홈페이지 제작 (with React, 2021년 2월 21일 ~ 3월 24일)</h1>
            <h2 className="projects-url-title cl-g">// 시연용 테스트페이지 url: <a className="cl-o" href="https://digitalzone-v1.netlify.app/" target="blank">https://digitalzone-v1.netlify.app/</a></h2>
            <h2 className="projects-url-title cl-g">// 프로젝트 시연 발표 영상 url: <a className="cl-o" href="https://youtu.be/ng75iVqbAqw" target="blank">https://youtu.be/ng75iVqbAqw</a></h2>
            <p className="projects-des">
                <span>프로젝트 참가 계기:</span>새싹아카데미 프론트엔드 사관학교 교육과정 중 기업 연계형 프로젝트를 진행
            </p>
            <p className="projects-des">
                <span>프로젝트 주 내용:</span>전자문서 및 영상재생기기 제작 기업 '(주)디지털존'의 설문조사 의뢰용 웹페이지 제작(총 페이지 수 27개)
            </p>
            <p className="projects-des">
                <span>프로젝트 참가인원:</span>총 6명 (팀 리더 역할 수행)
            </p>
            <p className="projects-des">
                <span>맡은 역할 및 작업내용</span><br />
                - 클라이언트 전달용 웹페이지 디자인 시안 제작<br />
                - 웹페이지 제작 전 공통 클래스 및 네이밍 가이드 정리 작업<br />
                - React를 활용해 전체 57개 컴포넌트 중 10개 제작<br />
                - Github를 통한 개인 작업 branch들의 merge 작업 총괄, 세부 오류 수정<br />
                - netlify 서비스를 이용한 시험 사이트 배포<br />
                - 의뢰 기업 대상 시연 시 발표 담당 (기업 실무자들 참관)
            </p>
            <p className="projects-des">
                <span>프로젝트를 진행하며 배운 점 및 성장 포인트</span><br />
                - 협업시에는 공통클래스와 네이밍가이드 등을 확실히 정해야 중복작업 및 CSS 오류를 최소화 할 수 있다.<br />
                - React에서 기능별 컴포넌트 나누기, useState/useRef/useEffect 등 Hooks 사용이 능숙해졌다.<br />
                - React-router를 이용해 페이지를 라우팅 하는 법을 숙달하고 Route 와 Link 에 props 전달하는 법을 배웠다.<br />
                - Github를 이용해 각자의 branch를 생성하고 작업물을 push/pull 하는 과정을 통해 협업을 경험할 수 있었다.<br />
                - 조장으로서 역할을 분배하고 마감을 독려하며 회의를 주관하는 등 리더십과 의사소통 역량을 길렀다.<br />
                - Figma, 카카오 오븐, netlify 등의 서비스를 이용해 클라이언트와 정보를 교환하고 피드백을 받는 경험을 했다.<br />
                - 코로나 상황으로 인한 잦은 비대면 회의로 Zoom 사용이 익숙해졌다.
            </p>
        </div>
    );
};

export default Projects;