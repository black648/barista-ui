import React from 'react'
import TopMenu from "./TopMenu";
import TopMenuAll from "./TopMenuAll";
import logo from '../../images/header/logo.png';
function Header({ title, backFunc, params, noBackBtn }) {
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
                    {<TopMenu/>}
                     {/*// 검색 영역 */}
                     {/*메뉴리스트 */}
                    {/*<jsp:include page="/common/topMenu"/>*/}
                      {/*//메뉴리스트 */}
                </nav>
                    {<TopMenuAll/>}
                </header>
            </>
        )
}
export default Header;