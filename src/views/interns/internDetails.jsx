import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { Knob } from "primereact/knob";
import { IconButton, useTheme } from "@mui/material";
import { Dialog } from "primereact/dialog";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const DataInternsTable = ({ intern, openDialog, rowEmail }) => {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Profil", accessor: "profil" },
      { Header: "Resume", accessor: "reference" },
      { Header: "Subject", accessor: "subject" },

    ],
    []
  );
  const [row_id, setRow_id] = useState("");
  const theme = useTheme();
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
  // const [visible, setVisible] = useState(false);
  // const [position, setPosition] = useState("center");
  // const footerContent = (
  //   <div>
  //     <Button
  //       label="No"
  //       icon="pi pi-times"
  //       onClick={() => setVisible(false)}
  //       className="p-button-text"
  //     />
  //     <Button
  //       label="Yes"
  //       icon="pi pi-check"
  //       onClick={() => setVisible(false)}
  //       autoFocus
  //     />
  //   </div>
  // );

  // const show = (position) => {
  //   setPosition(position);
  //   setVisible(true);
  // };
  const Open = (row) => {
    setRow_id(row.email);
    rowEmail = row.values;
    console.log("rowId ::", rowEmail);
    openDialog(rowEmail);
  };
  return (
    <div className="content">
      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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

                  <div
                    className=" flex justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    {/* <Knob
                    size={50}
                    value="50"
                    // onChange={(e) => setValue(e.value)}
                    strokeWidth={6}
                  />  */}
                    {/* <Button
                      label="SEND MESSAGE"
                      icon="pi pi-arrow-left"
                      onClick={Open}
                      className="p-button-help"
                      style={{ minWidth: "10rem" }}
                    /> */}
                    {/* <Button
                      color="primary"
                      variant="contained"
                      sx={{
                        bgcolor:
                          theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                        ":hover": {
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "#9cd6d1"
                              : "#009688",
                        },
                      }}
                      onClick={() => {
                        Open(row);
                      }}
                    >
                      Send Message
                    </Button>{" "} */}
                    <IconButton
                      sx={{
                        color: "#9f9f9f",
                      }}
                      onClick={() => {
                        Open(row);
                      }}
                      color="inherit"
                      aria-label="delete"
                    >
                      <MailOutlineIcon />
                    </IconButton>
                  </div>
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
