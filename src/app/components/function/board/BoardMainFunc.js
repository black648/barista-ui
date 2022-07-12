import * as DateUtil from "../../util/DateUtil";
import BoardListApi from "../../api/BoardListApi";

const BoardMainFunc = (props) => {
    const result = BoardListApi(props);
    console.log(result);
    return (
        <>
            <ul className="txtList">
                {
                    result.length > 0 ? (
                        result.map((data, i) =>
                            <li key={i}>
                                <a className="ellipsis" href="#">{data.title}</a>
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