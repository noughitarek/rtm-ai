import { MenuItem } from './MenuItem'

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}
type DynamicSetting = {
    [key: string]: any;
};
export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    menu: MenuItem[];
    settings?: DynamicSetting;
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

export interface Page{
    id: number;
    facebook_page_id: string;
    name: string;
    type: string;
    
    total_user_messages: number;
    total_page_messages: number;
    total_conversations: number;
    total_orders: number;
    
    expired_at: Date;
    created_at: Date;
}

export interface Remarketing{
    id: number;
    name: string;
    description: string;
    facebook_page: Page;
    programs_group: ProgramsGroup;
    templates_group: TemplatesGroup;
    category: RemarketingsCategory;
    created_at: Date;
    updated_at: Date;
    created_by: User;
    updated_by: User;
}


export interface RemarketingsCategory{
    id: number;
    name: string;
    description: string;
    remarketings: Remarketing[];
    created_at: Date;
    updated_at: Date;
    created_by: User;
    updated_by: User;
}