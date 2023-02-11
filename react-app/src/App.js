import React, { useState } from "react";

import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const initialState = [
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ];
  const [state, setState] = useState(initialState);

  const removeEmployee = (index) => {
    setState(
      state.filter((emp, i) => {
        return i !== index;
      })
    );
  };

  const handleSubmit = (employee) => {
    setState([...state, employee]);
  };

  return (
    <div className="container">
      <Table employeeData={state} removeEmployee={removeEmployee} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
