import React from "react";

function Footer() {
  const d = new Date();
  const Year = d.getFullYear();

  return (
    <footer>
      <p>copyright ⓒ {Year}</p>;
    </footer>
  );
}

export default Footer;
