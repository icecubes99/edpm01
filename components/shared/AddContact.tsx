import React from "react";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { create } from "@/app/actions/todoActions";
import FirstName from "../ui/FirstName";
import LastName from "../ui/LastName";
import PhoneNumber from "../ui/PhoneNumber";
import Email from "../ui/Email";
import HowDidYouHearAboutUs from "../ui/HowDidYouHearAboutUs";

const AddContact = () => {
  return (
    <Form
      action={create}
      className="w-full m-auto flex flex-col justify-center items-center"
    >
      <div className="flex w-1/2 flex-col items-center gap-5">
        <FirstName name="firstName" type="text" placeholder="First Name" />
        <LastName name="lastName" type="text" placeholder="Last Name" />
        <PhoneNumber
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
        />
        <Email name="email" type="text" placeholder="Email" />
        <HowDidYouHearAboutUs
          name="howDidYouHearAboutUs"
          type="text"
          placeholder="How Did You Hear About Us?"
        />
        <Input name="input" type="text" placeholder="Message" />
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddContact;
