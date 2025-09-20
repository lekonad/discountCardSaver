import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Scanandstuff from "./assets/Components/Scanandstuff";
import { useEffect, useState } from "react";
import Aproovinfandstuff from "./assets/Components/Aproovingandstuff";

function App() {
  

  const [codes, setCodes] = useState({});
  const [code, setCode] = useState([]);


  useEffect(() => {
    screen.orientation
      .lock("portrait")
      .catch((err) => console.error(err));
  },[])

  //Default
  function Home() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("./Scanning");
    } 

    return (
      <>
        <h1>Hello</h1>
        <button onClick={handleClick}>button</button>
      </>
    );
  }

  function Scanning() {
    return <Scanandstuff code={setCode}/>
  }

  function Aprooving() {
    return <Aproovinfandstuff code={code}/>
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