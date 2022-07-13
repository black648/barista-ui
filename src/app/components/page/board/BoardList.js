import React from "react";
import Layout from "../../common/Layout";

import bnr_prev from '../../../images/ico/ico_prev3.png';
import bnr_next from '../../../images/ico/ico_next3.png';

import bnr_prev2 from '../../../images/ico/ico_prev2.png';
import bnr_next2 from '../../../images/ico/ico_next2.png';
import {BoardListFunc} from "../../function/board/BoardListFunc";

class BoardList extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        instanceId: new URLSearchParams(this.props.location.search).get('instanceId'),
        pageSize: "30",
        order: "0|registDe",
        member:JSON.parse(sessionStorage.getItem("member"))
    }

    // componentWillMount() {
    //     console.log("alsdfhalsdf")
    //     this.boardListApi()
    // }
    //
    // boardListApi = () => {
    //     this.setState({
    //             result: BoardListApi(this.state)
    //         }
    //     )
    //     console.log(this.state.result)
    // }





    render() {
        return (
            <>
                <Layout header={{ title: "바리스타-내 정보", noBackBtn:true}} footer loading>
                    <div className="content">
                        <div className="content-search">
                            <div className="search_wrap clearfix">
                                <select title="검색 분류">
                                    <option>분류1</option>
                                    <option>분류2</option>
                                    <option>분류3</option>
                                    <option>분류4</option>
                                </select>
                                <input type="text" placeholder="검색어를 입력해주세요." title="검색어입력" />
                                <button type="button" className="btn-search">검색</button>
                            </div>

                            <p className="fR">전체 : <span className="Gold bold">00</span>건</p>
                        </div>
                        <table summary="번호, 구분, 제목, 등록자, 등록일, 조회수 항목으로 구성된 접수확인 안내표입니다." className="tb01 mT40">
                            <caption>접수확인 안내표</caption>
                            <colgroup>
                                <col style={{width:"7%"}} />
                                <col style={{width:"10%"}} />
                                <col style={{width:"56%"}} />
                                <col style={{width:"10%"}} />
                                <col style={{width:"10%"}} />
                                <col style={{width:"7%"}} />
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">구분</th>
                                <th scope="col">제목</th>
                                <th scope="col">등록자</th>
                                <th scope="col">등록일</th>
                                <th scope="col">조회수</th>
                            </tr>
                            </thead>
                            <BoardListFunc instanceId = {this.state.instanceId}
                                           pageSize = {this.state.pageSize}
                                           order = {this.state.order} />
                        </table>
                        <div className="paging_area">
                            <div className="paging">
                                <a href="#" className="prev"><img src={bnr_prev2} alt="맨 처음 페이지 이동"/></a>
                                <a href="#" className="prev"><img src={bnr_prev} alt="이전 페이지 이동"/></a>
                                <a href="#" className="num">1</a>
                                <a href="#" className="num on">2</a>
                                <a href="#" className="num">3</a>
                                <a href="#" className="num">4</a>
                                <a href="#" className="num">5</a>
                                <a href="#" className="num">6</a>
                                <a href="#" className="num">7</a>
                                <a href="#" className="num">8</a>
                                <a href="#" className="num">9</a>
                                <a href="#" className="num">10</a>
                                <a href="#" className="next"><img src={bnr_next} alt="다음 페이지 이동"/></a>
                                <a href="#" className="next"><img src={bnr_next2} alt="맨 마지막 페이지 이동"/></a>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default BoardList;