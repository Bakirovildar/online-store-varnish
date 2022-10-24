import React from 'react';
import './App.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {HomePages} from "./shared/HomePages";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <HomePages/>
      </Layout>
    </div>
  );
}

export default App;
