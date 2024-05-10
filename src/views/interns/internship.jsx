// import ImageUploadButton from "../ImageUploadButton";
// import axios from "axios";
// import CardIntern from "./CardIntern";
// import MyArrayInput from "../MyArrayInput";
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   Stack,
//   TextField,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { useEffect } from "react";
// import { useState } from "react";
// import React from "react";

// import { Message } from 'primereact/message';
// const InternPage = () => {
//   const [internImage, setInternImage] = useState("");

//   const [subject, setSubject] = useState("");
//   const [email, setEmail] = useState("");
//   const [location, setLocation] = useState('');
//   const [internDeadline, setInternDeadline] = useState("");
//   const [internCompany, setInternCompany] = useState("");
//   const [internCompanyArray, setInternCompanyArray] = useState();
//   const [arrayOfStrings, setArrayOfStrings] = useState([]);
//   const [internship, setInterns] = useState([]);
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const isTextFieldEmpty = (value) => {
//     return value === "";
//   };

//   useEffect(() => {
//     (async () => await Load())();
//   }
// ,[]
// );

//   async function Load() {
//     const response = await fetch(`${apiUrl}ai/internship/`);
//     const json = await response.json();
//     setInterns(json);
//     console.log(json);
//     // setInternCompanyArray(json.company);
//     return json;
//   }
//   async function save(event) {
//     toggleDialog3();
//     try {
//       await axios.post(`${apiUrl}ai/internship/create/`, {
//         subject: subject,
//         email: email,
//         location: location,
//         deadline: internDeadline,
//         recruiter:'1'
//       });
//       console.log('test')

//       alert("Intern Registation Successfully");
//       setSubject("");
//       setEmail("");
//       setLocation("");
//       setInternDeadline("");
//       setInternCompany("");
//       setArrayOfStrings([]);
//       closepopup();
//       Load();
//     } catch (err) {
//       alert("intern Registation Failed");
//     }
//   }
//   const handleImageUpload = (internImage) => {
//     setInternImage(internImage);
//     console.log(internImage)
//   };
//   const deleteInternById=async (internId) =>{
//     try {
//       // Send a DELETE request to the API endpoint with the intern's ID
//       await axios.delete(`${apiUrl}/internship/${internId}/delete/`);

//       // If the request is successful, the intern has been deleted
//       console.log(`Intern with ID ${internId} has been deleted.`);
//       Load();
//     } catch (error) {
//       // Handle any errors that occur during the deletion process
//       console.error(`Error deleting intern with ID ${internId}: ${error.message}`);
//     }
//   }
//   async function updateIntern(updatedData) {
//     console.log("test 2", updatedData);
//     try {
//       const response = await axios.put(
//         `${apiUrl}/internship/${updatedData.internid}/update/`,
//         updatedData
//       );
//       if (response.status === 200) {
//         // Handle a successful update (e.g., show a success message)
//         console.log(`Intern with ID has been updated.`);
//         // Reload the intern data if needed
//         Load();
//       } else {
//         // Handle errors (e.g., show an error message)
//         console.error(`Error updating intern with ID : ${response.statusText}`);
//       }
//     } catch (error) {
//       // Handle any network errors or exceptions
//       console.error(`Error updating intern: ${error.message}`);
//     }
//   }
//   const theme = useTheme();

//   const [open, openchange] = useState(false);
//   const [open2, openchange2] = useState(false);
//   const [open3, openchange3] = useState(false);
//   //----------------------------------------------------------------
//   const functionopenpopup = () => {
//     openchange(true);
//   };

//   const closepopup = () => {
//     openchange(!visible);
//   };

//   const functionopenpopup2 = () => {
//     toggleDialog();
//     openchange2(true);
//   };
//   const closepopup2 = () => {
//     openchange2(false);
//   };

//   const functionopenpopup3 = () => {
//     save();
//     toggleDialog2();
//     openchange3(true);
//   };

//   const closepopup3 = () => {
//     openchange3(false);
//   };
//   const [visible] = React.useState(true);
//   const toggleDialog = () => {
//     openchange(!visible);
//   };
//   const toggleDialog2 = () => {
//     openchange2(!visible);
//   };
//   const toggleDialog3 = () => {
//     openchange3(!visible);
//   };
//   const [filter, setFilter] = useState("");
//   const filteredCards = internship.filter((intern) => {
//     const subject = intern.subject.toLowerCase();
//     const filterLower = filter.toLowerCase();

//     // Check if the company name starts with the filter string
//     return subject.startsWith(filterLower);
//   });
//   console.log('filterCards : ',filteredCards);
//   const fakeDataArray = [
//     {
//       internId: 1,
//       imageSrc: "/src/assets/img/work.jpg",
//       subject: "Sample Intern Title 1",
//       email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       location: [
//         "Bachelor's degree in Computer Science or related field",
//         "Experience with JavaScript and React.js",
//         "Strong problem-solving skills",
//       ],
//       deadline: "2024-04-29",
//       company: "Sample Company",
//     },
//     {
//       internId: 2,
//       imageSrc: "/src/assets/img/pulse.png",
//       subject: "Sample Intern Title 2",
//       email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       location: [
//         "Bachelor's degree in Computer Science or related field",
//         "Experience with JavaScript and React.js",
//         "Strong problem-solving skills",
//       ],
//       deadline: "2024-04-30",
//       company: "Sample Company",
//     },
//     // Add more objects as needed
//   ];
//   return (
//     <div
//       style={{
//         flexDirection: "column",
//       }}
//       className="d-flex flex-column content "
//     >
//       <div>
//         <Stack direction={"row"} padding={2}>
//           <Box flexGrow={3} borderRadius={8}></Box>
//           <TextField
//             style={{ marginRight: "30px" }}
//             variant="standard"
//             type="text"
//             placeholder="Filter by internship"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           />
//           <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
//             {" "}
//             <DialogContent>
//               <Stack spacing={2.5} margin={2}>
//                 <Typography
//                   fontSize={25}
//                   fontFamily={"sans-serif"}
//                   color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
//                 >
//                   Add internship
//                 </Typography>
//                 <TextField
//                   variant="outlined"
//                   label="Intern Subject"
//                   id="internship Subject"
//                   value={subject}
//                   onChange={(event) => {
//                     setSubject(event.target.value);
//                   }}

//                 ></TextField>
//                 <TextField
//                   variant="outlined"
//                   label="Email"
//                   id="email"
//                   value={email}
//                   onChange={(event) => {
//                     setEmail(event.target.value);
//                   }}
//                 ></TextField>
//                 {/* <MyArrayInput
//                   value={arrayOfStrings}
//                   onChange={setArrayOfStrings}
//                 /> */}
//                 <TextField
//                   variant="outlined"
//                   label="Location"
//                   id="Location"
//                   value={location}
//                   onChange={(event) => {
//                     setLocation(event.target.value);
//                   }}
//                 ></TextField>
//                 <TextField
//                   variant="outlined"
//                   label="Deadline"
//                   id="internDeadline"
//                   value={internDeadline}
//                   onChange={(event) => {
//                     setInternDeadline(event.target.value);
//                   }}
//                 ></TextField>
//               </Stack>
//               <Stack direction="row" alignItems="center" spacing={2}>
//                 {/* <ImageUploadButton onImageUpload={handleImageUpload} /> */}
//               </Stack>
//             </DialogContent>
//             <DialogActions>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 sx={{
//                   bgcolor:
//                     theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
//                   ":hover": {
//                     bgcolor:
//                       theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
//                   },
//                 }}
//                 onClick={() => {
//                   console.log(
//                     subject,
//                     email,
//                     internDeadline,
//                     location
//                   );
//                   if ((subject==='' || email==='' || internDeadline==='' )){
//                     <Message severity="error" text="Error Message" />
//                     window.alert("Veillez remplir les champs obligatoires!");
//                   } else {
//                     save()

//                   }
//                 }}
//               >
//                 ADD POST
//               </Button>{" "}
//             </DialogActions>
//           </Dialog>
//           <Stack>
//             <Button
//               variant="contained"
//               onClick={functionopenpopup}
//               sx={{
//                 bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
//                 ":hover": {
//                   bgcolor:
//                     theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
//                 },
//               }}
//             >
//               Add new Internship
//             </Button>
//           </Stack>
//         </Stack>
//         <div className="app">
//           {filteredCards.map(
//             (intern) => (
//               console.log("subject :  ", intern.id),
//               (
//                 <div className="my-food" key={intern.id}>
//                   <CardIntern
//                     internid={intern.id}
//                     subject={intern.subject}
//                     email={intern.email}
//                     location={intern.location}
//                     deadline={intern.deadline}
//                     recruiter={intern.recruiter}
//                     onDeleteIntern={deleteInternById}
//                     updateIntern={updateIntern}
//                     handleImageUpload={handleImageUpload}
//                   />
//                 </div>
//               )
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default InternPage;
//------------------------------------------------------------------------------------

import React, { useState, useEffect, useRef, useContext } from "react";
import { DataTable } from "primereact/datatable";
import DataInternsTable from "./internDetails";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import "./intern.css";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Dialog,
  Button,
  IconButton,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import InternDetails from "./InternshipDetails";
import Switcher from "./Switcher";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate } from "react-router-dom";
// import  { useContext } from "react";

