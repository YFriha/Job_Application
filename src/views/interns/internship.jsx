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
  Box,
} from "@mui/material";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import InternDetails from "./InternshipDetails";
import Switcher from "./Switcher";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import { ProgressSpinner } from "primereact/progressspinner";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import  { useContext } from "react";

import { connect } from "react-redux"; // Import connect from react-redux
import { setUserId } from "../../Redux/actions"; // Import your action


const SwitcherContext = React.createContext();

const InternshippsDemo=()=> {
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
  const [state, statechange] = useState(false);
  const [internshipSubject, setInternshipSubject] = useState("");
  const [email, setEmail] = useState("");
  const [internshipDeadline, setInternshipDeadline] = useState("");
  const [internshipLocation, setInternshipLocation] = useState("");
  const [internDetails, setInternDetails] = useState(false);
  const [isScrappingLaunched, setIsScrappingLaunched] = useState(false);
  const [code, setCode] = useState("");
  const [rowEmail, setRowEmail] = useState("");
  const [emailForSending, setEmailForSending] = useState("");

  // const switcher = useContext(SwitcherContext);
  const [switcherValue, setSwitcherValue] = useState(true);
  const userId = getUserIdFromAccessToken();

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
    console.log('user id is : ',userId)
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

  function getUserIdFromAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("No access token found in local storage");
      return null;
    }

    try {
      const decodedToken = parseJwt(accessToken);
      const userId = decodedToken.user_id; // Adjust according to your JWT payload structure
      return userId;
    } catch (error) {
      console.error("Failed to decode access token", error);
      return null;
    }
  }

  function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    console.log('payload : ', jsonPayload)

    return JSON.parse(jsonPayload);
  }


  useEffect(() => {
    console.log("verif Code is ", code);
  }, [code]);
  const LoadIntern = async (id) => {
    try {
      console.log('id is : ',id)
      const response = await fetch(
        `${apiUrl}ai/all_Internship_Interns/${id}/`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
          },
        }
      );
      console.log("response : ", response);
      if (response.status === 401) {
        console.log("Unauthorized. Redirecting to login page...");
        navigate("/login");
        // Stop execution of the function after redirecting
        return; // or throw new Error('Unauthorized'); depending on your requirement
      }
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
        recruiter: userId,
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
      }
      const result = await response.json();
      console.log("after Scrapping : ", result);
      setIsScrappingLaunched(false)
      statechange(false)
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
      const response = await fetch(`${apiUrl}ai/internships_by_recruiter/${userId}/`, {
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
  const [visible1, setVisible1] = useState(false);
  const [position, setPosition] = useState("right");
  const [subject, setSubject] = useState("");
  const show = () => {
    setPosition("right");
    setVisible1(true);
  };
  //   function MyDialog() {

  //     const footerContent = (
  //         <div>
  //             <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
  //             <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
  //         </div>
  //     );

  //     return (
  //         <div className="card">
  //             <div className="flex flex-wrap justify-content-center gap-2 mb-2">
  //                 <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
  //                 <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
  //             </div>
  //             <div className="flex flex-wrap justify-content-center gap-2 mb-2">
  //                 <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
  //                 <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
  //                 <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
  //             </div>
  //             <div className="flex flex-wrap justify-content-center gap-2">
  //                 <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
  //                 <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
  //                 <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
  //             </div>

  //             <Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
  //                 <p className="m-0">
  //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  //                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  //                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //                 </p>
  //             </Dialog>
  //         </div>
  //     )
  // }
  // const [subject, setSubject] = useState('');
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [myMail, setMyMail] = useState("");
  const [status, setStatus] = useState("");
  const sendMessage = async (subject, email) => {
    try {
      const response = await fetch(`${apiUrl}ai/send-email/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject:subject,
          message:emailForSending,
          recipient:email,
          // myMail,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully");
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.toString()}`);
    }
  };
  // const [rowEmail, setRowEmail]=useState('');
  const openDialog = (row_email) => {
    console.log("open Dialog ==> ", row_email);

    setRowEmail(row_email.email);
    setInternDetails(false);
    setEmailForSending(`
    Subject: Congratulations! You've Been Accepted for an Internship Opportunity
    
    Dear ${row_email.name},
    
    I hope this email finds you well.
    
    We are delighted to inform you that after careful consideration of your application, you have been selected to join our team as an intern. Congratulations on being accepted for the internship opportunity .
    
    Your enthusiasm, qualifications, and passion for ${row_email.subject} stood out among the many applicants we received. We believe that your skills and experiences will greatly contribute to our team and that you will benefit immensely from the learning opportunities provided during your internship.
    
    Here are a few details about your internship:
    - Internship Position: [Position Title]
    - Start Date: [Start Date]
    - Duration: [Duration of Internship]
    - Location: [Office Location or Remote]
    
    Before your start date, we will send you more information about your role, responsibilities, and the onboarding process. In the meantime, please feel free to reach out if you have any questions or require further clarification.
    
    We are excited to welcome you to our team and look forward to working together. Congratulations once again, and we wish you a fulfilling and enriching experience as an intern .
    
    Best regards,
    `);
    // handleClose()
    setSubject(`${row_email.subject}`);
    sendMessage(row_email.subject, row_email.email);
    setVisible1(true);
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
        maxWidth="md"
        fullWidth
      >
       <div class="row d-flex align-items-center">
            <div class="col-md-6">
        <DialogTitle>details</DialogTitle>
            </div>
            <div class="col-md-6 text-right mr-2">
            {state ? (
                <div className="d-flex align-items-center justify-content-end">
                    <strong>Scrapping...</strong>
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Scrapping...</span>
                    </div>
                </div>
            ) : null}
            </div>
        </div>
        
        <DialogContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            sx={{
              color: "#009688",
            }}
            onClick={() => {
                  statechange(true);
              Scrapping();
              console.log(interns);
            }}
            onMouseUp={() => {
              setTimeout(() => {
                code_outlook();
                setIsScrappingLaunched(true);
              }, 3000);
            }}
            color="inherit"
            aria-label="delete"
          >
              <RefreshIcon />
          </IconButton>
          <div style={{ marginLeft: '10px' }}>
              {isScrappingLaunched && (
                  <Typography>Verification Code: {code}</Typography>
              )}
          </div>
      </div>
          <div className="content">
            <DataInternsTable
              intern={interns}
              openDialog={openDialog}
              rowEmail={rowEmail}
            />
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
      <Dialog
        open={visible1}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            width: "50vw",
            position: "absolute",
            right: 0, // Adjust this value as needed
          },
        }}
        // draggable={false}
        // resizable={false}
      >
        <DialogTitle>Send Message</DialogTitle>
        <DialogContent>
          <Typography
            fontSize={14}
            fontFamily={"sans-serif"}
            sx={{
              paddingBottom: "10px",
            }}
            // color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
          >
            Email : {rowEmail}
          </Typography>
          <TextField
            variant="outlined"
            label="Subject"
            id="subject"
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          ></TextField>
          {/* <Box flexGrow={9} borderRadius={8}></Box> */}
          <InputTextarea
            value={emailForSending}
            onChange={(e) => setEmailForSending(e.target.value)}
            rows={5}
            cols={80}
            style={{ resize: "none" }}
          />
        </DialogContent>

        <DialogActions>
          {/* <Button onClick={sendMessage} color="primary">
            send
          </Button> */}

          <Button
            variant="contained"
            onClick={() => {
              setVisible1(false);
              setInternDetails(true);
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
          <IconButton
            sx={{
              color: "#9f9f9f",
            }}
            onClick={sendMessage}
            color="inherit"
            aria-label="delete"
          >
            <SendRoundedIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userId: state.userId,
});

const mapDispatchToProps = {
  setUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(InternshippsDemo);
