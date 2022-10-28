import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./customBigCalendar.css"; 

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2022, 9, 28, 9, 0, 0),
    end: new Date(2022, 9, 28, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "MS training 1",
    allDay: true,
    start: new Date(2022, 9, 28, 14, 0, 0),
    end: new Date(2022, 9, 28, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: "MS training 2",
    allDay: true,
    start: new Date(2022, 9, 28, 14, 0, 0),
    end: new Date(2022, 9, 28, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 4,
    title: "MS training 3",
    allDay: true,
    start: new Date(2022, 9, 28, 14, 0, 0),
    end: new Date(2022, 9, 28, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 5,
    title: "MS training 4",
    allDay: true,
    start: new Date(2022, 9, 28, 14, 0, 0),
    end: new Date(2022, 9, 28, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 6,
    title: "Team lead meeting",
    start: new Date(2022, 9, 28, 5, 30, 0),
    end: new Date(2022, 9, 28, 6, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2022, 9, 27, 7, 0, 0),
    end: new Date(2022, 9, 27, 10, 30, 0),
    resourceId: 4,
  },
];

function App() {
 
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default App;