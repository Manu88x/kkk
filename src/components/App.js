import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Import the user data

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass the necessary props to Home */}
      <Home 
        name={user.name} 
        city={user.city} 
        color={user.color}  // Using color from user object
      />
      <About 
        bio={user.bio} 
        github={user.links.github}  // Pass github URL from links object
        linkedin={user.links.linkedin}  // Pass linkedin URL from links object
      />
    </div>
  );
}

export default App;
