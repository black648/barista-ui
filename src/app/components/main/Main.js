import React from 'react'
import Layout from "../common/Layout"

import mbnr01 from '../../images/main/mBnr_01.jpg';
import mbnr02 from '../../images/main/mBnr_02.jpg';
import mbnr03 from '../../images/main/mBnr_03.jpg';

import bnr_prev from '../../images/ico/ico_prev3.png';
import bnr_next from '../../images/ico/ico_next3.png';

import bnr_prev2 from '../../images/ico/ico_prev2.png';
import bnr_next2 from '../../images/ico/ico_next2.png';

import banner1 from '../../images/main/banner1.jpg';
import banner2 from '../../images/main/banner2.jpg';
import {BoardPortlet} from "../portlet/BoardPortlet";


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        title : "바리스타"
    }

    render() {
        const {menu, userInfo} = this.props
        const {title} = this.state
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const [loading, setLoading] = useState(false);
        console.log("메인이당");
        return(
            <>
                <Layout header={{ title: "바리스타-메인", noBackBtn:true}} footer loading>
                    {/*메인슬라이스*/}
                    <div id="boxBanner">
                        <p>&nbsp;</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <p>
                                        <span className="tit">AAA</span>
                                        <span className="sub">aaaa</span>
                                    </p>
                                    <img src={mbnr01} alt="배너1"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>
                                        <span className="tit">BBB</span>
                                        <span className="sub">bbbb</span>
                                    </p>
                                    <img src={mbnr02} alt="배너2"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>
                                        <span className="tit">CCC</span>
                                        <span className="sub">cccc</span>
                                    </p>
                                    <img src={mbnr03} alt="배너3"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>
                                        <span className="tit">DDD</span>
                                        <span className="sub">dddd</span>
                                    </p>
                                    <img src={mbnr03} alt="배너4"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*//메인슬라이드*/}
                    {/*mainCont*/}
                    <div className="mainCont">
                        {/*BOX01 */}
                        <div className="m_box">
                            {/*공지사항*/}
                            <div className="notice">
                                <div className="m_tit">
                                    <h4>공지사항</h4>
                                    <p className="bg"></p>
                                </div>

                                <BoardPortlet instanceId ={"2"} order = {'registde|desc'} />
                            </div>
                            {/*//공지사항 end*/}
                            {/*바로가기*/}
                            <div className="news_bnr">
                                <div className="bnr_list">
                                    <ul>
                                        <li className="li_01"><a href="#">이력서 등록</a></li>
                                        <li className="li_02"><a href="#">일자리 현황</a></li>
                                        <li className="li_03"><a href="#">교육신청/조회</a></li>
                                        <li className="li_04"><a href="#">시험접수/조회</a></li>
                                        <li className="li_05"><a href="#">합격자 조회</a></li>
                                        <li className="li_06"><a href="#">자격증 발급</a></li>
                                    </ul>
                                </div>
                                <div className="btn">
                                    <a href="#link" className="bnr_prev"><img src={bnr_prev2} alt="이전 목록" /></a>
                                    <a href="#link" className="bnr_next"><img src={bnr_next2} alt="다음 목록" /></a>
                                </div>
                                <script type="text/javascript">
                                    bnr_ac();
                                </script>
                            </div>
                             {/*// 바로가기 */}
                        </div>
                         {/*// BOX01 */}
                         {/*BOX02 */}
                        <div className="m_box">
                             {/*알림마당 */}
                            <div className="notice">
                                <div className="m_tit">
                                    <h4>알림마당</h4>
                                    <p className="bg"></p>
                                </div>
                                <BoardPortlet instanceId ={"1"} order = {'registde|desc'} />
                            </div>
                             {/*// 알림마당 */}
                             {/*배너 */}
                            <div className="news_bnr2">
                                <div className="bnr_list2">
                                    <ul>
                                        <li><a href="#"><img src={banner1} alt="배너1" /></a></li>
                                        <li><a href="#"><img src={banner2} alt="배너2" /></a></li>
                                    </ul>
                                </div>
                                <div className="btn">
                                    <a href="#link" className="bnr_prev2"><img src={bnr_prev} alt="이전 배너" /></a>
                                    <a href="#link" className="bnr_next2"><img src={bnr_next} alt="다음 배너" /></a>
                                </div>
                                <script type="text/javascript">
                                    bnr_ac2();
                                </script>
                            </div>
                             {/*// 배너 */}
                        </div>
                         {/*// BOX02 */}
                         {/*시험일정 */}
                        <div className="m_box">
                            <div className="calendar">
                                <h4>시험일정</h4>
                                <p className="bg"></p>
                                <p>바리스타 시험 일정을 한눈에 알아보세요!</p>
                                <div id="date">
        {/*                            <DatePicker
                                        locale="ko" // 달력 한글화
                                        selected={startDate} // 날짜
                                        state onChange={setStartDate} // 날짜 설정 콜백 함수
                                        customInput={<ExampleCustomInput />}
                                        minDate={new Date()} // 과거 날짜 disable
                                        popperModifiers={{ // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                                        preventOverflow: { enabled: true, }, }}
                                        popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
                                        // 토요일, 일요일 색깔 바꾸기 위함
                                        dayClassName={date =>
                                            getDayName(createDate(date)) === '토' ? "saturday" : getDayName(createDate(date)) === '일' ? "sunday" : undefined }
                                    />*/}

                                </div>
                               {/* <script type="text/javascript">
                                    $('#date').datepicker({
                                    inline:true,
                                    showOtherMonths:true,
                                    showOtherMonthAfterYear:true,
                                    monthNames:['01','02','03','04','05','06','07','08','09','10','11','12'],
                                    dayNamesMin:['일','월','화','수','목','금','토']
                                });
                                </script>*/}

                            </div>
                        </div>
                         {/*// 시험일정 */}
                    </div>
                     {/*// mainCont */}
                </Layout>
            </>
        )
    }
}
export default Main;
