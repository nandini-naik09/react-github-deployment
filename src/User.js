import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <div>
      <h3>{props.header}</h3>
      #--------------------------------------------------------------------------------------------------------#
      <br />
      <h4>{props.propFunc("React Developer")}</h4>
      <h1>User Component: Function Component</h1>
      <p>
        Name: {props.name} | Age:{props.age}| City: {props.children}
      </p>
      #--------------------------------------------------------------------------------------------------------#
      <br />
      <h3>{props.footer} </h3>
      ************************************************************************
      <br />
    </div>
  );
}

User.propsTypes = {
  header: PropTypes.string,
  footer: PropTypes.string,
  anyNumber: PropTypes.number,
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool,
  propFunc: PropTypes.func,
  age:PropTypes.number,
  children:PropTypes.string

};

User.defaultProps = {
  header: "Header Here",
  footer: "Footer Here",
  anyNumber: "34",
  PropArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (val) {
    return "Welcome " + val;
  },
  age:18,
  children:"Pune"
};

export default User;
