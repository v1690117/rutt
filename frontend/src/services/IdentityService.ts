import RuttObject from "../interfaces/object";
import IObjectService from "./IObjectService";

export default class IdentityService implements IObjectService<RuttObject> {
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

    getAll(): RuttObject[] {
        return [];
    }
}
