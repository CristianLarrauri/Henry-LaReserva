import React, { useEffect, useState } from "react";
import "../App.css";

//EL LOCAL STORAGE FUNCIONA, FALTA HACER EL DARK MODE

export default function LocalStorage() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("dark")) || false;
  };

  const [dark, setDark] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={dark ? "darkMode" : ""}>
      <div className="bgColor">
        <p>Dark Mode</p>
        <input type="checkbox" onChange={() => setDark(!dark)} />
      </div>
    </div>
  );
}
