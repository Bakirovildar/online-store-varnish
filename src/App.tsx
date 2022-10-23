import React from 'react';
import './App.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
      </Layout>
    </div>
  );
}

export default App;
