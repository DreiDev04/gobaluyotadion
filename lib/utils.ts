import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import rawData from "@/data/teams.json";
import { teamSchema, Team } from "@/types/teams";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const teamData: Team = teamSchema.parse(rawData);

export const getDetails = (memberId: string) => {
  const allMembers = [...teamData.partners, ...teamData.associates];

  return allMembers.find((member) => {
    return member.name.toLowerCase().replace(/[^a-z0-9]/g, "-") === memberId;
  });
};
