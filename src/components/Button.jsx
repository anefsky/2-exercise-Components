import React from 'react';

export default function Button({color, children}) {
    return (
        <button
            style={{
                border: "2px solid",
                color: color,
                borderColor: color,
                background: "white",
                borderRadius: 4,
                padding: 16,
                margin: 8,
            }}
    >
        {children}
      </button>
    )
}
