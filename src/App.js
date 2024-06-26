import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import Footer from "./Pages/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogView from "./Pages/BlogView";
import MyEditor from "./Pages/MyEditor";

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/view' element={<BlogView />}></Route>
          <Route path='/editor' element={<MyEditor />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <Footer /> */}
    </div>
  );
}

export default App;
