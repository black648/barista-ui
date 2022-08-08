import {useEffect, useState} from "react";

function BoardViewApi(props) {
    const [result, setResult] = useState([]);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: props.id})
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("http://localhost:8099/board/view", requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setResult(data.resultData.board);
            });
    }, []);

    return result;
}
export default BoardViewApi;