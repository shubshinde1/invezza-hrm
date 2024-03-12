import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MenuTabs from "./Menutabs";

export default function EditEmployee({ updateEmployee }) {
  const {
    empid,
    ename: initialName,
    designation: initialDesignation,
    jdate: initialJoiningDate,
    status: initialStatus,
  } = useParams();

  // State variables to store the edited values
  const [editedName, setEditedName] = useState(initialName);
  const [editedDesignation, setEditedDesignation] =
    useState(initialDesignation);
  const [editedJoiningDate, setEditedJoiningDate] =
    useState(initialJoiningDate);
  const [editedStatus, setEditedStatus] = useState(initialStatus);

  // Function to handle saving the edited information
  const handleSave = () => {
    // Call the updateEmployee function from the parent component
    updateEmployee(
      empid,
      editedName,
      editedDesignation,
      editedJoiningDate,
      editedStatus
    );
    // You can also add logic here to navigate back or perform other actions after saving
  };

  return (
    <div>
      <MenuTabs />
      <h1>Edit Employee</h1>
      <p>Employee ID: {empid}</p>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Designation:
          <input
            type="text"
            value={editedDesignation}
            onChange={(e) => setEditedDesignation(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Joining Date:
          <input
            type="text"
            value={editedJoiningDate}
            onChange={(e) => setEditedJoiningDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <select
            value={editedStatus}
            onChange={(e) => setEditedStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Inactive</option>
            <option>Removed</option>
          </select>
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
