import { Item } from '../models/Item';
import { BaseService } from './BaseService';

export class HackerNewsService extends BaseService {
    private baseUrl = 'https://hacker-news.firebaseio.com/v0';

    public getTopStories = (): Promise<number[]> => {
        return this.get(`${this.baseUrl}/topstories.json`);
    }

    public getItemById = (id: number): Promise<Item> => {
        return this.get(`${this.baseUrl}/item/${id}.json`);
    }

}