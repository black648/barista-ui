import * as DateUtil from "../../util/DateUtil";
import React from "react";
import BoardListApi from "../../api/BoardListApi";
import {Paging} from "../../function/common/Paging";
import {Link} from "react-router-dom";

const BoardDefaultPortlet = (props) => {
    const result = BoardListApi(props);
    console.log(props.pageSize)
    console.log(result.listCount)
    const pagingSize = parseInt(result.listCount / props.pageSize)
    console.log(pagingSize);
    return (
        <>
            <div className="content-search">
                <div className="search_wrap clearfix">
                    <select title="검색 분류">
                        <option>분류1</option>
                        <option>분류2</option>
                        <option>분류3</option>
                        <option>분류4</option>
                    </select>
                    <input type="text" placeholder="검색어를 입력해주세요." title="검색어입력"/>
                    <button type="button" className="btn-search">검색</button>
                </div>

                <p className="fR">전체 : <span className="Gold bold">{result.listCount}</span>건</p>
            </div>
            <table summary="번호, 구분, 제목, 등록자, 등록일, 조회수 항목으로 구성된 접수확인 안내표입니다." className="tb01 mT40">
                <caption>접수확인 안내표</caption>
                <colgroup>
                    <col style={{width: "7%"}}/>
                    <col style={{width: "10%"}}/>
                    <col style={{width: "45%"}}/>
                    <col style={{width: "15%"}}/>
                    <col style={{width: "16%"}}/>
                    <col style={{width: "7%"}}/>
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
                <tbody>
                {
                    result.listCount > 0 ? (
                        result.list.map((data, i) =>
                            <tr key={i}>
                                <th scope="row" className="tC">{i}</th>
                                <td className="tC">{data.codeName}</td>
                                <td>
                                    <Link to={{ pathname: `/boardView`, state: {id:data.id}}}>
                                        <span className="ellipsis" style={{width: "700px"}}>{data.title}</span>
                                    </Link>
                                </td>
                                <td className="tC">{data.registerName}</td>
                                <td className="tC">{DateUtil.dateMinuteFormat(data.registDe)}</td>
                                <td className="tC">{data.readCnt}</td>
                            </tr>
                        )
                    ) : ("")
                }
                </tbody>
            </table>
            <Paging instanceId = {props.instanceId}
                    page = {props.page}
                    pageSize = {props.pageSize}
                    pagingSize = {pagingSize} />

        </>
    )
};
export {BoardDefaultPortlet}