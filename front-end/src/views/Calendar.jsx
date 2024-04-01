// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import { Paper, Stack } from "@mui/material";
// import { formatDate } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
import { confirmAlert } from "react-confirm-alert"; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import "./calendar.css";

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }

// function renderSidebarEvent(event) {
//   return (

//     <li key={event.id}>
//       <b>
//         {formatDate(event.start, {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })}
//       </b>
//       <i>{event.title}</i>
//     </li>
//   );
// }

// const Calendar = () => {
//   const[eventGuid, setEventGuid]  = useState(0);
//   const [weekendsVisible, setweekendsVisible] = useState(true);
//   const [currentEvents, setcurrentEvents] = useState([]);

//   const handleWeekendsToggle = () => {
//     setweekendsVisible(!weekendsVisible);
//   };

//   function createEventId() {
//     console.log("the event : "+eventGuid)
//     return String(setEventGuid(eventGuid+1));
//   }

//   // const handleDateSelect = (selectInfo) => {
//   //   let title = prompt("Please enter a new title for your event");
//   //   let candidate=prompt("Please enter the candidate's name");
//   //   let calendarApi = selectInfo.view.calendar;

//   //   calendarApi.unselect();

//   //   if (title) {
//   //     calendarApi.addEvent({
//   //       id: createEventId(),
//   //       title,
//   //       start: selectInfo.startStr,
//   //       end: selectInfo.endStr,
//   //       allDay: selectInfo.allDay,
//   //     });
//   //     console.log("this is the start : "+selectInfo.startStr)
//   //     console.log("this is the end : "+selectInfo.endStr)
//   //     console.log("object : "+title)
//   //     console.log("candidate : "+candidate)
//   //   }
//   // };
//   const handleDateSelect = (selectInfo) => {
//     let titleAndCandidate = prompt("Please enter a new title for your event and the candidate's name (separated by a comma)");

//     if (titleAndCandidate) {
//       const [title, candidate] = titleAndCandidate.split(',').map(item => item.trim());
//       let calendarApi = selectInfo.view.calendar;

//       calendarApi.unselect();

//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         candidate,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay,
//       });

//       console.log("Event title: " + title);
//       console.log("Candidate's name: " + candidate);
//       console.log("Start date: " + selectInfo.startStr);
//       console.log("End date: " + selectInfo.endStr);
//     }
//   };

//   const handleEventClick = (clickInfo) => {
//     // if (
//     //   confirmAlert({
//     //     title: 'Confirm to delete',
//     //     message: 'Are you sure you want to delete this even?',})
//     // ) {
//     //   clickInfo.event.remove();
//     // }
//     confirmAlert({
//       title: 'Confirm to delete',
//       message: 'Are you sure you want to delete this event?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => {
//             clickInfo.event.remove();
//           }
//         },
//         {
//           label: 'No',
//           onClick: () => {}
//         }
//       ]
//     });
//   };
//   // const handleEventClick = (clickInfo) => {
//   //   if (window.confirm('Are you sure you want to delete this event?')) {
//   //     clickInfo.event.remove();
//   //   }
//   // };

//   const handleEvents = (events) => {
//     setcurrentEvents(events);
//     // console.log("the event : ")
//   };

//   return (
//     <Stack direction={"row"} className="content">
//       <Paper className="demo-app-sidebar">
//         <h3 style={{ textAlign: "center" }}>All Events ({currentEvents.length})</h3>
//         <ul>{currentEvents.map(renderSidebarEvent)}</ul>
//       </Paper>

//       <div className="demo-app-main">
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: "dayGridMonth,timeGridWeek,timeGridDay",
//           }}
//           initialView="dayGridMonth"
//           editable={true}
//           selectable={true}
//           selectMirror={true}
//           dayMaxEvents={true}
//           weekends={weekendsVisible}
//           select={handleDateSelect}
//           eventContent={renderEventContent}
//           eventClick={handleEventClick}
//           eventsSet={handleEvents}
//         />
//       </div>
//       {console.log(renderEventContent)}

//     </Stack>
//   );
// };

// export default Calendar;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Paper,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./calendar.css";
import { Dropdown } from "reactstrap";
import {
  // TextField,
  // DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const  candidates=[
  {
    "id": 1,
    "first_name": "Yassir",
    "last_name": "Friha",
    "email": "yassir.friha@example.com",
    "phone": "(424) 8787997",
    "image": "https://picsum.photos/400",
    "step": "Phone Screening",
    "city": "Los Angeles",
    "address": "2 Vermont Junction"
  },
  {
    "id": 2,
    "first_name": "Oussama",
    "last_name": "Akaabour",
    "email": "Ou.akaabour@example.com",
    "phone": "(424) 8787997",
    "image": "https://picsum.photos/400",
    "step": "Phone Screening",
    "city": "Los Angeles",
    "address": "2 Vermont Junction"
  },
  {
    "id": 3,
    "first_name": "younes",
    "last_name": "Ouajil",
    "email": "ouajil.younes@example.com",
    "phone": "(424) 8787997",
    "image": "https://picsum.photos/400",
    "step": "Phone Screening",
    "city": "Los Angeles",
    "address": "2 Vermont Junction"
  },
  {
    "id": 4,
    "first_name": "Alysia",
    "last_name": "Ivashechkin",
    "email": "aivashechkin0@example.com",
    "phone": "(424) 8787997",
    "image": "https://picsum.photos/400",
    "step": "Phone Screening",
    "city": "Los Angeles",
    "address": "2 Vermont Junction"
  },]
  function renderSidebarEvent(event, candidate) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
        <b>Candidate: {candidate.first_name}</b>
      </li>
    );
  }
  

const Calendar = () => {
  const [eventGuid, setEventGuid] = useState(0);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [candidate, setCandidate] = useState("");

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  function createEventId() {
    return String(setEventGuid(eventGuid + 1));
  }
  const [selectInfo, setSelectInfo] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setDialogOpen(true);
    setSelectInfo(selectInfo); // Add this line to store selectInfo in state
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = () => {
    if (title && candidate) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect();

      calendarApi.addEvent({
        id: createEventId(),
        title,
        candidate,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });

      console.log("Event title: " + title);
      console.log("Candidate's name: " + candidate);
      console.log("Start date: " + selectInfo.startStr);
      console.log("End date: " + selectInfo.endStr);

      setDialogOpen(false);
      setTitle("");
      // setCandidate("");
    }
  };

  const handleEventClick = (clickInfo) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this event?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            clickInfo.event.remove();
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <Stack direction={"row"} className="content">
      <Paper className="demo-app-sidebar">
        <h3 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h3>
        <ul>
  {currentEvents.map((event) =>
    renderSidebarEvent(event, event.extendedProps.candidate),
    // setCandidate(event.extendedProps.candidate)

    
  )}
</ul>
      </Paper>

      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
  <TextField
    autoFocus
    margin="dense"
    label="Event Title"
    fullWidth
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
 <FormControl fullWidth margin="dense">
  <InputLabel id="candidate-label">Candidate's Name</InputLabel>
  <Select
    labelId="candidate-label"
    id="candidate"
    value={candidate}
    onChange={(e) => setCandidate(e.target.value)}
  >
    {candidates.map((candidate) => (
      <MenuItem key={candidate.id} value={candidate.id}>
        {`${candidate.first_name} ${candidate.last_name}`}
      </MenuItem>
    ))}
  </Select>
</FormControl>
</DialogContent>


        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Calendar;
