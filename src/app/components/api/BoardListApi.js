import {useEffect, useState} from "react";
function BoardListApi(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const [result, setResult] = useState([]);
    const order = props.order.split("|");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            { instanceId : props.instanceId
                , page : props.page
                , pageSize : props.pageSize
                , order : order[0]
                , orderProperty: order[1] })
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("http://localhost:8099/board/list", requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setResult(data.resultData);
            });
    }, []);

    return result;
}

export default BoardListApi;