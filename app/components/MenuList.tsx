import React from "react";

const MenuList = ({ menus }: { menus: string[] }) => {
  return (
    <div className="px-6 w-[400px]  flex flex-col items-start absolute top-[145%] bg-white text-black">
      {menus.map((menu, idx) => (
        <span key={idx}>{menu}</span>
      ))}
    </div>
  );
};

export default MenuList;
