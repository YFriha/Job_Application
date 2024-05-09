
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function CheckmarkDemo() {
    const [selectedGender, setSelectedGender] = useState(null);
    const gender = [
        { name: 'Male' },
        { name: 'Female' }
    ];

    return (
        <div className="flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedGender(e.value)} options={gender} optionLabel="name" 
                placeholder="Select your Gender" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
        </div>
    )
}
        