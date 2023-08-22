import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="root-header sticky top-0">
      <Navbar />
    </header>
  );
};

export default Header;