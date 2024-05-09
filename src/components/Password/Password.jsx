
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export default function PasswordField() {
    const [value, setValue] = useState('');

    return (
        <div className="flex justify-content-center">
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </FloatLabel>
        </div>
    )
}
        