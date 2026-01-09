import { useState, useEffect } from "react";

const navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll);}
  });
  return (
    <div className="navbar py-7 flex items-center justify-between bg-blue-500 px-6">
      <div className="logo">
        <h1 className="text-3xl font-bold">Portofolio Fauzan</h1>
      </div>
      <ul className={`menu flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 -top-10 opacity-0 md:opacity-100 md:top-0${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        <li className="text-lg font-medium">
          <a href="#beranda">Beranda</a>
        </li>
        <li className="text-lg font-medium">
          <a href="#projek">Projek</a>
        </li>
        <li className="text-lg font-medium">
          <a href="#tentang">Tentang</a>
        </li>
        <li className="text-lg font-medium">
          <a href="#pengalaman">Pengalaman</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
