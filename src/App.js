import React from 'react';
import Layout from './components/layout/Layout';
import Toolbar from "./components/toolbar/Toolbar";
import './App.css'
import Bootcamp from './modules/bootcamp/Bootcamp';

function App() {
  return (
    <>
      <Toolbar/>
      <Layout>
          <Bootcamp/>
      </Layout>
    </>
  );
}

export default App;
