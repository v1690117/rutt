export interface ISpecification {
    id: number;
    title: string;
    requirements: IRequirement[];
}

export interface IRequirement {
    id: number;
    specification: ISpecification;
    text: string;
    tasks: ITask[];
    parentId: number;
    children: IRequirement[];
}

export interface ITask {
    id: number;
    title: string;
    description: string;
    requirements: IRequirement[];
}
