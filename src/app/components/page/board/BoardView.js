import React from "react";
import Layout from "../../common/Layout";
import BoardViewPortlet from "../../portlet/board/BoardViewPortlet";

class BoardView extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        member:JSON.parse(sessionStorage.getItem("member"))
    }

    render() {
        return (
            <>
                <Layout header={{title: "바리스타-게시 글 상세보기", noBackBtn: true}} footer loading>
                    <div className="content">
                        <BoardViewPortlet id={this.props.location.state.id} />
                        <div className="mT20 tR">
                            <button className="btn btn_brown btn_prev2">목록</button>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default BoardView;