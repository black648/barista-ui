import React, {useEffect, useRef, useState} from "react";
import {topMenuOn} from "../util/EventUtil";

const TopMenuAllPortlet = (props) => {

    return (
        <>
            <div className={"menu_all"}>
                <h4>사이트맵</h4>
            {
                props.menus.length > 0 ? (
                    props.menus.map((data,i) =>
                        <dl key={i}>
                            <dt key={i} className={"lnb"}>{data.cdname}</dt>
                            { data.codeList.map((lnb,j) =>
                                <dd key={j}><button to="#">{lnb.cdname}</button></dd>
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