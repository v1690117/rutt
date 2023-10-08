import Suite from "../interfaces/suite";

export default class SuitesService {
    private static url = "api/tsc/suites";

    get(id: string): Promise<Suite> {
        return fetch(`${SuitesService.url}/${id}`).then(r => r.json());
    }

    getAll(): Promise<Suite[]> {
        return fetch(`${SuitesService.url}`).then(r => r.json());
    }

    create(spec: Suite): Promise<string> {
        return fetch(`${SuitesService.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(spec)
        }).then(r => r.text());
    }
}
