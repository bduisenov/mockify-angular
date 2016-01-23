import {Mock} from './mock';

export interface ProjectLite {
    uid: string;
    title: string;
}

export interface Project extends ProjectLite {
    note: string;
    project: Project;
    subProjects: Project[];
    mocks: Mock[];
}
