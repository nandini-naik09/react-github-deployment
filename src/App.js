import React from "react";
import User from "./User";
import Users from "./Users";
import Employee from "./Employee";
import Employees from "./Employees";
// import LifeCycle from "./Lifecycle";

export default function App() {
  return (
    <div>
      {/* <h1>App Component</h1> */}
      {/* Function component */}

      <User name="Nandini Naik" age="30" />
      <User name="Aditya Naik"> Delhi </User>

      {/* ********************************************* */}

      {/* class component */}
      {/* <Users name="Ishwak Naik" age="3">Pune</Users> */}

      {/* <Employee/>

      <Employees/> */}

{/* <LifeCycle/> */}

    </div>
  );
}
