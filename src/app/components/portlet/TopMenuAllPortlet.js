import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

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
                                <dd key={j}><Link to={{ pathname: `${lnb.userDef1}`, state: `${lnb.userDef2}`}}> {lnb.name}</Link></dd>
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