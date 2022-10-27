import React from 'react';
import './App.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {HomePages} from "./shared/HomePages";
import {RootReducer} from "./store/store";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

function App() {
    const store = createStore(RootReducer, composeWithDevTools())

    return (
        <Provider store={store}>
            <div className="App">
                <Layout>
                    <Header/>
                    <HomePages/>
                </Layout>
            </div>
        </Provider>
    );
}

export default App;
