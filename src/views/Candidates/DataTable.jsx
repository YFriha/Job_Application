import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./Table.css";
import { Knob } from "primereact/knob";

const DataTable = ({ candidates, knob }) => {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Step", accessor: "step" },
      { Header: "City", accessor: "city" },
      { Header: "Address", accessor: "address" },
      // { Header: "score", accessor: "score_matching" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: candidates });

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
                
                  {knob && (<div
                  className=" flex justify-content-center"
                  style={{ width: "100px", height: "100px" }}
                >
                    <Knob size={70} style={{ width: "100%", height: "100%" }}
                      value='50'
                      // onChange={(e) => setValue(e.value)}
                      strokeWidth={6}
                    /></div>
                  )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
