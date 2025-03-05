import React, { useState } from "react";
import Table from "../components/Table";
import "./Section.css";
import { MdOutlineArrowDropUp } from "react-icons/md";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CiSearch } from "react-icons/ci";
import Select from "../components/Select";
import { serviceType } from "../components/assests";
import {
  Assigned,
  Completed,
  federalStates,
  Published,
} from "../components/assests";

const Schedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState(null);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    federalState: "",
    serviceType: "driving and seating services",
    assigned: "",
    published: "",
    completed: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="dashboard">
      <div className="filter-section">
        <div className="filter-row">
          <div className="filter-item">
            <label>start of service</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // label="Start of Service"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                format="DD.MM.YYYY"
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <div className="filter-item">
            <label>Service</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label=""
                value={value}
                onChange={(newValue) => setValue(newValue)}
                format="DD.MM.YYYY"
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <Select label="Federal State" dropdown={federalStates} />
          <Select label="service type" dropdown={serviceType} />
        </div>
        <div className="filter-row">
          <Select label="assigned" dropdown={Assigned} />
          <Select label="published" dropdown={Published} />
          <Select label="completed" dropdown={Completed} />
        </div>
        <div className="button-row">
          <button className="create-btn">+ Create new service</button>
          <button className="search-btn">Seek</button>
        </div>
      </div>
      <Table />
    </div>
  );
};
export default Schedule;
