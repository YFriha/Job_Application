import React, { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { Knob } from "primereact/knob";

const DataInternsTable = ({intern}) => {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: 'id' },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
    //   { Header: "Phone", accessor: "email" },
      { Header: "Skills", accessor: "skills" },
      //   { Header: "Step", accessor: "step" },
        { Header: "Subject", accessor: "subject" },
      { Header: "Resume", accessor: "resume" },
    ],
    []
  );
//   useEffect(() => {
//     // (async () => await Load())();
//     console.log('internDetails : ',intern)
//   }, []);
// useEffect(() => {
//     // Check if intern is an array before using it
//     if (Array.isArray(intern)) {
//       // Use intern as data for the table
//       console.log('internDetails : ', intern.id);
//     } else {
//       console.error('Intern data is not an array');
//     }
//   }, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: intern });

  return (
    <div className="content">

        <div className="table-container">
      <table
       {...getTableProps()}> 
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

                {/* <div
                  className=" flex justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Knob
                    size={50}
                    value="50"
                    // onChange={(e) => setValue(e.value)}
                    strokeWidth={6}
                  /> */}
                {/* </div> */}
              </tr>
            );
          })} 
         </tbody> 
       </table> 
    </div>
    </div>
    
  );
};

export default DataInternsTable;
