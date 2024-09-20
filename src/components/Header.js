import React from "react";
import config from "../content.config.js";

export default function Header() {
  return (
    <header className="p-4 md:px-20 md:py-6 flex justify-between items-center leading-tight">
      <h1 className="text-[32px] leading-[35.2px] font-bold text-[#78350F]">
        {config.header.title}
      </h1>

      <nav className="hidden md:flex flex-row items-center gap-4 text-[#78350F] text-[16px] font-medium leading-6 tracking-wide">
        {config.header.navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:text-opacity-80 transition duration-200"
          >
            {item.text}
          </a>
        ))}
        <button className="px-7 py-3 rounded-md border-2 border-[#78350F] text-[#78350F] hover:bg-[#FBBF24] hover:text-white transition duration-200">
          {config.header.buttonText}
        </button>
      </nav>

      <button className="md:hidden text-2xl">☰</button>
    </header>
  );
}
