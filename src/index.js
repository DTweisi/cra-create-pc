import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { LocaleProvider } from 'antd';
import { createBrowserHistory } from 'history';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routers from './router';
import * as serviceWorker from './serviceWorker';
import '@babel/polyfill';
import "assets/styles/index.scss";
import "assets/styles/antd.less";

export const history = createBrowserHistory();

class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <LocaleProvider locale={zhCN}>
                <Routers />
            </LocaleProvider>
        )
    }
}
render(<App/>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
