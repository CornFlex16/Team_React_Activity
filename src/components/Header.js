import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <h1 className="text-center">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
