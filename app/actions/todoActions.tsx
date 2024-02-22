"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const email = formData.get("email") as string;
  const howDidYouHearAboutUs = formData.get("howDidYouHearAboutUs") as string;

  if (
    !input ||
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !email ||
    !howDidYouHearAboutUs
  ) {
    return;
  }

  await prisma.contact.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      howDidYouHearAboutUs: howDidYouHearAboutUs,
      message: input,
    },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newMessage") as string;
  const firstName = formData.get("newFirstName") as string;
  const lastName = formData.get("newLastName") as string;
  const phoneNumber = formData.get("newPhoneNumber") as string;
  const email = formData.get("newEmail") as string;
  const howDidYouHearAboutUs = formData.get(
    "newHowDidYouHearAboutUs"
  ) as string;
  const id = formData.get("id") as string;

  await prisma.contact.update({
    where: {
      id: id,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      howDidYouHearAboutUs: howDidYouHearAboutUs,
      message: input,
    },
  });

  revalidatePath("/");
}

export async function deleteContact(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.contact.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}
