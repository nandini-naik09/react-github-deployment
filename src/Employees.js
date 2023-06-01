import React, { useState } from "react";

function Employees() {
  const [title, setTitle] = useState("Employee Details:");
  
  const [EmployeeList] = useState([
    { id: 10, name: "Kiran", salary: 12000 },
    { id: 11, name: "Yash", salary: 20000 },
    { id: 12, name: "Ishwak", salary: 15000 },
  ]);

  return (
    <div>
         <h1>Employee (Function Component)</h1>
      <h2>{title}
      <button onClick={() => setTitle("Employee List Here...")}>
        {" "}
        Change Title{" "}
      </button> </h2>
      <ul>
        {EmployeeList.length
          ? EmployeeList.map((item) => (
              <li key={item.id}>
                {item.id} | {item.name}| {item.salary}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Employees;
