export type ContactType = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
  howDidYouHearAboutUs: string | null;
  message: string | null;
  createdAt?: Date;
};
