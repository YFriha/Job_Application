// import React, { useState, useEffect, useMemo } from "react";
// import { useTable } from "react-table";
// import "./Table.css";

// const DataTable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const  candidates=[
//     {
//       "id": 1,
//       "first_name": "Alysia",
//       "last_name": "Ivashechkin",
//       "email": "aivashechkin0@example.com",
//       "phone": "(424) 8787997",
//       "image": "https://picsum.photos/400",
//       "state": "California",
//       "city": "Los Angeles",
//       "address": "2 Vermont Junction"
//     },
//     {
//       "id": 2,
//       "first_name": "Alicia",
//       "last_name": "Sworder",
//       "email": "asworder1@mozilla.com",
//       "phone": "(804) 8988278",
//       "image": "https://picsum.photos/400",
//       "state": "Virginia",
//       "city": "Richmond",
//       "address": "362 Hoffman Court"
//     },
//     {
//       "id": 3,
//       "first_name": "Norrie",
//       "last_name": "Sydes",
//       "email": "nsydes2@com.com",
//       "phone": "(253) 5230012",
//       "image": "https://picsum.photos/400",
//       "state": "Washington",
//       "city": "Tacoma",
//       "address": "6972 Schiller Circle"
//     },
//     {
//       "id": 4,
//       "first_name": "Mendie",
//       "last_name": "Symes",
//       "email": "msymes3@facebook.com",
//       "phone": "(281) 3721239",
//       "image": "https://picsum.photos/400",
//       "state": "Texas",
//       "city": "Houston",
//       "address": "8868 Quincy Crossing"
//     },
//     {
//       "id": 5,
//       "first_name": "Ariana",
//       "last_name": "Janc",
//       "email": "ajanc4@feedburner.com",
//       "phone": "(260) 1861387",
//       "image": "https://picsum.photos/400",
//       "state": "Indiana",
//       "city": "Fort Wayne",
//       "address": "766 Moose Pass"
//     },
//     {
//       "id": 6,
//       "first_name": "Clarke",
//       "last_name": "Hugonet",
//       "email": "chugonet5@ucoz.ru",
//       "phone": "(915) 8105657",
//       "image": "https://picsum.photos/400",
//       "state": "Texas",
//       "city": "El Paso",
//       "address": "6 Ruskin Road"
//     },
//     {
//       "id": 7,
//       "first_name": "Jerrilyn",
//       "last_name": "Pinor",
//       "email": "jpinor6@wisc.edu",
//       "phone": "(913) 6408135",
//       "image": "https://picsum.photos/400",
//       "state": "Kansas",
//       "city": "Kansas City",
//       "address": "60 Vermont Way"
//     }];
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://cities-qd9i.onrender.com/agents");
//       const agents = await response.json();
//       setData(agents);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const columns = useMemo(
//     () => [
//       { Header: "ID", accessor: "id" },
//       { Header: "First Name", accessor: "first_name" },
//       { Header: "Last Name", accessor: "last_name" },
//       { Header: "Email", accessor: "email" },
//       { Header: "Phone", accessor: "phone" },
//       { Header: "State", accessor: "state" },
//       { Header: "City", accessor: "city" },
//       { Header: "Address", accessor: "address" }
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = useTable({ columns, data });

//   return (
//     <div className="table-container">
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;
import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./Table.css";

const DataTable = ({ candidates }) => {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Step", accessor: "step" },
      { Header: "City", accessor: "city" },
      { Header: "Address", accessor: "address" }
      
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: candidates });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

