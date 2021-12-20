

export default {
    setLoginInfo : function (memberInfo) {
        console.log(JSON.stringify(memberInfo));
        sessionStorage.setItem(
            "member", JSON.stringify(memberInfo)
        );
    }
}