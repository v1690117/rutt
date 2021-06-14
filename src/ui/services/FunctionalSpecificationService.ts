import {FunctionalSpecification} from "../model/model";
import {get, post, put} from "./jsonRequests";

class FunctionalSpecificationService {
    constructor() {
    }

    public getFunctionalSpecs = (): Promise<FunctionalSpecification[]> => {
        return get('api/functional-specifications');
    }

    public getFunctionalSpecification = (id: string): Promise<FunctionalSpecification> => {
        return get(`api/functional-specifications/${id}`);
    }

    public createFunctionalSpecification = (functionSpec: FunctionalSpecification): Promise<FunctionalSpecification> => {
        return post(`api/functional-specifications/`, functionSpec);
    }

    public updateFunctionalSpecification = (functionSpec: FunctionalSpecification): Promise<FunctionalSpecification> => {
        return put(`api/functional-specifications/${functionSpec.id}`, functionSpec);
    }
}

export default FunctionalSpecificationService;