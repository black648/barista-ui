import React, {useEffect, useRef, useState} from "react";

const JoinStep3 = (props) => {

    return (
        <>
            <div className="content">
                <div className="join_box">
                    <ul className="join_flow pB50 clearfix">
                        <li>
                            <p>개인정보<br/>이용동의</p>
                        </li>
                        <li>
                            <p>정보입력</p>
                        </li>
                        <li className="on">
                            <p>회원가입<br/>완료</p>
                        </li>
                    </ul>
                    <div className="join_area">
                        <p>환영합니다.</p>
                        <p><span className="f22 Bold">바리스타 검정원 홈페이지</span> 가입이 완료되었습니다.</p>

                        <div className="tC pT30">
                            <button className="btn btn_brown btn_login mR20">로그인</button>
                            <button className="btn btn_grey btn_home">메인페이지</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export {JoinStep3};