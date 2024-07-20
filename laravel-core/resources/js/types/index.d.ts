import { MenuItem } from './MenuItem'

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        menu: MenuItem[];
    };
};

export interface User{
    id: number;
    name: string;
    role: string;
    permissions: string;
    created_at: Date;
    updated_at: Date;
    created_by: User;
    updated_by: User;
}

export interface ProgramsGroup{
    id: number;
    name: string;
}
export interface Template{
    id: number;
    name: string;
    description: string;
    group: TemplatesGroup;
    stringphotos: string;
    stringvideos: string;
    stringaudios: string;
    photos: string[];
    videos: string[];
    audios: string[];
    message: string;
    total_used: number;
    total_orders: number;
    total_responses: number;
    created_at: Date;
    updated_at: Date;
    created_by: User;
    updated_by: User;
}
export interface TemplatesGroup{
    id: number;
    name: string;
    description: string;
    templates: Template[];
}
export interface Program{
    id: number;
    name: string;
    description: string;
    group: ProgramsGroup;
    reuse_after: number;
    records: ProgramRecord[];
    total_used: number;
    total_orders: number;
    total_responses: number;
    created_at: Date;
    updated_at: Date;
    created_by: User;
    updated_by: User;
}
export interface ProgramsGroup{
    id: number;
    name: string;
    description: string;
    programs: Program[];
    records: ProgramRecord[];
}
export interface ProgramRecord{
    id: number;
    group?: number | TemplatesGroup;
    template?: number | Template; 
    send_after: number;
    unit_of_time: number;
}