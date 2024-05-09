import React, { useState } from "react";
// import { Knob } from "primereact/knob";
import { Knob, Arc, Pointer, Value } from "react-knob";

export default function StepDemo() {
  const [value, setValue] = useState(50);

  return (
    <div
      className="card flex justify-content-center"
      style={{ width: "10px", height: "10px" }}
    >
      {/* <Knob
        value={value}
        step={10}
        onChange={(e) => setValue(e.value)}
        style={{ width: "50%", height: "50%" }}
      /> */}
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        min={0}
        max={100}
        onChange={(value) => console.log(value)}
      >
        <Arc arcWidth={5} color="#FC5A96" radius={47.5} />
        <Pointer width={5} radius={40} type="circle" color={colors.secondary} />
        <Value marginBottom={40} className="value" />
      </Knob>
    </div>
  );
}
