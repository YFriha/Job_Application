import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
// import KanbanCandidate from './KanbanCandidate'
// import KanbanBoard from "./KanbanCandidate";
import { ControlledBoard } from "./board";

function Tables() {
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const handleSwitchChange = (isChecked) => {
    setIsSwitchChecked(isChecked);
  };
  const [data, setData] = useState([]);
  //===============================================================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/candidates/list/");
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //===============================================================
  const candidates = [
    {
      id: 1,
      first_name: "Yassir",
      last_name: "Friha",
      email: "yassir.friha@example.com",
      phone: "(424) 8787997",
      image: "https://picsum.photos/400",
      step: "Phone Screening",
      city: "Los Angeles",
      address: "2 Vermont Junction",
    },
    {
      id: 2,
      first_name: "Oussama",
      last_name: "Akaabour",
      email: "Ou.akaabour@example.com",
      phone: "(424) 8787997",
      image: "https://picsum.photos/400",
      step: "Phone Screening",
      city: "Los Angeles",
      address: "2 Vermont Junction",
    },
    {
      id: 3,
      first_name: "younes",
      last_name: "Ouajil",
      email: "ouajil.younes@example.com",
      phone: "(424) 8787997",
      image: "https://picsum.photos/400",
      step: "Phone Screening",
      city: "Los Angeles",
      address: "2 Vermont Junction",
    },
    {
      id: 4,
      first_name: "Alysia",
      last_name: "Ivashechkin",
      email: "aivashechkin0@example.com",
      phone: "(424) 8787997",
      image: "https://picsum.photos/400",
      step: "Phone Screening",
      city: "Los Angeles",
      address: "2 Vermont Junction",
    },
    {
      id: 5,
      first_name: "Alysia",
      last_name: "Ivashechkin",
      email: "aivashechkin0@example.com",
      phone: "(424) 8787997",
      image: "https://picsum.photos/400",
      step: "Phone Screening",
      city: "Los Angeles",
      address: "2 Vermont Junction",
    },
    {
      id: 6,
      first_name: "Alicia",
      last_name: "Sworder",
      email: "asworder1@mozilla.com",
      phone: "(804) 8988278",
      image: "https://picsum.photos/400",
      step: "Initial Interview",
      city: "Richmond",
      address: "362 Hoffman Court",
    },
    {
      id: 7,
      first_name: "Alicia",
      last_name: "Sworder",
      email: "asworder1@mozilla.com",
      phone: "(804) 8988278",
      image: "https://picsum.photos/400",
      step: "Initial Interview",
      city: "Richmond",
      address: "362 Hoffman Court",
    },
    {
      id: 8,
      first_name: "Alicia",
      last_name: "Sworder",
      email: "asworder1@mozilla.com",
      phone: "(804) 8988278",
      image: "https://picsum.photos/400",
      step: "Initial Interview",
      city: "Richmond",
      address: "362 Hoffman Court",
    },
    {
      id: 9,
      first_name: "Alicia",
      last_name: "Sworder",
      email: "asworder1@mozilla.com",
      phone: "(804) 8988278",
      image: "https://picsum.photos/400",
      step: "Initial Interview",
      city: "Richmond",
      address: "362 Hoffman Court",
    },
    {
      id: 10,
      first_name: "Norrie",
      last_name: "Sydes",
      email: "nsydes2@com.com",
      phone: "(253) 5230012",
      image: "https://picsum.photos/400",
      step: "Technical Assessment",
      city: "Tacoma",
      address: "6972 Schiller Circle",
    },
    {
      id: 11,
      first_name: "Mendie",
      last_name: "Symes",
      email: "msymes3@facebook.com",
      phone: "(281) 3721239",
      image: "https://picsum.photos/400",
      step: "Final Interview",
      city: "Houston",
      address: "8868 Quincy Crossing",
    },
    {
      id: 12,
      first_name: "Mendie",
      last_name: "Symes",
      email: "msymes3@facebook.com",
      phone: "(281) 3721239",
      image: "https://picsum.photos/400",
      step: "Final Interview",
      city: "Houston",
      address: "8868 Quincy Crossing",
    },
    {
      id: 13,
      first_name: "Mendie",
      last_name: "Symes",
      email: "msymes3@facebook.com",
      phone: "(281) 3721239",
      image: "https://picsum.photos/400",
      step: "Final Interview",
      city: "Houston",
      address: "8868 Quincy Crossing",
    },
    {
      id: 14,
      first_name: "Ariana",
      last_name: "Janc",
      email: "ajanc4@feedburner.com",
      phone: "(260) 1861387",
      image: "https://picsum.photos/400",
      step: "Onboarding",
      city: "Fort Wayne",
      address: "766 Moose Pass",
    },
    {
      id: 16,
      first_name: "Clarke",
      last_name: "Hugonet",
      email: "chugonet5@ucoz.ru",
      phone: "(915) 8105657",
      image: "https://picsum.photos/400",
      step: "Technical Assessment",
      city: "El Paso",
      address: "6 Ruskin Road",
    },
    {
      id: 17,
      first_name: "Jerrilyn",
      last_name: "Pinor",
      email: "jpinor6@wisc.edu",
      phone: "(913) 6408135",
      image: "https://picsum.photos/400",
      step: "Initial Interview",
      city: "Kansas City",
      address: "60 Vermont Way",
    },
  ];
  return (
    //   <div className="content">
    //   <div className="sticky-lg-top">
    //     <ToggleSwitch onChange={handleSwitchChange} checked={isSwitchChecked} />
    //   </div>
    //   {isSwitchChecked ? <KanbanCandidate candidates={candidates}/> : <DataTable candidates={candidates} />}
    //   {isSwitchChecked && <KanbanBoard candidates={candidates} />}
    // </div>
    <div className="content">
      <div className="sticky-lg-top">
        <ToggleSwitch onChange={handleSwitchChange} checked={isSwitchChecked} />
      </div>
      {isSwitchChecked ? (
        <ControlledBoard candidates={candidates} />
      ) : (
        <DataTable candidates={data} />
      )}
    </div>
  );
}

export default Tables;
