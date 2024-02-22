"use client";
import React from "react";
import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import FirstName from "../ui/FirstName";
import LastName from "../ui/LastName";
import PhoneNumber from "../ui/PhoneNumber";
import Email from "../ui/Email";
import HowDidYouHearAboutUs from "../ui/HowDidYouHearAboutUs";

import { useState } from "react";
import { ContactType } from "@/types/ContactType";
import { BiEdit } from "react-icons/bi";

const EditContact = ({ contact }: { contact: ContactType }) => {
  const [editContact, setEditContact] = useState(false);
  const [formValues, setFormValues] = useState(contact);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setEditContact(!editContact);
  };

  const handleSubmit = () => {
    setEditContact(false);
  };
  return (
    <div className="flex gap-5 items-center ">
      <Button text={<BiEdit />} onClick={handleEdit} actionButton />

      {editContact ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input type="hidden" name="id" value={contact.id} />

          <div className="flex flex-col justify-center">
            <FirstName
              name="newFirstName"
              type="text"
              placeholder="Edit First Name.."
            />
            <LastName
              name="newLastName"
              type="text"
              placeholder="Edit Last Name.."
            />
            <PhoneNumber
              name="newPhoneNumber"
              type="text"
              placeholder="Edit Phone Number.."
            />
            <Email name="newEmail" type="text" placeholder="Edit Email.." />
            <HowDidYouHearAboutUs
              name="newHowDidYouHearAboutUs"
              type="text"
              placeholder="Edit How Did You Hear About Us.."
            />
            <Input name="newMessage" type="text" placeholder="Edit Message.." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditContact;
