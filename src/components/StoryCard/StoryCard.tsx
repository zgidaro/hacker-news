import React from 'react';
import { StoryCardProps } from './StoryCard.props';
import { useStoryCard } from './StoryCard.hooks';
import { CommentCard } from '../CommentCard/CommentCard';

import './StoryCard.css';

export const StoryCardComponent = (props: StoryCardProps) => {
    const { story, index, commentIds, showComments, storyUrlHostname, storyTime, toggleComments } = useStoryCard(props);

    if (!story || story.dead || story.deleted) {
        return null;
    }

    return (
        <div className="story-card">
            <span className="story-title">{index}. {story.title}</span> (<a href={story.url} target="_blank" rel="noreferrer">{storyUrlHostname}</a>)
            <br/>
            <span className="story-subheadline">{story.score} points by <b>{story.by}</b> {storyTime} | <b>{story.descendants ?? 0}</b> comments</span>
            {!!story.descendants && <button onClick={toggleComments}>{showComments ? "Hide" : "Show"}</button>}
            <br/>
            {showComments && commentIds.map((k) => <CommentCard key={`comment_${k}`} commentId={k} />)}
        </div>
    );
};
