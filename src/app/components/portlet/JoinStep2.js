import React, {useEffect, useRef, useState} from "react";

const JoinStep2 = (step) => {

    const onClick = () => {
        step(2)
    }

    return (
        <>
            <div className="content">
                <div className="join_box">
                    <ul className="join_flow pB50 clearfix">
                        <li>
                            <p>개인정보<br/>이용동의</p>
                        </li>
                        <li className="on">
                            <p>정보입력</p>
                        </li>
                        <li>
                            <p>회원가입<br/>완료</p>
                        </li>
                    </ul>
                    <h4 className="bu05 pB10">회원정보 입력</h4>
                    <p className="tR f12">(<span className="Orange Bold">*</span> 표시는 필수 입력사항입니다.)</p>
                    <table summary="아이디, 비밀번호, 이름, 이메일, 전화번호, 주소 항목으로 구성된 회원정보 입력표>입니다." className="tb02 mT10">
                        <caption>회원정보 입력표</caption>
                        <colgroup>
                            <col style={{width:"20%;"}}/>
                            <col style={{width:"80%;"}}/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th scope="row" className="must">아이디</th>
                            <td>
                                <input type="text"/>
                                <button className="btn btn_grey">ID 중복체크</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="must">비밀번호</th>
                            <td>
                                <input type="password"/>
                                영문자, 숫자를 포함하여 8-20글자를 입력해주세요.
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="must">비밀번호 확인</th>
                            <td>
                                <input type="password"/>
                                <span className="Orange">비밀번호가 일치하지 않습니다.</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="must">이름</th>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <th scope="row" className="must">이메일</th>
                            <td>
                                <input type="text" className="fL mR10"/>
                                @
                                <select title="직접선택">
                                    <option>daum.net</option>
                                </select>
                                <button className="btn btn_grey">E-mail 인증 </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="must">이메일 인증키</th>
                            <td><input type="text" className="full"/></td>
                        </tr>
                        <tr>
                            <th scope="row">전화번호</th>
                            <td>
                                <select title="010" className="half">
                                    <option>010</option>
                                </select>
                                -
                                <input type="text" className="half" />
                                -
                                <input type="text" className="half" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="2">주소</th>
                            <td className="noBorder" style={{paddingBottom:"0;"}}>
                                <input type="text"/>
                                <button className="btn btn_grey">우편번호 찾기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="상세주소를 입력하세요." className="full"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="tC pT30">
                        <button onClick={() => {onClick()}} className="btn btn_brown btn_check mR10">확인</button>
                        <button className="btn btn_grey btn_cancel">취소</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export {JoinStep2};