import * as DateUtil from "../../util/DateUtil";
import BoardListApi from "../../api/BoardListApi";
import {Link} from "react-router-dom";

const BoardMainFunc = (props) => {
    const result = BoardListApi(props);
    console.log(result);
    return (
        <>
            <ul className="txtList">
                {
                    result.listCount > 0 ? (
                        result.list.map((data, i) =>
                            <li key={i}>
                                <Link to="/" className="ellipsis">{data.title}</Link>
                                <span>{DateUtil.dateFormat(data.registDe)}</span>
                            </li>
                        )
                    ) : (
                        ""
                    )
                }
            </ul>
        </>
    );
}
export {BoardMainFunc};