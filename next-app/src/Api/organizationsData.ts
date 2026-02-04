import {z} from "zod";
import {HOST} from "@/Api/Host";
import {BaseSchemaProjectsOrganization} from "@/Api/BaseSchemaProjectsOrganization";

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

export type DocType = z.infer<typeof DocSchema>

export async function fetchOrganizationsList(): Promise<OrganizationsListType> {
    return fetch(`${HOST}/organizations`)
        .then(response => response.json())
        .then(data => OrganizationsList.parse(data))
}

export async function submitOrganizationInfoData(id: number): Promise<OrganizationsType> {
    const response = await fetch(`${HOST}/organizationsInfo`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            id
        })
    });

    const dataFromServer = await response.json();

    return dataFromServer;

}