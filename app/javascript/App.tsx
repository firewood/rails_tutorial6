import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="atcoder" element={<AtcoderHome />} />
        <Route path="atcoder/foo/*" element={<AtcoderFoo />} />
        <Route path="topcoder" element={<TopcoderHome />} />
        <Route path="topcoder/foo/*" element={<TopcoderFoo />} />
        <Route path="*" element={<main><p>404 Not Found!</p></main>} />
      </Routes>
    </BrowserRouter>      
  )
}

function AtcoderHome() {
  return (
    <div>
      <h2>AtCoder Home</h2>
      <Link to="/atcoder/foo">Goto foo</Link>
      <br />
      <Link to="/topcoder">Goto topcoder</Link>
    </div>
  );
}

function AtcoderFoo() {
  return (
    <div>
      <h2>AtCoder Foo</h2>
      <Link to="/atcoder">Goto /</Link>
    </div>
  );
}

function TopcoderHome() {
  return (
    <div>
      <h2>topcoder Home</h2>
      <Link to="/topcoder/foo">Goto foo</Link>
      <br />
      <Link to="/atcoder">Goto AtCoder</Link>
    </div>
  );
}

function TopcoderFoo() {
  return (
    <div>
      <h2>topcoder Foo</h2>
      <Link to="/topcoder">Goto /</Link>
    </div>
  );
}
