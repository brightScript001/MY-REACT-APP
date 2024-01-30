import React from "react";
import "./App.css";

function MyButton() {
  return <button className="btn btn-primary">Click me!</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>My First React App</h1>
      <MyButton />
      <h2>Welcome, Nice to meet you</h2>
      <MyButton />
    </div>
  );
}
