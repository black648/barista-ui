import React, {useEffect} from 'react';

import Toast from "antd-mobile/lib/toast";
import Header from "./Header";
import Footer from "./Footer";

import "../../css/common.css";
import "../../css/reset.css";
import "../../css/font.css";

// 넘겨주는 컴포넌트에 header, footer 값이 있으면 header, footer를 렌더합니다.
const Layout = ({ header, footer, children, loading }) => {
    useEffect(() => (loading ? Toast.loading("Loading", 50000) : Toast.hide()), [
        loading
    ]);

    return (
        <div>
            {header && ( <Header/> )}
            {children}
            {footer && <Footer/>}
        </div>
    );
};

export default Layout;