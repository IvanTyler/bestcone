import {z} from "zod";

export const BaseSchemaProjectsOrganization = z.object({
	id: z.number(),
	title: z.string(),
	desc: z.string(),
	photo: z.string(),
});