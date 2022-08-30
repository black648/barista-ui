import axios from "axios";

export default {
    //로그인 처리
    setLoginInfo : function (memberInfo) {
        console.log(JSON.stringify(memberInfo));
        sessionStorage.setItem(
            "member", JSON.stringify(memberInfo)
        );
    },

    //로그아웃 처리
    resetLoginInfo : async function (tokenKey) {
        // axios.defaults.headers.common['X-AUTH-TOKEN'] = `${sessionStorage.getItem("tokenKey")}`
        await axios.post("http://localhost:8099/login/logout", {}, {headers: {"X-AUTH-TOKEN": tokenKey}
        }).then(function (response) {})
    },

    setLinkState : function (state) {
        if (typeof (state) === "string") {
            state = JSON.parse(state);
        }
        return state;
    }

}