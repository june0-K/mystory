import React from "react";
import './intro.css';

function Intro(){
    return(
        <div className="intro">
            <h1 className="intro-title title-b">문제해결<i className="fa-solid fa-arrow-right-arrow-left"></i>학습<i className="fa-solid fa-equals"></i>성장</h1>
            <p className="intro-des">
                저에게 개발은 문제해결과 학습의 상호작용을 통한 성장의 과정입니다.
            </p>
            <p className="intro-des">
                주어진 문제를 해결하는 과정에서 여러 기능들간의 차이점, 새로운 접근법, 도구, 개발언어 등을 학습하게 되고,<br />
                이러한 학습을 바탕으로 더 정확하고 단순하며 효율적으로 문제를 해결할 수 있게되는 선순환이 발생합니다.
            </p>
            <p className="intro-des">
                이렇게 실질적인 문제를 해결하는 경험을 쌓고, 꾸준한 학습을 위해 노력하는 것은<br />
                개발자로서 지속 성장 할 수 있게 하는 큰 밑거름이 됩니다.
            </p>
            <p className="intro-des">
                저는 일생에 걸쳐 이러한 문제해결과 학습에 흥미와 관심을 지속해 왔습니다.<br />
                더 지니어스, 문제적 남자, 크라임씬, 대탈출 등 지적 유희와 추리등의 문제해결을 중심으로 하는 프로그램을 즐겨봐왔으며,<br />
                지니어스 게임 참여, 방탈출 및 크라임씬 카페 방문, 보드게임 동아리활동 등 다양한 문제해결 환경을 체험할 수 있는 취미를 즐기고 있습니다.<br />
                또한 일본어, 아랍어 등 외국어 학습, 피아노, 기타 등 악기 배우기 및 밴드활동 등 항상 새로운 것을 배우는 것에 목말라 있습니다.<br />
                현재 도전하고 있는 프론트엔드 개발 분야 또한 비전공자로서 아무런 배경지식 없이 공부를 시작했지만<br />
                지금껏 그래왔듯 빠른 습득력과 뛰어난 이해력을 바탕으로 또 하나의 기술을 갖추는 도전을 이어갈 것입니다. 
            </p>
            <p className="intro-des">
                모쪼록 이 웹페이지를 방문해 주신 여러분이 저의 이러한 성장을 함께 하는 동료가 되어주시기를 희망합니다.
            </p>
        </div>
    );
};

export default Intro;