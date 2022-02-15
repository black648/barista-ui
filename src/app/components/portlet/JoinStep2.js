import React, {useEffect, useRef, useState} from "react";

const JoinStep2 = (step) => {
    const [checkList, setCheckList] = useState([false, false, false, false, false, false, false])
    const setValidation = (index, value) => {
        setCheckList((checks) => checks.map((c, i) => (i === index ? value == "" ? false : true : c)))
        console.log(...checkList)
    }
    const isAllChecked = checkList.every((x) => x)

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [phone3, setPhone3] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
        setValidation(0, event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
        setValidation(1, event.currentTarget.value);
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
        setValidation(2, event.currentTarget.value);
    }
    const onEmailDomainHandler = (event) => {
        setEmailDomain(event.currentTarget.value)
    }
    const onPhoneHandler = (event) => {
        setPhone1(event.currentTarget.value)
    }
    const onPhone2Handler = (event) => {
        setPhone2(event.currentTarget.value)
        setValidation(3, event.currentTarget.value);
    }
    const onPhone3Handler = (event) => {
        setPhone3(event.currentTarget.value)
        setValidation(4, event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
        setValidation(5, event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
        setValidation(6, event.currentTarget.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        step(2)
    }

    return (
        <>
            <h4 className="bu05 pB10">회원정보 입력</h4>
            <p className="tR f12">(<span className="Orange Bold">*</span> 표시는 필수 입력사항입니다.)</p>
            <table summary="아이디, 비밀번호, 이름, 이메일, 전화번호, 주소 항목으로 구성된 회원정보 입력표>입니다." className="tb02 mT10">
                <caption>회원정보 입력표</caption>
                <colgroup>
                    <col style={{width: "20%;"}}/>
                    <col style={{width: "80%;"}}/>
                </colgroup>
                <tbody>
                <tr>
                    <th scope="row" className="must">아이디</th>
                    <td>
                        <input type="text" name="id" value={id} onChange={onIdHandler} />
                        <button className="btn btn_grey">ID 중복체크</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="must">비밀번호</th>
                    <td>
                        <input type="password" name="password" value={password} onChange={onPasswordHandler} />
                        영문자, 숫자를 포함하여 8-20글자를 입력해주세요.
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="must">비밀번호 확인</th>
                    <td>
                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordHandler} />
                        {password != confirmPassword ? <span className="Orange">비밀번호가 일치하지 않습니다.</span> : ""}
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="must">이름</th>
                    <td><input type="text" name="name" value={name} onChange={onNameHandler} /></td>
                </tr>
                <tr>
                    <th scope="row" className="must">이메일</th>
                    <td>
                        <input type="text" className="fL mR10" name="email" value={email} onChange={onEmailHandler} />
                        @
                        <select title="직접선택" name="emailDomain" value={emailDomain} onChange={onEmailDomainHandler}>
                            <option>daum.net</option>
                        </select>
                        <button className="btn btn_grey">E-mail 인증</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">전화번호</th>
                    <td>
                        <select title="010" className="half" name="phone1" value={phone1} onChange={onPhoneHandler}>
                            <option>010</option>
                        </select>
                        -
                        <input type="text" className="half" name="phone2" value={phone2} onChange={onPhone2Handler}/>
                        -
                        <input type="text" className="half" name="phone3" value={phone3} onChange={onPhone3Handler}/>
                    </td>
                </tr>
                <tr>
                    <th scope="row" rowspan="2">주소</th>
                    <td className="noBorder" style={{paddingBottom: "0;"}}>
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
                <button disabled={!isAllChecked}
                    onClick={() => {
                        onSubmit()
                }} className={isAllChecked ? "btn btn_brown btn_check mR10" : "disabled"}>확인
                </button>
                <button className="btn btn_grey btn_cancel">취소</button>
            </div>
        </>
    );
};
export {JoinStep2};