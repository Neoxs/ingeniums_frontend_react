import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableBody = ({ employeeData, removeEmployee }) => {
  return (
    <tbody>
      {employeeData.map((employee, index) => (
        <tr key={index}>
          <td>{employee.name}</td>
          <td>{employee.job}</td>
          <td>
            <button onClick={() => removeEmployee(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ employeeData, removeEmployee }) => {
  return (
    <table>
      <TableHeader />
      <TableBody employeeData={employeeData} removeEmployee={removeEmployee} />
    </table>
  );
};

export default Table;
