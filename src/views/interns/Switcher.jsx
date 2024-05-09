import InternDetails from "./InternshipDetails";
import Internship from "./internship";
import { useState, createContext } from "react";
import React, { useContext } from "react";

const SwitcherContext = createContext(false);
const Switcher = (intern) => {
  const { switcherValue } = useContext(SwitcherContext);

  return (
    <div className="content">
      {console.log('switcherValue',switcherValue)}
      {switcherValue ? <InternDetails intern={intern} /> : <Internship />}
    </div>
  );
};

export default Switcher;
