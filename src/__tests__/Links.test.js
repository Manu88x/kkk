import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";  // Import About component
import user from "../data/user"; // Import user data for props

// Test if the "Links" heading is rendered
test("renders the h3 with the text 'Links'", () => {
  render(<About 
            bio={user.bio} 
            github={user.links.github} 
            linkedin={user.links.linkedin} 
          />);
  
  expect(screen.queryByText("Links")).toBeInTheDocument();
});

// Test if the GitHub URL is rendered
test("displays the URL of a Github link passed down as a prop", () => {
  render(<About 
            bio={user.bio} 
            github={user.links.github} 
            linkedin={user.links.linkedin} 
          />);
  
  expect(screen.queryByText(user.links.github)).toBeInTheDocument();
  expect(screen.getByText(user.links.github)).toHaveAttribute("href", user.links.github);
});

// Test if the LinkedIn URL is rendered
test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<About 
            bio={user.bio} 
            github={user.links.github} 
            linkedin={user.links.linkedin} 
          />);
  
  expect(screen.queryByText(user.links.linkedin)).toBeInTheDocument();
  expect(screen.getByText(user.links.linkedin)).toHaveAttribute("href", user.links.linkedin);
});

