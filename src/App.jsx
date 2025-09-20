import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Scanandstuff from "./assets/Components/Scanandstuff";
import { useEffect, useState } from "react";
import Aproovinfandstuff from "./assets/Components/Aproovingandstuff";
import { HomePage } from "./assets/Components/HomePage";

function App() {
  

  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState([]);


  useEffect(() => {
    console.log(codes);
    screen.orientation
      .lock("portrait")
      .catch((err) => console.error(err));
  },[codes])

  //Default
  function Home() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("./Scanning");
    } 

    return (
      <>
        <HomePage database={codes}/>
        <h1>Hello</h1>
        <button onClick={handleClick}>button</button>
      </>
    );
  }

  function Scanning() {
    return <Scanandstuff code={setCode}/>
  }

  function Aprooving() {
    return <Aproovinfandstuff code={code} setDatabase={setCodes} database={codes}/>
  }

  function Editing() {
    
  }

  function View() {

  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Scanning" element={<Scanning />} />
          <Route path="/Aprooving" element={<Aprooving />} />
          <Route path="/Editing" element={<Editing />}/>
          <Route path="/View" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;