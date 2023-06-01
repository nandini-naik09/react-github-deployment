import { Component } from "react";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Employee details:",
      EmployeeList: [
        { id: 10, name: "Rahul", salary: 12000 },
        { id: 11, name: "Mohini", salary: 20000 },
        { id: 12, name: "Harshali", salary: 15000 },
      ],
    };
  }

  doChange() {
    this.setState({
      title: "Employee List here...",
    });
  }

  UpdateSalary(){
    this.setState({
      // EmployeeList: EmployeeList[1].salary +10000
    });
  }


  render() {
    return (
      <div>
        <h1>Employee (Class Component)</h1>
        <h2>
          {this.state.title}
          <button onClick={() => {  this.doChange(); }}>
            Change Title
          </button>
          <button onClick={() => {  this.UpdateSalary(); }}>
            Change Salary
          </button>
        </h2>

        <ul>
          {this.state.EmployeeList.length
            ? this.state.EmployeeList.map((item) => (
                <li key={item.id}>
                  {item.id} | {item.name}| {item.salary}
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default Employee;
