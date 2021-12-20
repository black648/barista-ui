import {useEffect, useState} from "react";
function TopMenu() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menus, setMenus] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("http://localhost:8099/common/topMenu", requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.resultData.list)
                setMenus(data.resultData.list);
            });
    }, []);
    console.log(menus);

    return menus;
}

export default TopMenu;