import React from "react";
import bnr_prev2 from "../../../images/ico/ico_prev2.png";
import bnr_prev from "../../../images/ico/ico_prev3.png";
import bnr_next from "../../../images/ico/ico_next3.png";
import bnr_next2 from "../../../images/ico/ico_next2.png";
import {Link} from "react-router-dom";

const Paging = (props) => {
    let pagingSize = parseInt(props.pagingSize + 1);
    function addPage() {
        let pages = [];
        for (let i = 0; i < pagingSize; i++) {
            pages.push(
                <Link to={{ pathname: `/boardList`, state: {instanceId:props.instanceId, page:{i}, pageSize:props.pageSize}}} className="num">{pagingSize}</Link>
            )
        }
        return pages;
    }
    return(
        <>
            <div className="paging_area">
                <div className="paging">
                    <Link to={{ pathname: `/boardList`, state: {instanceId:props.instanceId, page:0, pageSize:props.pageSize}}} className="prev">
                        <img src={bnr_prev2} alt="맨 처음 페이지 이동"/></Link>
                    {pagingSize > 10 ? <Link to="#" className="prev"><img src={bnr_prev} alt="이전 페이지 이동"/></Link> : ""}
                    {addPage()}
                    {pagingSize > 10 ? <Link to="#" className="next"><img src={bnr_next} alt="다음 페이지 이동"/></Link> : ""}
                    <Link to="#" className="next"><img src={bnr_next2} alt="맨 마지막 페이지 이동"/></Link>
                </div>
            </div>
        </>
    )
}
export {Paging}