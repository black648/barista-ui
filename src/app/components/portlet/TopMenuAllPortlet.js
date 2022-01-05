import React, {useEffect, useRef, useState} from "react";

const TopMenuAllPortlet = (props) => {

    return (
        <>
            <div id={"menu_all_list"} className={"menu_all"}>
                <h4>사이트맵</h4>
            {
                props.menus.length > 0 ? (
                    props.menus.map((data,i) =>
                        <dl key={i}>
                            <dt key={i}>{data.name}</dt>
                            { data.codeList.map((lnb,j) =>
                                <dd key={j}><a href="">{lnb.name}</a></dd>
                            )}
                        </dl>
                    )
                ) : (
                    ""
                )
            }
            </div>
        </>
    );
};
export {TopMenuAllPortlet};