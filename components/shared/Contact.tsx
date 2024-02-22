import React from "react";
import { ContactType } from "@/types/ContactType";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

const Contact = ({ contact }: { contact: ContactType }) => {
  return (
    <div className="flex w-full justify-between bg-red-200 py-3 px-20 gap-10 rounded-2xl">
      <span className="text-center font-bold uppercase">
        {contact.firstName}
      </span>
      <span className="text-center font-bold uppercase">
        {contact.lastName}
      </span>
      <span className="text-center font-bold uppercase">
        {contact.phoneNumber}
      </span>
      <span className="text-center font-bold uppercase">{contact.email}</span>
      <span className="text-center font-bold uppercase">
        {contact.howDidYouHearAboutUs}
      </span>
      <span className="text-center font-bold uppercase">{contact.message}</span>
      <div className="flex items-center gap-5">
        <EditContact contact={contact} />
        <DeleteContact contact={contact} />
      </div>
    </div>
  );
};

export default Contact;
