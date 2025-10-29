import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense , lazy } from "react";


let TestComponent = lazy(()=> import("./TestComponent"))

function Lazyload() {
  // return (
  //  <BrowserRouter>
  //     <Suspense fallback={<div>Loading page...</div>}>
  //       <Routes>
  //         <Route path="/" element={<TestComponent />} />
  //       </Routes>
  //     </Suspense>
  //   </BrowserRouter>
  // )
}

export default Lazyload
