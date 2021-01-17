import React from 'react';
import { CommentCardProps } from './CommentCard.props';
import { useCommentCard } from './CommentCard.hooks';

import './Comment.css';

export const CommentCard = (props: CommentCardProps) => {
    const { comment, commentTime } = useCommentCard(props);

    if (!comment) {
        return null;
    }

    return (
        <div className="comment">
            <span className="story-subheadline"><b>{comment.by}</b> {commentTime}</span>
            <br/>
            <span dangerouslySetInnerHTML={{ __html: comment?.text ?? "" }} />
        </div>
    );
};
