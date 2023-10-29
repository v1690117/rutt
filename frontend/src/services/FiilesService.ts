export default class FilesService {
    private static url = "/files";

    get(id: string): Promise<any> {
        return fetch(`${FilesService.url}/${id}`).then(r => r.json());
    }

    getContent(id: string): Promise<any> {
        return fetch(`${FilesService.url}/${id}/content`).then(r => r.url);
    }
    
    upload(formData: any): Promise<string> {
        return fetch(`${FilesService.url}`, {
            method: 'POST',
            body: formData
        }).then(r => r.text());
    }
}
