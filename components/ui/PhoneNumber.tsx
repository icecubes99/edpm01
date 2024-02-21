import React from "react";

interface PhoneNumberProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const PhoneNumber = ({ name, type, placeholder, value }: PhoneNumberProps) => {
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

export default PhoneNumber;
