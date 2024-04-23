import React, { useState } from "react";
import Switch from "react-switch";

function ToggleSwitch({ checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (checked) => {
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <label>
      <Switch onChange={handleChange} checked={isChecked} />
    </label>
  );
}

export default ToggleSwitch;
