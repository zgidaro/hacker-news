export abstract class BaseService {
    protected async get<T>(url: string): Promise<T> {
        const res = await fetch(url)
            .then(response => response.json());
        return res;
    }
}