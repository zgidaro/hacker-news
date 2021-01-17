import { useEffect, useState } from "react";
import { HackerNewsService } from '../../services/HackerNewsService';

export const useContent = () => {
    const [stories, setStories] = useState<number[]>([]);

    useEffect(() => {
        const service = new HackerNewsService();
        service.getTopStories()
            .then((res) => {
                setStories(res.slice(0, 10));
            })
            .catch((err) => {
                // error
            });
    }, []);

    return { stories };
};