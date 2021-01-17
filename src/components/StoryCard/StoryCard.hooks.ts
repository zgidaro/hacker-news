import { useCallback, useEffect, useState } from 'react';
import { Item } from '../../models/Item';
import { HackerNewsService } from '../../services/HackerNewsService';
import { enhanceTimeString } from '../../utilities/DateHelper';
import { StoryCardProps } from './StoryCard.props';

export const useStoryCard = ({ storyId, index }: StoryCardProps) => {
    const [story, setStory] = useState<Item | undefined>();
    const [commentIds, setCommentIds] = useState<number[]>([]);
    const [showComments, setShowComments] = useState(false);
    const [storyUrlHostname, setStoryUrlHostname] = useState('');
    const [storyTime, setStoryTime] = useState<string>('');

    useEffect(() => {
        const service = new HackerNewsService()
        service.getItemById(storyId)
            .then((res) => {
                setStory(res);
                setCommentIds((res.kids ?? []).slice(0, 20));
                setStoryUrlHostname(new URL(res.url).hostname);
                setStoryTime(enhanceTimeString(new Date(res.time * 1000)));
            })
            .catch((err) => {
                // error
            });
    }, [storyId]);

    const toggleComments = useCallback(() => {
        setShowComments(!showComments);
    }, [showComments]);

    return { story, index, commentIds, showComments, storyUrlHostname, storyTime, toggleComments };
};