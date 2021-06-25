import React, {useState} from 'react'
import TopMenu from "./TopMenu";
import logo from '../../images/header/logo.png';
import {TopMenuPortlet} from "../portlet/TopMenuPortlet";
import {TopMenuAllPortlet} from "../portlet/TopMenuAllPortlet";
function Header({ title, backFunc, params, noBackBtn }) {


    const [showMenu, setShowMenu] = useState(false);

    //메뉴 API호출
    const menus = TopMenu();
    console.log(menus);

        return (
            <>

                <header id="header">
                <h1 className="logo"><a href="/main/main">
                    <img src={logo} alt="바리스타로고"/></a></h1>
                <nav id="gnb">
                    <div className="top_menu">
                        <ul>
                            {/*<c:choose>*/}
                            {/*    <c:when test="${login eq null }">*/}
                                    <li><a href="/member/login">로그인</a></li>
                                    <li><a href="/member/mberAgree">회원가입</a></li>
                                {/*</c:when>*/}
                                {/*<c:otherwise>*/}
                                {/*    <li><a href="/member/mypage">내정보</a></li>*/}
                                {/*    <li><a href="/member/logout">로그아웃</a></li>*/}
                                {/*</c:otherwise>*/}
                            {/*</c:choose>*/}
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
                    <div className="menu_all">
                        <h4>사이트맵</h4>
                        <TopMenuAllPortlet menus = {menus}/>
                    </div>
                </header>
            </>
        )
}
export default Header;