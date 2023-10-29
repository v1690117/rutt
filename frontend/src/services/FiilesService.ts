export default class FilesService {
    private static url = "/api/fss/files";

    get(id: string): Promise<any> {
        return fetch(`${FilesService.url}/${id}`).then(r => r.json());
    }

    getContentUrl(id: string) {
        return `${FilesService.url}/${id}/content`;
    }

    getContent(id: string): Promise<any> {
        return fetch(this.getContentUrl(id)).then(r => r.url);
    }

    upload(formData: any): Promise<string> {
        return fetch(`${FilesService.url}`, {
            method: 'POST',
            body: formData
        }).then(r => r.text());
    }
}
