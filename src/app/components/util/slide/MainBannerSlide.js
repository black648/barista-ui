import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "../../../css/slick.css"
import "../../../css/slick-theme.css"

import mbnr01 from '../../../images/main/mBnr_01.jpg';
import mbnr02 from '../../../images/main/mBnr_02.jpg';
import mbnr03 from '../../../images/main/mBnr_03.jpg';
import bnr_prev from '../../../images/ico/ico_prev3.png';
import bnr_next from '../../../images/ico/ico_next3.png';

export default function MainBannerSlide() {

    const data = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    }

    return (
        <div id="boxBanner">
            <Slider {...data}>
                <div className="bannerList">
                    <p>
                        <span className="tit">AAA</span>
                        <span className="sub">aaaa</span>
                     </p>
                    <img src={mbnr01} alt="배너1"/>
                </div>
                <div className="bannerList">
                    <p>
                        <span className="tit">BBB</span>
                        <span className="sub">bbbb</span>
                    </p>
                    <img src={mbnr02} alt="배너2"/>
                </div>
                <div className="bannerList">
                    <p>
                        <span className="tit">CCC</span>
                        <span className="sub">cccc</span>
                    </p>
                    <img src={mbnr03} alt="배너3"/>
                </div>
            </Slider>
        </div>
    );
}
