import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return <button onClick= {tickle}>Tickle me!</button>;
}

export default Tickler;

// function Clickable() {
//   function handleClick() {
//     console.log("I was clicked!");
//   }
//   return <button onClick={handleClick}>Click me!</button>;
// }

// export default Clickable;