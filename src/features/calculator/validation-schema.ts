import { z } from "zod";

// Schema for validating start and end dates
export const dateSchema = z
  .object({
    startDate: z.string().min(1, "Start date is required."),
    endDate: z.string().min(1, "End date is required."),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message: "End date must be after or equal to start date.",
    path: ["endDate"],
  });
