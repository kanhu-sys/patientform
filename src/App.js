import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import Form from "./Form";
import Formdata from "./Formdata";


function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='form-data' element={<Formdata />} />
        </Routes>
      </HashRouter>
    </>
  )

}

export default App;