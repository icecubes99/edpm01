import React from "react";
import AddContact from "@/components/shared/AddContact";
import { prisma } from "@/utils/prisma";
import Contact from "@/components/shared/Contact";

async function getData() {
  const data = await prisma.contact.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      email: true,
      howDidYouHearAboutUs: true,
      message: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Home = async () => {
  const data = await getData();

  return (
    <div className="flex w-screen py-20 flex-col justify-center items-center ">
      <span className=" text-3xl  font-extrabold uppercase">CRUD FOR EDP</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2 ">Server Actions </span>
      </h1>

      <div className="flex flex-col justify-center items-center w-full ">
        <AddContact />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((contact, id) => (
            <div className="w-full" key={id}>
              <Contact contact={contact} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
