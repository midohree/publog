import BlogSidebar from "@theme/BlogSidebar";
import React from "react";

const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: "2px",
      color: "#fff",
      padding: "0.2rem",
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

export default Highlight;
