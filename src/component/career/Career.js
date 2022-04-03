import React, { useRef } from "react";
import './career.css';

function Career(){
    const plus = useRef();
    const detailTable = useRef();
    const detailTableToggle = () => {
        plus.current.classList.toggle("fa-plus");
        plus.current.classList.toggle("fa-minus");
        detailTable.current.classList.toggle("show");
    }

    return(
        <div className="career">
            <div className="career-education-box">
                <h1 className="career-education-title title-b">
                    프론트엔드 개발 관련 교육: 새싹아카데미 프론트엔드 사관학교 (21년 12월 ~ 22년 3월, 3개월)
                </h1>
                <p className="career-education-des">
                    기업연계형 퍼블리싱/프론트엔드 실무 프로젝트 과정
                </p>
                <p className="career-education-des">
                    HTML, CSS, 자바스크립트, 제이쿼리, 리액트 기본기와 git을 다루는 법을 배웠고,<br />
                    이를 바탕으로 기업과 연계하여 설문조사용 홈페이지를 만드는 실무 프로젝트를 진행하였습니다.
                </p>
                <h2 className="car-edu-detail-title cl-g" onClick={detailTableToggle}>// 커리큘럼 상세보기<i className="fa-solid fa-plus" ref={plus}></i></h2>
                <div className="car-edu-detail-tableBox" ref={detailTable}>
                    <table className="car-edu-detail-table cl-o">
                        <thead>
                            <tr>
                                <th>HTML &amp; CSS</th>
                                <th>Javascript</th>
                                <th>React</th>
                                <th>취업 &amp; 비즈니스</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. 웹표준과 웹접근성 &amp; 기본HTML</td>
                                <td>1. Javascript 기초문법 &amp; 제어문 함수</td>
                                <td>1. React 셋팅 &amp; state</td>
                                <td>1. 취업컨설팅</td>
                            </tr>
                            <tr>
                                <td>2. CSS 기초문법 &amp; 선택자</td>
                                <td>2. jQuery 사용</td>
                                <td>2. React Component, map, props</td>
                                <td>2. 비즈니스 매너</td>
                            </tr>
                            <tr>
                                <td>3. CSS 상속, 단위</td>
                                <td>3. ES6 + 기초문법</td>
                                <td>3. React 활용</td>
                                <td>3. 비즈니스 커뮤니케이션</td>
                            </tr>
                            <tr>
                                <td>4. CSS Display 속성</td>
                                <td>4. Carousel slider</td>
                                <td>4. Component화 &amp; URL 파라미터</td>
                                <td>4. 프로젝트 매니지먼트</td>
                            </tr>
                            <tr>
                                <td>5. CSS Layout float &amp; float clear</td>
                                <td>5. scroll &amp; tab</td>
                                <td>5. SASS</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>6. CSS Layout position</td>
                                <td>6. form &amp; 정렬</td>
                                <td>6. Component 중첩</td>
                                <td id="headCell">CBP 프로젝트</td>
                            </tr>
                            <tr>
                                <td>7. HTML CSS 페이지 구현</td>
                                <td>7. Ajax</td>
                                <td>7. Github 개념 &amp; 사용</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>8. HTML Form 양식 &amp; 구현</td>
                                <td>8. 종합 활용</td>
                                <td>8. GIT 배포, React 응용</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9. HTML CSS 템플릿 관리</td>
                                <td></td>
                                <td>9. 성능개선</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10. CSS 새로운 단위</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>11. CSS Flex</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>12. CSS Responsive</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="car-edu-video cl-g"><a href="https://youtu.be/aDqF1PXLlUs" target="blank">교육과정 중 촬영한 1분 자기소개 영상</a></div>
                <div className="car-edu-video cl-g"><a href="https://programs.sbs.co.kr/sbsbiz/pickuptrend/clip/70410/22000443671" target="blank">SBS 트렌드 스페셜 교육과정 소개 영상(짧은 제 인터뷰도 포함되어 있습니다.)</a></div>
            </div>
            <div className="career-work-box">
                <h1 className="car-wor-title title-b">소통의 경력: 방탈출카페 점장, 보드게임카페직원, 어학원 보조강사 (총 4년 7개월)</h1>
                <p className="car-wor-des">
                    프론트엔드 개발은 소통이 중요한 직무라고 생각합니다.<br />
                    고객과의 소통을 통해 불만사항, 개선사항들을 지속적으로 반영하는 것은 물론,<br />
                    기업 내의 다른 비개발직군 실무자들과도 비전공자의 눈높이에서 의사소통할 수 있는 능력이 필수적입니다.<br />
                    저는 개발자가 되기 이전에도 이러한 의사소통 능력을 기를 수 있는 업무를 줄곧 해 왔습니다.
                </p>
                <p className="car-wor-des">
                    어학원 보조강사로 있을 때는 학생들이 쉽게 연관성을 파악할 수 있도록<br />
                    어근과 접두사, 접미사를 이용하여 단어를 외우는 방식을 가르쳐 주기도 했고,<br />
                    보드게임 카페에서는 손님들의 인원수나 보드게임 경험도에 따라 알맞은 보드게임을 추천하여<br />
                    체계적이고 이해하기 쉽게 설명하는 일도 했습니다.<br />
                    또한 방탈출 카페 점장으로 일할 때는 입장 전 규칙 설명은 물론, <br />
                    체험 후에도 궁금한 부분이 없도록 친절하게 문제와 스토리 해설을 진행하여 여러 단골을 만들기도 했습니다.
                </p>
                <p className="car-wor-des">
                    이렇게 쌓아온 의사소통의 경험을 바탕으로 고객과 기업사이,<br />
                    나아가서 일반 대중과 개발자들 사이의 다리와 같은 역할을 하고 싶습니다.
                </p>
            </div>
        </div>
    );
};

export default Career;