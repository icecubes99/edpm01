import React from "react";

interface HowDidYouHearAboutUsProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const HowDidYouHearAboutUs = ({
  name,
  type,
  placeholder,
  value,
}: HowDidYouHearAboutUsProps) => {
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

export default HowDidYouHearAboutUs;
