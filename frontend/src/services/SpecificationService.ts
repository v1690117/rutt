import IObjectService from "./IObjectService";
import Specification from "../interfaces/specification";

const STUB_DATA : {[key: string]: Specification}= {
    '93e8901a-820f-4a0f-abe8-23ed1e50fa56': {
        id: '93e8901a-820f-4a0f-abe8-23ed1e50fa56',
        title: 'FE Development',
        owner: 'Mr FE Lead',
        state: 'draft',
        namespace: 'Development Team',
        serviceId: 'requirements'
    },
    '4d331984-10c2-47ed-8f9b-a91e10adafb5': {
        id: '4d331984-10c2-47ed-8f9b-a91e10adafb5',
        title: 'BE Development',
        owner: 'Mr BE Lead',
        state: 'obsolete',
        namespace: 'Development Team',
        serviceId: 'requirements'
    },
    'f56488c6-849a-4491-bbb8-ce5adc73f44b': {
        id: 'f56488c6-849a-4491-bbb8-ce5adc73f44b',
        title: 'Security',
        owner: 'Mr IT',
        state: 'published',
        namespace: 'IT',
        serviceId: 'requirements'
    },
    '271897fa-ab52-4b62-b917-7d27fd405efb': {
        id: '271897fa-ab52-4b62-b917-7d27fd405efb',
        title: 'End User Requirements',
        owner: 'Mr Analyst',
        state: 'draft',
        namespace: 'Rutt Project',
        serviceId: 'requirements'
    },
    '588d818e-404f-42dc-8451-36a2a068bd87': {
        id: '588d818e-404f-42dc-8451-36a2a068bd87',
        title: 'Design',
        owner: 'Mr Designer',
        state: 'draft',
        namespace: 'Rutt Project',
        serviceId: 'requirements'
    }
}

export default class IdentityService implements IObjectService<Specification> {
    url(): string {
        return "/api/objects";
    }

    get(id: string): Specification {
        // stub
        return STUB_DATA[id];
    }

    getAll(): Specification[]  {
        return Object.keys(STUB_DATA).map(key => STUB_DATA[key]);
    }

    create(spec: Specification) : string {
        const newId = `spec-${Math.random()}`
        spec.id = newId;
        STUB_DATA[newId] = spec;
        return newId;
    }
}
