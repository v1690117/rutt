export const get = (url: string): Promise<any> => fetch(url).then(r => r.json());
export const post = (url: string, data: any): Promise<any> => fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(r => r.json());
export const put = (url: string, data: any): Promise<any> => fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(r => r.json());