import BoardViewApi from "../../api/BoardViewApi";
import React from "react";
import * as DateUtil from "../../util/DateUtil";

const BoardViewPortlet = (props) => {
    const result = BoardViewApi(props);

    return (
        <table summary="아이디, 성명, 전화번호, 이메일, 제목, 내용, 공개여부, 파일첨부 항목으로 구성된 게시글 작성표입니다." className="tb03">
            <caption>게시글 작성표</caption>
            <colgroup>
                <col style={{width: "10%;"}}/>
                <col style={{width: "40%;"}}/>
                <col style={{width: "10%;"}}/>
                <col style={{width: "40%;"}}/>
                <col/>
            </colgroup>
            <tbody>
            <tr>
                <th scope="row">제목</th>
                <td colSpan="3">{result.title}</td>
            </tr>
            <tr>
                <th scope="row">작성자</th>
                <td>{result.registerName}</td>
                <th scope="row">작성일</th>
                <td>{DateUtil.dateMinuteFormat(result.registDe)}</td>
            </tr>
            <tr>
                <th scope="row">첨부파일</th>
                <td colSpan="3">
                    <span className="fL inBlock attch ico_pdf"><a className="ellipsis" href="#">pdf : span 클래스에 따라 아이콘이 변경됩니다.</a></span>
                    <span className="fL inBlock attch ico_img"><a className="ellipsis" href="#">img : span 클래스에 따라 아이콘이 변경됩니다</a></span>
                    <span className="fL inBlock attch ico_ppt"><a className="ellipsis" href="#">ppt : span 클래스에 따라 아이콘이 변경됩니다.첨부파일 제목이 길면 글씨가 안보입니다.</a></span>
                    <span className="fL inBlock attch ico_etc"><a className="ellipsis" href="#">etc : span 클래스에 따라 아이콘이 변경됩니다.</a></span>
                    <span className="fL inBlock attch ico_txt"><a className="ellipsis" href="#">txt : span 클래스에 따라 아이콘이 변경됩니다.</a></span>
                </td>
            </tr>
            <tr>
                <th scope="row">내용</th>
                <td colSpan="3">
                    <textarea className="autosize" readOnly="readonly" value={result.content } />
                </td>
            </tr>
            </tbody>
        </table>
    )
}
export default BoardViewPortlet;