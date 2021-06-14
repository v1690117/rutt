import {Function} from "../model/model";
import {get, post, put} from "./jsonRequests";

class FunctionalSpecsService {
    constructor() {
    }

    public getFunctions = (): Promise<Function[]> => {
        return get('api/functions');
    }

    public getFunction = (id: string): Promise<Function> => {
        return get(`api/functions/${id}`);
    }

    public createFunction = (functionSpec: Function): Promise<Function> => {
        return post(`api/functions/`, functionSpec);
    }

    public updateFunction = (functionSpec: Function): Promise<Function> => {
        return put(`api/functions/${functionSpec.id}`, functionSpec);
    }
}