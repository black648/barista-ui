import connectUtil from "../util/ConnectUtil";
import commonUtil from "../util/CommonUtil";
import {withRouter} from "react-router-dom";


function LogOut({tokenKey, history}) {

    const handleClick = () => {
        commonUtil.resetLoginInfo(tokenKey);
        history.push("/#/");

        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return <li><a href="#" onClick={handleClick}>로그아웃</a></li>;
}

export default connectUtil(["member"])(withRouter(LogOut));