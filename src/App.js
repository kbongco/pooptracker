import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PoopLog from "./Components/PoopLog";
import AddPoop from "./Components/AddPoop";
import { Route } from "react-router-dom";
import Axios from "axios";

function App() {
  const [poop, updatePoop] = useState([]);
  const [getPoop, updateGetPoop] = useState("");
  const [newPoop, updateNewPoop] = useState("");

  useEffect(() => {
    const poopLog = async () => {
      const poop = await Axios(
        "https://api.airtable.com/v0/app4WcdqISrRRZRJp/Table%201?maxRecords=3&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updatePoop(poop.data.records);
      console.log(poop.data.records);
    };
    poopLog();
  }, [getPoop]);



  return (
    <div className="App" >
      <h1>Don't Eat Da PooPoo</h1>
      <Route path='/' exact>
        <PoopLog poop={poop} />
      </Route>
      <Route path="/newpoop" exact>
        <AddPoop getPoop={getPoop} updateGetPoop={updateGetPoop} />
      </Route>
      
    </div>
  );
}

export default App;
