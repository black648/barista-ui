import React from 'react'
import TopMenu from "./TopMenu";
import logo from '../../images/header/logo.png';
function Header({ title, backFunc, params, noBackBtn }) {

    //메뉴 API호출
    const menus = TopMenu();

    const menuList = menus.map((data,i) =>
        <li key={i}><a href="#">{data.cdname}</a>
            <ul className="lnb">
                { data.codeList.map((lnb,j) =>
                    <li key={j}><a href="#">{lnb.cdname}</a></li>
                )}
            </ul>
        </li>
    );
    const menuAll = menus.map((data,i) =>
        <dl key={i}>
            <dt className="lnb">{data.cdname}</dt>
            { data.codeList.map((lnb,j) =>
                <dd key={j}><button to="#">{lnb.cdname}</button></dd>
            )}
        </dl>
    );

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
                        {menuList}
                        <li id="menu_all"><a href="#">메뉴 전체보기</a></li>
                    </ul>
                </nav>
                    <div className="menu_all">
                        <h4>사이트맵</h4>
                        {menuAll}
                    </div>
                </header>
            </>
        )
}
export default Header;