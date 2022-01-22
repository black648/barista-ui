import React from "react";
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

        const getStep = (step) => {
            this.setState({
                joinStep: step
            });
        }
        console.log(this.state.joinStep)

        let joinPage = "";
        if (this.state.joinStep == 1) {
            joinPage = <JoinStep1 step = {getStep}/>
        } else if (this.state.joinStep == 2) {
            joinPage = <JoinStep2 step = {getStep}/>
        } else {
            joinPage = <JoinStep3 step = {getStep}/>
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