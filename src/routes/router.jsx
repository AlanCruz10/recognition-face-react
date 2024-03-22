import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
   );
}

export default Router;