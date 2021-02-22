import { hot } from "react-hot-loader";
import React from "react";
import "./App.less";
import Main from "./Main";
import { observer } from "mobx-react";
import { observable } from "mobx";


@observer
class App extends React.Component {
    @observable tree = "sex";
    render() {
        return (
            <div className="App">
                <Main />

            </div>
        );
    }
}

export default hot(module)(App);
