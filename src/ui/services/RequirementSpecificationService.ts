import {RequirementSpecification} from "../model/model";
import {get, post} from "./jsonRequests";

class RequirementSpecificationService {
    constructor() {
    }

    public getFunctionalSpecs = (): Promise<RequirementSpecification[]> => {
        return get('api/specifications');
    }

    public getFunctionalSpecification = (id: string): Promise<RequirementSpecification> => {
        return get(`api/specifications/${id}`);
    }

    public createFunctionalSpecification = (requirementSpecification: RequirementSpecification): Promise<RequirementSpecification> => {
        return post(`api/specifications/`, requirementSpecification);
    }
}

export default RequirementSpecificationService;