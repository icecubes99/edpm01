import React from "react";

interface EmailProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Email = ({ name, type, placeholder, value }: EmailProps) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200 "
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default Email;
