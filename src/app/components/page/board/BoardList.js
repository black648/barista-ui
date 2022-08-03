import React from "react";
import Layout from "../../common/Layout";
import {BoardDefaultPortlet} from "../../portlet/BoardDefaultPortlet";

class BoardList extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        order: "0|registDe",
        member:JSON.parse(sessionStorage.getItem("member"))
    }

    render() {
        // let search = new URLSearchParams(this.props.location.search);
        // eslint-disable-next-line no-restricted-globals
        let search = this.props.location.state;
        console.log(search)
        return (
            <>
                <Layout header={{ title: "바리스타-내 정보", noBackBtn:true}} footer loading>
                    <div className="content">
                        <BoardDefaultPortlet instanceId = {search.instanceId === undefined ? "1" : search.instanceId}
                                             page = {search.page === undefined ? "0" : search.page}
                                             pageSize = {search.pageSize === undefined ? "30" : search.pageSize}
                                             order = {this.state.order} />
                    </div>
                </Layout>
            </>
        );
    }
}
export default BoardList;