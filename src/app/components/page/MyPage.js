import React from "react";
import axios from "axios";
import Layout from "../common/Layout";
import Main from "./Main";

class MyPage extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        member:JSON.parse(sessionStorage.getItem("member"))
    }


    render() {
        return (
            <>
                <Layout header={{ title: "바리스타-내 정보", noBackBtn:true}} footer loading>
                    <div className="content">
                        <div className="clearfix">
                            <h4 className="bu05 tit pB10"><strong>{this.state.member.mberName}</strong>님 방문을 환영합니다. 가입하신 회원정보는 아래와
                                같습니다.</h4>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default MyPage;