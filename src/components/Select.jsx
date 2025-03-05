import React from "react";
import { useState } from "react";
import "../pages/Section.css";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Select = ({ label, dropdown = [] }) => {
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
  const [federalDropdownOpen, setFederalDropdownOpen] = useState(false);

  const handleFederalStateSelect = (state) => {
    setFilters({ ...filters, federalState: state });
    setFederalDropdownOpen(false);
  };
  return (
    <div className="filter-item" style={{ position: "relative" }}>
      <label>{label}</label>
      <div
        className="custom-dropdown"
        onClick={() => setFederalDropdownOpen(!federalDropdownOpen)}
        style={{
          padding: "12px",
          border: "0.5px  ",
          borderRadius: "1px solid #9A9292",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#909295",
          borderBottom: "2px solid #9A92git init92",
          // background:"#fbfcfe"
        }}
      >
        <span>{filters.federalState || "Federal State"}</span>
        <span
          style={{
            transform: federalDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <MdOutlineArrowDropUp />
        </span>
      </div>
      {federalDropdownOpen && (
        <div
          className="federalDrop"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            zIndex: 10,
          }}
        >
          {dropdown.length > 0 &&
            dropdown.map((state, index) => (
              <div
                key={index}
                onClick={() => handleFederalStateSelect(state)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderBottom: "1px solid #F0F0F0",
                }}
              >
                {state}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Select;
