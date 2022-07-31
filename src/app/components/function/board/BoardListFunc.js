import BoardListApi from "../../api/BoardListApi";
import React from "react";
import * as DateUtil from "../../util/DateUtil";

const BoardListFunc = (props) => {
    const result = BoardListApi(props);
    console.log(result);
    return (
        <>
            <tbody>
            {
                result.length > 0 ? (
                    result.map((data,i) =>
                        <tr key={i}>
                            <th scope="row" className="tC">{i}</th>
                            <td className="tC">{data.codeName}</td>
                            <td><span className="ellipsis" style={{width: "700px"}}>{data.title}</span></td>
                            <td className="tC">{data.registerName}</td>
                            <td className="tC">{DateUtil.dateMinuteFormat(data.registDe)}</td>
                            <td className="tC">{data.readCnt}</td>
                        </tr>
                    )
                ) : (
                    ""
                )
            }
            </tbody>
        </>
    );
}
export {BoardListFunc};