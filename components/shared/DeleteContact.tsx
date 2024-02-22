"use client";
import React from "react";
import { deleteContact, edit } from "@/app/actions/todoActions";
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
import { BsFillTrashFill } from "react-icons/bs";

const DeleteContact = ({ contact }: { contact: ContactType }) => {
  return (
    <Form action={deleteContact}>
      <Input type="hidden" name="id" value={contact.id} />
      <Button actionButton text={<BsFillTrashFill />} type="submit" />
    </Form>
  );
};

export default DeleteContact;
