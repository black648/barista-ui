import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Layout from "../common/Layout";
import commonUtil from "../util/CommonUtil";
import connectUtil from "../util/ConnectUtil"

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    state = {
        title: "로그인",
        mberId : "",
        password : "",
        buttonChange : ""
    }

    setId = (e) => {
        this.setState({
            mberId: e.target.value
        });
    }

    setPassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    loginValidation = () => {
        if(this.state.mberId.length > 4 && this.state.password.length >3) {
            this.setState({

            })
        }

    }

    doLogin = () => {
        axios.post("http://localhost:8099/login/login", {
          mberId: this.state.mberId,
          password: this.state.password
        }).then(function (response) {
            if (response.data.resultData.member != null) {
                commonUtil.setLoginInfo(response.data.resultData.member);
                // eslint-disable-next-line no-restricted-globals
                history.back();
            }
        })
    }
    render() {
        return (
            <>
            <Layout header={{ title: "바리스타-로그인", noBackBtn:true}} footer loading>
                <div className="content">
                    <div className="login_box">
                        <h4>회원 로그인</h4>
                        <p style={{lineHeight: "1.4;"}}>
                            <span  className="Gold">바리스타 홈페이지에 오신 것을 환영합니다.</span>
                            <br/>로그인 하시면 회원님을 위한 더 많은 서비스를 경험하실 수 있습니다.
                            <br/>바리스타 회원이 되시면 자격증 조회 및 발급 서비스를 편리하게 이용하실 수 있습니다.
                        </p>
                        {/*<c:if test="${memberVO2 ne null }">*/}
                            <br /><p style={{lineHeight: "1.4;"}}><font color="#FF0000">{/*${mberName}*/}</font> 님의 아이디는 <br />
                            {/*<c:forEach items="${memberVO2 }" var="memberVO">*/}
                                <font color="#FF0000">{/*${memberVO.mber_id }*/}</font> <br />
                            {/*</c:forEach>*/}
                            입니다.</p>

                        {/*</c:if>*/}
                        {/*<form name="frm" action="/member/loginPost" method="post">*/}
                            <div className="box">
                                <dl>
                                    <dt>아이디</dt>
                                    <dd><input type="text" name="mberId" id="mberId" title="아이디" onChange={this.setId} /></dd>

                                    <dt className="clearfix" >비밀번호</dt>
                                    <dd><input type="password" name="password"  id="password" title="비밀번호" onChange={this.setPassword} /></dd>
                                </dl>

                                <button type="button" onClick={this.doLogin} className="btn btn_brown btn_login2" style={{borderRadius:"0", float:"right", width: "100px", height:"70px" }}>로그인</button>
                        {/*</form>*/}
                        <div className="mT20 mB10 f12 fL full">
                            <input  type="checkbox" name="useCookie" />
                            <label for="save">아이디 저장</label>
                            <button type="button" onclick="location.href='/member/idFind'" className="btn btn_grey fR mL10">아이디 찾기</button>
                            <button type="button" onclick="location.href='/member/pwFind'" className="btn btn_grey fR mL10">비밀번호 찾기</button>
                            <button type="button" onclick="location.href='/member/mberForm'" className="btn btn_brown2 fR">회원가입</button>
                        </div>

                        <ul className="clearfix f12">
                            <li>회원가입/로그인 문의 033)000-0000  [온라인 원격지원]</li>
                            <li>자격증안내 문의 033)000-0000</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Layout>
            </>
        );
    }
}
export default connectUtil(["member"])(withRouter(Login));
