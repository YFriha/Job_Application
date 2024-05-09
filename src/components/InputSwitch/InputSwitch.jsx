import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className=" flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => {setChecked(e.value);
               console.log('check', checked) }
            } />
        </div>
    );
}