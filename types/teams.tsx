import { z } from "zod";

const baseMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  type: z.enum(["partner", "associate", "staff"]),
  image: z.string(),
});

export const partnerSchema = baseMemberSchema.extend({
  type: z.literal("partner"),
  specialty: z.string(),
  education: z.string(),
  largeImage: z.string(),
  educationDetails: z.object({
    LawSchool: z.object({
      name: z.string(),
      degree: z.string(),
    }),
    College: z.object({
      name: z.string(),
      degree: z.string(),
    }),
  }),
  admitted: z.string(),
  about: z.string(),
  backgroundAndInvolvement: z.record(z.string(), z.string()).optional(),
});

export const associateSchema = baseMemberSchema.extend({
  type: z.literal("associate"),
  specialty: z.string(),
  education: z.string(),

  largeImage: z.string(),
  educationDetails: z.object({
    LawSchool: z.object({
      name: z.string(),
      degree: z.string(),
    }),
    College: z.object({
      name: z.string(),
      degree: z.string(),
    }),
  }),
  admitted: z.string(),
  about: z.string(),
  backgroundAndInvolvement: z.record(z.string(), z.string()).optional(),
});

export const staffSchema = baseMemberSchema.extend({
  type: z.literal("staff"),
});

export const teamMemberSchema = z.union([
  partnerSchema,
  associateSchema,
  staffSchema,
]);

export const teamSchema = z.object({
  partners: z.array(partnerSchema),
  associates: z.array(associateSchema),
  staff: z.array(staffSchema),
});

// Inferred types
export type Partner = z.infer<typeof partnerSchema>;
export type Associate = z.infer<typeof associateSchema>;
export type Staff = z.infer<typeof staffSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Team = z.infer<typeof teamSchema>;
