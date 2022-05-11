import React from 'react'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="w-screen h-auto flex flex-col">
      <Header />
    </div>

    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="/createItem" element={<CreateContainer />} />
      </Routes>
    </main>
</>
  )
}

export default App;