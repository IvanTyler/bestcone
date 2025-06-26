import {z} from "zod";
import {BaseSchemaProjectsOrganization} from "./BaseSchemaProjectsOrganization.ts";
import {validateResponse} from "./ValidateResponse";


const ProjectsSchema = BaseSchemaProjectsOrganization.extend({
    address: z.string(),
    category: z.string(),
    date_construction: z.string(),
    class: z.string(),
    corpus: z.string(),
    floors: z.string(),
    parking: z.string(),
    link: z.string(),
});

export const ProjectsList = z.array(ProjectsSchema);
export type ProjectsListType = z.infer<typeof ProjectsList>
// вывод типа из схемы
export type ProjectsType = z.infer<typeof ProjectsSchema>


const HomeSliderSchema = z.object({
    photo: z.string(),
});

export const HomeSlider = z.array(HomeSliderSchema);
// вывод типа из схемы
export type HomeSliderListType = z.infer<typeof HomeSlider>
export type HomeSliderType = z.infer<typeof HomeSliderSchema>

const InfoProjectSchema = z.object({
    desc: z.string(),
    date_construction: z.string(),
    management_company: z.string(),
    class: z.string(),
    floors: z.string(),
    corpus: z.string(),
    parking: z.string(),
});
export type InfoProjectType = z.infer<typeof InfoProjectSchema>

const ContactsSchema = z.object({
    title: z.string(),
    phone: z.string(),
    time_start: z.string(),
    time_end: z.string(),
});

const NewsProjectSchema = z.object({
    title: z.string(),
    photo: z.string(),
    date: z.string(),
    desc: z.string(),
});

const DocumentsProjectSchema = z.object({
    title: z.string(),
    link: z.string(),
});
export type DocumentsProjectType = z.infer<typeof DocumentsProjectSchema>

const TeamProjectSchema = z.object({
    name: z.string(),
    post: z.string(),
})

const ProjectInfoSchema = z.object({
    title: z.string(),
    id: z.number(),
    seo_title: z.string(),
    home_slider: z.array(HomeSliderSchema),
    info: InfoProjectSchema,
    contacts: z.array(ContactsSchema),
    news: z.array(NewsProjectSchema),
    documents: z.array(DocumentsProjectSchema),
    team: z.array(TeamProjectSchema)
})


// вывод типа из схемы
export type ProjectsInfoType = z.infer<typeof ProjectInfoSchema>


export async function fetchProjectsList(): Promise<ProjectsListType> {
    return fetch('/src/Ajax/projects.json')
        .then(response => response.json())
        .then(data => ProjectsList.parse(data))
}

export async function submitProjectData(id): Promise<ProjectsInfoType> {
    const response = await fetch('http://localhost:3000/projectsInfo', {
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






