import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} JuniorDevs All rights reserverd</p>
    </footer>
  );
}

export default Footer;
