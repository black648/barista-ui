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

    const menuList = menus.map((data,i) =>
            <li key={i}><a href="#">{data.cdname}</a>
                <ul className="lnb">
                    { data.codeList.map((lnb,j) =>
                        <li key={j}><a href="#">{lnb.cdname}</a></li>
                    )}
                </ul>
            </li>

        );

    return (
        <>
            <ul className="menu">
                {menuList}
                <li id="menu_all"><a href="#">메뉴 전체보기</a></li>
            </ul>
        </>
    )
}
export default TopMenu;