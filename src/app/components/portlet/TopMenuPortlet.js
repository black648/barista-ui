import React, {useEffect, useRef, useState} from "react";

const TopMenuPortlet = (props) => {

    const [menus, setMenus] = useState([]);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(null);
    const onClick = (i) => {
        console.log(i)

        if (isActive === i ) {
            setIsActive(null);
            if (i === 99) {
                document.getElementById("menu_all_list").classList.remove("active");
            }

        } else {
            setIsActive(i);
            if (i === 99) {
                document.getElementById("menu_all_list").classList.add("active");
            }
        }
    }

    useEffect(() => {
        console.log(dropdownRef)
        const pageClickEvent = (e) => {
            console.log(e);

            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(null);
            }
            console.log(isActive)
        };

        // 이거 주석처리하면.. 메뉴클릭시 바로바로 하위뎁스가 호출되지만.. 외부 클릭시.. 적용 안댐
        if (isActive != null) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [isActive]);

    return (
        <>
            {
                props.menus.length > 0 ? (
                    props.menus.map((data,i) =>
                        <li key={i} onClick={onClick.bind(this,i)}><a>{data.name}</a>
                            <ul ref={dropdownRef} key={i} className={`lnb ${isActive === i ? 'active' : ''}`}>
                                { data.codeList.map((lnb,j) =>
                                    <li key={j}><a href="#">{lnb.name}</a></li>
                                )}
                            </ul>
                        </li>
                    )
                ) : (
                    ""
                )
            }
            <li id="menu_all" onClick={onClick.bind(this,99)} className={`${isActive === 99 ? 'all_on' : ''}`}><a>메뉴 전체보기</a></li>
        </>
    );
};
export {TopMenuPortlet};