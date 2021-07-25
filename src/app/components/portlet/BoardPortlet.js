import React, {useEffect, useRef, useState} from "react";

const BoardPortlet = (props) => {

    console.log(props.order)
    console.log(props.instanceId)
    const [result, setResult] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instanceId : props.instanceId, order : props.order })
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("http://localhost:8099/board/list", requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.resultData.list)
                setResult(data.resultData.list);
            });
    }, []);
    console.log(result);
    return (
        <>
            <ul className="txtList">
            {
                result.length > 0 ? (
                    result.map((data,i) =>
                        <li key={i}><a className="ellipsis" href="#">{data.content}</a><span>{data.registde}</span></li>
                    )
                ) : (
                    ""
                )
            }
            </ul>
        </>
    );
}
export {BoardPortlet};