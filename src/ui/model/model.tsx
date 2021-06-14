export interface Entity {
    id: string;
}

export interface RequirementSpecification extends Entity {
    title: string;
    requirements: IRequirement[];
}

export interface IRequirement extends Entity {
    specification: RequirementSpecification;
    text: string;
    tasks: ITask[];
    parentId: number;
    children: IRequirement[];
}

export interface ITask extends Entity {
    title: string;
    description: string;
    requirements: IRequirement[];
}

export interface FunctionalSpecification extends Entity {
    title: string;
    description: string;
    functions: Function[];
}

export interface Function extends Entity {
    title: string;
    description: string;
    specification: FunctionalSpecification;
}