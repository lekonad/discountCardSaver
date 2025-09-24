import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Scanandstuff from "./assets/Components/Scanandstuff";
import { useEffect, useState } from "react";
import Aproovinfandstuff from "./assets/Components/Aproovingandstuff";
import { HomePage } from "./assets/Components/HomePage";
import { Displayingandstuff } from "./assets/Components/Displayingandstuff";

function App() {


  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState([]);
  const [maxID, setMaxID] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("database") == null) localStorage.setItem("database", JSON.stringify([]));
    if (localStorage.getItem("maxID") == null) localStorage.setItem("maxID", 0);
    setMaxID(Number(localStorage.getItem("maxID")));
    setCodes(JSON.parse(localStorage.getItem("database")))
    console.log(codes);
    //localStorage.setItem("database", JSON.stringify(codes))
    console.log(localStorage.getItem("database"));
    console.log(JSON.parse(localStorage.getItem("database")));
    screen.orientation.lock("portrait");
  }, [])

  //Default
  function Home() {


    return (
      <>
        <HomePage database={codes} setView={setCode} />
      </>
    );
  }

  function Scanning() {
    return <Scanandstuff code={setCode} />
  }

  function Aprooving() {
    return <Aproovinfandstuff code={code} setDatabase={setCodes} database={codes} setMaxID={setMaxID} maxID={maxID} />
  }

  function Editing() {

  }

  function View() {
    return (
      <>
        <Displayingandstuff data={code} setDatabase={setCodes} database={codes} />
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Scanning" element={<Scanning />} />
          <Route path="/Aprooving" element={<Aprooving />} />
          <Route path="/Editing" element={<Editing />} />
          <Route path="/View" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;