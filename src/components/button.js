import React from "react";

export function Button() {
  return (
    <div>
      <button
        style={{
          border: "2px solid",
          color: "red",
          borderColor: "red",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Cancel
      </button>
      <button
        style={{
          border: "2px solid",
          color: "green",
          borderColor: "green",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Confirm
      </button>
    </div>
  );
}
