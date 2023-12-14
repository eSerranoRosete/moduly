import React from "react";

export const UserDropdown = () => {
  return (
    <button className="flex items-center text-left gap-2">
      <div className="rounded-full w-10 h-10 bg-blue-600/40  text-blue-300 flex items-center justify-center">
        ES
      </div>
      <div>
        <div className="text-sm">Eduardo Serrano</div>
        <div className="text-xs text-dark-200">eserranor98@gmail.com</div>
      </div>
    </button>
  );
};
