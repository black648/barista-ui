import React from "react";
import axios from "axios";
import Layout from "../common/Layout";
import {JoinStep1} from "../portlet/JoinStep1";
import {JoinStep2} from "../portlet/JoinStep2";
import {JoinStep3} from "../portlet/JoinStep3";

class Join extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        joinStep : 1
    }

    render() {
        let joinPage = "";
        if (this.state.joinStep == 1) {
            joinPage = <JoinStep1 step = {this.state}/>
        } else if (this.state.joinStep == 2) {
            joinPage = <JoinStep2 step = {this.state}/>
        } else {
            joinPage = <JoinStep3 step = {this.state}/>
        }
        return (
            <>
                <Layout header={{ title: "바리스타-회원가입", noBackBtn:true}} footer loading>
                    {joinPage}
                </Layout>
            </>
        );
    }
}
export default Join;