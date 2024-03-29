import connectUtil from "../util/ConnectUtil";
import commonUtil from "../util/CommonUtil";
import {Link, withRouter} from "react-router-dom";


function LogOut({tokenKey, history}) {

    const handleClick = () => {
        commonUtil.resetLoginInfo(tokenKey);
        sessionStorage.removeItem("member");
        history.push("/#/");

        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return <li><Link to="/" onClick={handleClick}>로그아웃</Link></li>;
}

export default connectUtil(["member"])(withRouter(LogOut));