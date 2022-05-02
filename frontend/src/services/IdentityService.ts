import RuttObject from "../interfaces/object";

export interface IObjectService {
    url: () => string;

    get: (id: string) => RuttObject;
}

export default class IdentityService implements IObjectService {
    url(): string {
        return "/api/objects";
    }

    get(id: string): RuttObject {
        // stub
        return {
            id,
            serviceId: 'requirement-service'
        };
    }
}
