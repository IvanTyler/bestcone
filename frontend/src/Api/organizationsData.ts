import {z} from "zod";
import {BaseSchemaProjectsOrganization} from "./BaseSchemaProjectsOrganization.ts";

const DocSchema = z.object({
    id: z.number(),
    path: z.string(),
    fileName: z.string(),
    type: z.string(),
    size: z.string(),
});

const OrganizationsSchema = BaseSchemaProjectsOrganization.extend({
    fon: z.string(),
    link: z.string(),
    doc: z.array(DocSchema).optional(),
});


export const OrganizationsList = z.array(OrganizationsSchema);
export type OrganizationsListType = z.infer<typeof OrganizationsList>
export type OrganizationsType = z.infer<typeof OrganizationsSchema>

export const DocList = z.array(DocSchema);
export type DocListType = z.infer<typeof DocList>
export type DocType = z.infer<typeof DocSchema>

export async function fetchOrganizationsList(): Promise<OrganizationsListType> {
    return fetch('/src/Ajax/organizations.json')
        .then(response => response.json())
        .then(data => OrganizationsList.parse(data))
}