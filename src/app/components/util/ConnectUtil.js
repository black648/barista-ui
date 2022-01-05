import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as gnbMenuActions from '../../../stores/reducers/gnbMenu';
import * as memberActions from '../../../stores/reducers/member';

const actionList = {
    // gnbMenu : gnbMenuActions,
    member : memberActions
}

const mapStateToProps = reducerList => state => {
    let ret = {};
    reducerList.forEach(name => {
        ret[name] = state[name];
    });
    return ret;
}

const mapDispatchToProps = reducerList => dispatch => {
    let ret = {};
    reducerList.forEach(name => {
        console.log(actionList[name]);
        ret[name + 'Actions'] = bindActionCreators(actionList[name], dispatch);
    });
    return ret;
}

const ConnectUtil = reducerNames => WrappedComponent => {
    console.log(reducerNames);
    return connect(
        mapStateToProps(reducerNames),
        mapDispatchToProps(reducerNames)
    )(WrappedComponent);
}

export default ConnectUtil;
