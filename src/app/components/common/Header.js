import React, {useState} from 'react'
import LogOut from "./LogOut";
import TopMenu from "./TopMenu";
import logo from '../../images/header/logo.png';
import {TopMenuPortlet} from "../portlet/TopMenuPortlet";
import {TopMenuAllPortlet} from "../portlet/TopMenuAllPortlet";
function Header({ title, backFunc, params, noBackBtn }) {


    const [showMenu, setShowMenu] = useState(false);

    //메뉴 API호출
    const menus = TopMenu();
    const member = JSON.parse(sessionStorage.getItem("member"))
    // const logOut = logOutFunc(member.tokenKey);

        return (
            <>

                <header id="header">
                <h1 className="logo"><a href="/#/">
                    <img src={logo} alt="바리스타로고"/></a></h1>
                <nav id="gnb">
                    <div className="top_menu">
                        <ul>
                            {member !== null ? <li><a href="/#/mypage">내정보</a></li> : <li><a href="/#/login">로그인</a></li>}
                            {member !== null ? <LogOut tokenKey={member.tokenKey} />: <li><a href="/#/join">회원가입</a></li>}
                        </ul>
                    </div>
                    <div className="search_box">
                        <div className="search_bar">
                            <input type="text" title="검색어를 입력하세요." value="검색어를 입력하세요." className="intxt" id="search"/>
                            <label htmlFor="search" className="label_search"></label>
                        </div>
                    </div>
                    <ul className="menu">
                        <TopMenuPortlet menus = {menus}/>
                    </ul>
                </nav>
                    <TopMenuAllPortlet menus = {menus}/>
                </header>
            </>
        )
}
export default Header;