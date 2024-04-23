
import { confirmAlert } from "react-confirm-alert"; // Import
import axios from "axios";
import { FormControl } from "@mui/material";

import React, { useState, useEffect } from "react";
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

function renderSidebarEvent(event, data) {
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
      <b>Candidate: {data.candidate}</b>
    </li>
  );
}

const Calendar = () => {
  const [eventGuid, setEventGuid] = useState(0);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [candidate, setCandidate] = useState("");
  const [Candidate, setCcandidate] = useState("");


// var count=0;
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
  // const [formData, setFormData] = useState({
  //   candidate: "",
  //   event_title: "",
  //   event_start_date: "",
  //   event_end_date: "",
    
  // });
  const [formData, setFormData] = useState([{
    candidate: "",
    event_title: "",
    event_start_date: "",
    event_end_date: "",
    
  }]);
  const handleDialogSubmit =async () => {
    setFormData({
      candidate: candidate,
      event_title: title,
      event_start_date: "2024-04-16",
      event_end_date: "2024-04-17",
    });
    if (true) {
      console.log(candidate,' ',title)
      try {
        const response = await fetch("http://127.0.0.1:8000/events/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });
        console.log('Data : ', formData);
        if (response.ok) {
          console.log("Data posted successfully!");
        } else {
          console.error("Failed to post data:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to post data:", error.message);
      }
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect();
      calendarApi.addEvent({
        id: createEventId(),
        title: title,
        candidate: candidate,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      // Clear form fields and close dialog
      setDialogOpen(false);
      setTitle("");
      setCandidate("");
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/candidates/");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleSelectChangeCandidate = (event) => {
    // setFormData({ ...formData, candidate: event.target.value });
    setCandidate(event.target.value)
  };
  const handleSelectChangeTitle = (event) => {
    setFormData({ ...formData, event_title: title });
  };
  return (
    <Stack direction={"row"} className="content">
      <Paper className="demo-app-sidebar">
        <h3 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h3>
        <ul>
          {currentEvents.map(
            (event) => renderSidebarEvent(event, event.extendedProps.candidate),
            // renderSidebarEvent(event, ),
            // console.log(candidate)
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
              value={formData.candidate}
              // onChange={(e) => setCandidate(e.target.value)}
              onChange={handleSelectChangeCandidate}
            >
              {data.map((candidate) => (
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
