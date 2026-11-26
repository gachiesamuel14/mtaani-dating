export type County =
  | "Nairobi"
  | "Mombasa"
  | "Kisumu"
  | "Kiambu"
  | "Nakuru"
  | "Uasin Gishu"
  | "Kisii"
  | "Nyeri"
  | "Machakos"
  | "Kajiado"
  | "Other";

export type Gender = "male" | "female" | "other";

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  county: County;
  town?: string;
  bio: string;
  interests: string[];
  photos: string[];
  lookingFor: Gender | "everyone";
  religion?: string;
  tribe?: string;
  verified: boolean;
  lastActive: string;
  distanceKm?: number;
}

export interface Match {
  id: string;
  user: UserProfile;
  matchedAt: string;
  lastMessage?: string;
  unread: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  sentAt: string;
  read: boolean;
}

export const KENYA_COUNTIES: County[] = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Kiambu",
  "Nakuru",
  "Uasin Gishu",
  "Kisii",
  "Nyeri",
  "Machakos",
  "Kajiado",
  "Other",
];

export const INTERESTS = [
  "Travel",
  "Music",
  "Football",
  "Cooking",
  "Church",
  "Business",
  "Gym",
  "Reading",
  "Dancing",
  "Tech",
  "Farming",
  "Movies",
  "Fashion",
  "Photography",
  "Hiking",
];
