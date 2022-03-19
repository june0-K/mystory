import React from "react";
import './basicInfo.css';

function BasicInfo(){
    return(
        <div className="basicInfo">
            <div className="profile-box">
                <div className="profile-img-box">
                    <img className="profile-img" src="/profile.jpg" alt="증명사진" />
                </div>
                <div className="profile-info-box">
                    <p className="profile-name"><span className="profile-info-title cl-b">이름: </span>김준영&nbsp;&nbsp;(Jun-Yeong Kim)</p>
                    <div className="profile-info-area">
                        <p className="profile-info"><span className="profile-info-title cl-b">생년월일: </span>1992년 07월 16일</p>
                        <p className="profile-info"><span className="profile-info-title cl-b">주소: </span>서울시 서대문구 창천동</p>
                    </div>
                </div>
                <div className="wanna-do-box">
                    <p className="wanna-do"><span className="cl-b">희망 지원분야1: </span>프론트엔드 개발</p>
                    <p className="wanna-do"><span className="cl-b">희망 지원분야2: </span>DR(Developer Relations)</p>
                </div>
            </div>
            <div className="education-box">
                <h2 className="education-title title-g">/* 학력사항 */</h2>
                <table className="education-table">
                    <thead className="cl-b">
                        <tr>
                            <th>재학기간</th>
                            <th>학력사항</th>
                            <th>전공</th>
                            <th>학점</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11년 3월 ~ 19년 2월</td>
                            <td>한국외국어대학교</td>
                            <td>경영학전공(부 아랍어)</td>
                            <td>3.89</td>
                        </tr>
                        <tr>
                            <td>08년 3월 ~ 11년 2월</td>
                            <td>포항제철고등학교</td>
                            <td>문과</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="certificates-box">
                <h2 className="certificates-title title-g">/* 자격사항 */</h2>
                <table className="certificates-table">
                    <thead className="cl-b">
                        <tr>
                            <th>자격증/면허증</th>
                            <th>발행처/발행기관</th>
                            <th>취득일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>워드프로세서 1급</td>
                            <td>대한상공회의소</td>
                            <td>2002년</td>
                        </tr>
                        <tr>
                            <td>JLPT N3</td>
                            <td>일본 국제교육지원협회</td>
                            <td>2010년</td>
                        </tr>
                        <tr>
                            <td>1종보통 운전면허</td>
                            <td>경북 지방 경찰청</td>
                            <td>2011년</td>
                        </tr>
                        <tr>
                            <td>TOEIC 960</td>
                            <td>ETS</td>
                            <td>2019년</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="work-box">
                <h2 className="work-title title-g">/* 관련경험 및 주요활동 */</h2>
                <table className="work-table">
                    <thead className="cl-b">
                        <tr>
                            <th>기간</th>
                            <th>구분</th>
                            <th>기관 및 장소</th>
                            <th>상세 내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>21년 12월 ~ 22년 3월 (3개월)</td>
                            <td>교육</td>
                            <td>서울시, 엑스퍼트 컨설팅</td>
                            <td>프론트엔드 개발 및 PM관련 교육</td>
                        </tr>
                        <tr>
                            <td>20년 4월 ~ 21년 12월 (1년 8개월)</td>
                            <td>계약직(점장)</td>
                            <td>넥스트에디션 신촌</td>
                            <td>매장관리, 손님응대, 직원교육 등</td>
                        </tr>
                        <tr>
                            <td>17년 10월 ~ 20년 04월 (2년 7개월)</td>
                            <td>아르바이트</td>
                            <td>레이지 클라우드</td>
                            <td>음료제조, 보드게임 설명 등</td>
                        </tr>
                        <tr>
                            <td>15년 5월 ~ 15년 08월 (4개월)</td>
                            <td>보조강사</td>
                            <td>루체테 어학원</td>
                            <td>수업, 시험감독, 등하원지도 등</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BasicInfo;