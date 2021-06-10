import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import Main from "./app/components/main/Main";
// Redux 관련 불러오기
import store from './stores';
import {Provider} from "react-redux";

/*function Ddddd(props) {
    // console.log(props.fav ) // {fav} 와 같
  return <h1>name:{props.name} / type : {props.type}</h1>
}

const gogo = [
    {
        name : "123123",
        type : "number"
    },
    {
        name : "ㄱㄴㄷㄹ",
        type : "Korean"
    },
    {
        name : "abcd",
        type : "English"
    }
]

function renderData(data) {
    return <Ddddd name={data.name} type={data.type} />
}

function App() {
  return (
    // <div className="App" />
    <div>
        {gogo.map(renderData)}
    </div>
  );
}*/

// 스토어 생성
class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/main" component={Main} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
