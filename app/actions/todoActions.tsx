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
}
