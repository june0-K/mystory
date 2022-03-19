import React from "react";
import './skills.css';

function Skills(){
    return(
        <div className="skills">
            <h1 className="skills-title title-b">보유 기술 현황</h1>
            <table className="skills-table">
                <colgroup>
                    <col className="skills-table-col1"/>
                    <col className="skills-table-col2"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>가능 기술</th>
                        <th>세부 사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="cell-center" rowSpan="3">Programing<br/>&amp;<br/>Language</td>
                        <td>HTML &amp; CSS</td>
                        <td>
                            <p>기본 HTML 태그를 이용한 웹페이지 구성</p>
                            <p>테이블 태그를 이용한 표 작성</p>
                            <p>input, select 태그를 이용한 form 양식 작성</p>
                            <p>CSS 선택자를 이용한 스타일 부여</p>
                            <p>position, float, display 속성을 이용한 레이아웃 구성</p>
                            <p>transform, transition, animation을 이용한 개체 변형</p>
                            <p>CSS 단위와 @media 규칙을 이용한 반응형 웹 구성</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>
                            <p>var, let, const의 차이 이해</p>
                            <p>스트링, 숫자, 배열 등 자료 유형별 메서드 사용</p>
                            <p>if else문, switch문 삼항연산자 등을 이용한 조건문 사용</p>
                            <p>for문, for each문, while문 등을 이용한 반복문 사용</p>
                            <p>쿼리셀렉터를 이용한 HTLM DOM element 접근 및 메서드 사용</p>
                            <p>화살표 함수 등 함수 사용과 인수 기본값 설정</p>
                            <p>jQuery를 활용한 bx slider 등 플러그인 사용</p>
                        </td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>
                            <p>virtual DOM 및 컴포넌트 라이프사이클 이해</p>
                            <p>JSX 문법 사용</p>
                            <p>클래스형 및 함수형 컴포넌트 생성</p>
                            <p>props를 이용한 컴포넌트 간 데이터 전달</p>
                            <p>onClick, onChange 등 이벤트 핸들링 </p>
                            <p>useState, useRef, useEffect 등 Hooks 활용</p>
                            <p>react-router를 이용한 라우팅 관리</p>
                            <p>react-redux 를 이용한 상태 관리</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Tool</td>
                        <td>Github</td>
                        <td>
                            <p>기본적인 git 명령어 사용</p>
                            <p>Github와 remote branch 를 이용한 협업</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="3">Design<br/>&amp;<br/>Prototyping</td>
                        <td>Figma</td>
                        <td>
                            <p>Figma를 이용한 웹페이지 디자인 시안 제작 및 공유</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Zeplin</td>
                        <td>
                            <p>Zeplin을 이용해 asset 관리 및 웹페이지 디자인에 활용</p>
                        </td>
                    </tr>
                    <tr>
                        <td>카카오 오븐</td>
                        <td>
                            <p>카카오 오븐을 통해 링크 이동이 가능한 프로토타입 페이지 작성</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="4">OA</td>
                        <td>Microsoft Word</td>
                        <td rowSpan="4">
                            <p>Word/한글을 이용한 문서 작성, 단락 등 레이아웃 구성, 표 및 그래프 삽입 </p>
                            <p>Exel을 이용한 계산, 함수 및 필터 사용, 데이터 기록 및 정리 </p>
                            <p>Powerpoint를 이용한 프리젠테이션 기획 및 제작</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Microsoft Exel</td>
                    </tr>
                    <tr>
                        <td>Microsoft Powerpoint</td>
                    </tr>
                    <tr>
                        <td>한글</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Skills;