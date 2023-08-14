import logo from './logo.svg';
import React from "react";
import './App.css';
import Main from "./Components/Main/Main.js"
import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'lYfPZsQ080A8o088DYRUwSb6BcK7FDX6VVaN0XuW', // This is your Application ID
  '16ahu6avtaOYg3oe7dtUpfPy2ZKbkolsfBkIkT1y' // This is your Javascript key
);

function App() {
  return <Main/>;
}

export default App;
