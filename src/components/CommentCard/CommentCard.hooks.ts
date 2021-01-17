import { useEffect, useState } from 'react';
import { Item } from '../../models/Item';
import { HackerNewsService } from '../../services/HackerNewsService';
import { CommentCardProps } from './CommentCard.props';
import { enhanceTimeString } from '../../utilities/DateHelper';

export const useCommentCard = ({ commentId }: CommentCardProps) => {
    const [comment, setComment] = useState<Item | undefined>();
    const [commentTime, setCommentTime] = useState('');

    useEffect(() => {
        const service = new HackerNewsService()
        service.getItemById(commentId)
            .then((res) => {
                setComment(res);
                setCommentTime(enhanceTimeString(new Date(res.time * 1000)));
            })
            .catch((err) => {
                // error
            });
    }, [commentId]);

    return { comment, commentTime };
};