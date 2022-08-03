import React from 'react'

import logo from '../../images/footer/logo.png';
import {Link} from "react-router-dom";

function Footer() {
        return (
             // footer
            <footer id={"footer"}>
                <div className="foot_warp">
                    <p className="logo"><Link to="/"><img src={logo} alt="바리스타 로고" /></Link></p>

                    <ul className="f_txt">
                        <li>26464 강원도 원주시 세계로 10</li>
                        <li>TEL : (033)-123-1234</li>
                        <li>사업자등록번호 : 000-00-00000</li>
                        <li>Copyright ⓒ 2021 by BARISTA. ALL RIGHT RESERVED.</li>
                    </ul>

                    <select title="관련사이트 선택">
                        <option>관련사이트1</option>
                        <option>관련사이트2</option>
                        <option>관련사이트3</option>
                        <option>관련사이트4</option>
                        <option>관련사이트5</option>
                    </select>
                </div>
            </footer>
             // footer 
             //     Top 버튼
             //    <a class="top" href="#">
             //        <div class="go_top">
             //            <span>^<br/>TOP</span>
             //        </div>
             //    </a>
        )
}
export default Footer;