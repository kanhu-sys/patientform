import { BrowserRouter,Routes,Route } from "react-router-dom";

import Form from "./Form";
import Formdata from "./Formdata";


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Form/>}/>
      <Route path='form-data' element = {<Formdata/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;