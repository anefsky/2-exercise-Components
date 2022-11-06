import React from "react";
import { createRoot } from "react-dom/client";
import ContactCard from "./components/ContactCard.jsx";
import Button from "./components/Button.jsx";
import contacts from "./assets/contacts.js";
import buttons from "./assets/buttons.js";

const pageStyles = {
  display: "flex",
  gap: "2rem",
};

const Exercise = () => {
  return (
    <div style={pageStyles}>
      <div>
        <h2>Contact Card</h2>
        {contacts.map(data => 
          <ContactCard name={data.name} job={data.job} email={data.email} />)}
        </div>
      <div>
        {buttons.map(data =>
          <Button color={data.color}>{data.label}</Button>
        )}
      </div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Exercise />);