const SwitcherContext = React.createContext();

export default function InternshippsDemo() {
  const theme = useTheme();
  const [internship, setInternship] = useState([]);
  const [deleteInternshipDialog, setDeleteInternshipDialog] = useState(false);
  const [deleteInternshippsDialog, setDeleteInternshippsDialog] =
    useState(false);
  const [selectedInternshipps, setSelectedInternshipps] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [open, openchange] = useState(false);
  const [visible] = React.useState(true);

  const [internshipSubject, setInternshipSubject] = useState("");
  const [email, setEmail] = useState("");
  const [internshipDeadline, setInternshipDeadline] = useState("");
  const [internshipLocation, setInternshipLocation] = useState("");
  const [internDetails, setInternDetails] = useState(false);
  const [isScrappingLaunched, setIsScrappingLaunched] = useState(false);
  const [code, setCode] = useState("");

  // const switcher = useContext(SwitcherContext);
  const [switcherValue, setSwitcherValue] = useState(true);

  const functionopenpopup = () => {
    console.log("functionopenpopup");
    openchange(true);
  };
  const closepopup = () => {
    openchange(!visible);
  };
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    Load();
  }, []);

  const handleClose = () => {
    hideDeleteInternshippsDialog();
  };

  const hideDeleteInternshippsDialog = () => {
    setDeleteInternshippsDialog(false);
  };

  const confirmDeleteInternshipp = (internship) => {
    // setInternship(internship);
    // setDeleteInternshippDialog(true);
    setDeleteInternshippsDialog(true);
    deleteInternshipById(internship.id);
    // deleteInternshipp()
  };

  const deleteInternshipp = () => {
    deleteInternshipById(MyRowData);

    setDeleteInternshipDialog(false);
    console.log("test");
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Internship Deleted",
      life: 3000,
    });
  };

  const confirmDeleteSelected = () => {
    setDeleteInternshippsDialog(true);
  };

  const deleteSelectedInternshipps = () => {
    console.log("selected items : ", selectedInternshipps);
    selectedInternshipps.map((internship) => {
      confirmDeleteInternshipp(internship);
      console.log("internship number ", internship.id, "hase been deleted");
      setDeleteInternshippsDialog(false);
      setDeleteInternshipDialog(false);
    });

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "internships Deleted",
      life: 3000,
    });
  };
  const [MyRowData, setMyRowData] = useState("");
  const deleteInternship = (rowData) => {
    setMyRowData(rowData.id);
    setDeleteInternshipDialog(true);
  };

  const [interns, setInterns] = useState([]);

  // async function LoadIntern(id) {
  //   try {
  //     const response = await fetch(`${apiUrl}ai/all_Internship_Interns/${id}/`);
  //     // if (!response.ok) {
  //     //   throw new Error("Failed to fetch data");
  //     // }
  //     const json = await response.json();
  //     // if (!Array.isArray(json)) {
  //     //   throw new Error("Expected an array");
  //     // }
  //     setInterns(json);
  //     console.log("the interns are: ", json);
  //   } catch (error) {
  //     console.error("Error fetching interns:", error.message);
  //     // Handle error state, e.g., set an error flag or show a message to the user
  //   }
  // }

  useEffect(() => {
    console.log("verif Code is ", code);
  }, [code]);
  const LoadIntern = async (id) => {
    try {
      const response = await fetch(`${apiUrl}ai/all_Internship_Interns/${id}/`, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
        },
      });
      console.log("response : ", response);
      if (response.status === 401) {
        console.log("Unauthorized. Redirecting to login page...");
        navigate("/login");
        // Stop execution of the function after redirecting
        return; // or throw new Error('Unauthorized'); depending on your requirement
      };
      const result = await response.json();
      console.log("Data is : ", result);
      setInterns(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  async function save(event) {
    try {
      await axios.post(`${apiUrl}ai/internship/create/`, {
        subject: internshipSubject,
        email: email,
        location: internshipLocation,
        deadline: internshipDeadline,
        recruiter: "1",
      });
      // alert("Post Registation Successfully");
      setInternshipSubject("");
      setEmail("");
      setInternshipLocation("");
      setInternshipDeadline("");
      closepopup();
      Load();
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "internship created",
        life: 3000,
      });
    } catch (err) {
      alert("post Registation Failed");
    }
  }
  const Scrapping = async () => {
    try {
      const response = await fetch(`${apiUrl}ai/start_scraping/${id}/`, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
        },
      });
      console.log("response : ", response);
      if (response.status === 401) {
        console.log("Unauthorized. Redirecting to login page...");
        navigate("/login");
        // Stop execution of the function after redirecting
        return; // or throw new Error('Unauthorized'); depending on your requirement
      };
      const result = await response.json();
      console.log("after Scrapping : ", result);
      // setInterns(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const code_outlook = async () => {
    try {
      const response = await fetch(`${apiUrl}ai/code_outlook/${id}/`);
      const result = await response.json();
      console.log("code : ", result.user_code);
      setCode(result.user_code);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          color="primary"
          variant="contained"
          sx={{
            bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
            ":hover": {
              bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
            },
          }}
          onClick={functionopenpopup}
        >
          New
        </Button>
        <Button
          color="primary"
          variant="contained"
          sx={{
            bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
            ":hover": {
              bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
            },
            margin: "7px",
          }}
          onClick={confirmDeleteSelected}
          disabled={!selectedInternshipps || !selectedInternshipps.length}
        >
          Delete
        </Button>
      </div>
    );
  };
  // const [internData, setInternData] = useState([]);
  // const handleClick = (rowData) => {
  //   setInternData(rowData);
  //   setInternDetails(true);
  // };
  const [internshipId, setInternshipId] = useState();
  const [id, setId] = useState();

  const handleClick = (rowData) => {
    setInternshipId(rowData);
    setId(rowData.id);
    LoadIntern(rowData.id);
    // Append the selected row to the existing internData array
    // setInternData((prevData) => [...prevData, rowData]);
    setInternDetails(true);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <IconButton
          sx={{
            color: "#9f9f9f",
          }}
          onClick={() => {
            handleClick(rowData);
          }}
          color="inherit"
          aria-label="delete"
        >
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "#9f9f9f",
          }}
          onClick={() => {
            deleteInternship(rowData);
          }}
          color="inherit"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Internships</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </IconField>
    </div>
  );
  const navigate = useNavigate();
  async function Load() {
    try {
      const response = await fetch(`${apiUrl}ai/internship/`, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
        },
      });
      console.log("response : ", response);
      if (response.status === 401) {
        console.log("Unauthorized. Redirecting to login page...");
        navigate("/login");
        // Stop execution of the function after redirecting
        return; // or throw new Error('Unauthorized'); depending on your requirement
      }

      if (!response.ok) {
        // Handle other types of errors (e.g., server errors)
        throw new Error("Failed to fetch data. Status: " + response.status);
      }

      const json = await response.json();
      setInternship(json);
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  }

  const deleteInternshipById = async (internshipId) => {
    try {
      console.log(internshipId);
      console.log(`${apiUrl}ai/internship/${internshipId}/delete/`);

      // Send a DELETE request to the API endpoint with the post's ID
      await axios.delete(`${apiUrl}ai/internship/${internshipId}/delete/`);

      // If the request is successful, the post has been deleted
      console.log(`Internship with ID ${internshipId} has been deleted.`);
      Load();
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error(
        `Error deleting internship with ID ${internshipId}: ${error.message}`
      );
    }
  };
  return (
    <div className="content">
      <Toast ref={toast} />
      <div className="card intern">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          // right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={internship}
          selection={selectedInternshipps}
          onSelectionChange={(e) => setSelectedInternshipps(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} internships"
          globalFilter={globalFilter}
          header={header}
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="id"
            header="Id"
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="subject"
            header="Subject"
            sortable
            body={internship.subject}
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="email"
            header="Email"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="location"
            header="Location"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>
      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
        {" "}
        <DialogContent>
          <Stack spacing={2.5} margin={2}>
            <Typography
              fontSize={25}
              fontFamily={"sans-serif"}
              // color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
            >
              Add Internship
            </Typography>
            <TextField
              variant="outlined"
              label="Internship Subject"
              id="internshipSubject"
              value={internshipSubject}
              onChange={(event) => {
                setInternshipSubject(event.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label="Email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label="Deadline"
              id="internshipDeadline"
              value={internshipDeadline}
              onChange={(event) => {
                setInternshipDeadline(event.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label="Location"
              id="internshipLocation"
              value={internshipLocation}
              onChange={(event) => {
                setInternshipLocation(event.target.value);
              }}
            ></TextField>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}></Stack>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
              ":hover": {
                bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
              },
            }}
            onClick={() => {
              console.log(
                internshipSubject,
                email,
                internshipDeadline,
                internshipLocation
              );
              if (internshipSubject === "" || email === "") {
                // <Message severity="error" text="Error Message" />
                window.alert("Veillez remplir les champs obligatoires!");
              } else {
                save();
              }
            }}
          >
            ADD INTERNSHIP
          </Button>{" "}
        </DialogActions>
      </Dialog>
      <Dialog
        open={deleteInternshippsDialog}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            {internship && (
              <span>
                Are you sure you want to delete the selected internship?
              </span>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteSelectedInternshipps} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={deleteInternshipDialog}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            {internship && (
              <span>
                Are you sure you want to delete the selected internship?
              </span>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDeleteInternshipDialog(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={deleteInternshipp} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={internDetails}
        onClose={handleClose}
        // maxWidth="md"
        // fullWidth
      >
        <DialogTitle>details</DialogTitle>
        <DialogContent>
          <IconButton
            sx={{
              color: "#009688",
            }}
            onClick={() => {
              Scrapping();
              console.log(interns);
            }}
            onMouseUp={() => {
              setTimeout(() => {
                // After the second scraping function completes, execute code_outlook

                code_outlook();
                // console.log('==>>',code);
                setIsScrappingLaunched(true);
              }, 3000);
            }}
            color="inherit"
            aria-label="delete"
          >
            <RefreshIcon />
          </IconButton>
          {isScrappingLaunched && (
            <Typography>Verification Code : {code}</Typography>
          )}

          <div className="content">
            <DataInternsTable intern={interns} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              setInternDetails(false);
            }}
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
              ":hover": {
                bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
              },
            }}
          >
            Cancel
          </Button>
          {/* <Button onClick={deleteInternshipp} color="primary">
            Delete
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
