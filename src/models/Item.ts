import { ItemType } from './ItemType';

export interface Item {
    id: number;
    deleted?: boolean;
    type: ItemType;
    by: string;
    time: number;
    text: string;
    dead?: boolean;
    parent?: string;
    poll?: string;
    kids?: number[];
    url: string;
    score: number;
    title?: string;
    parts?: number[];
    descendants?: number;
}