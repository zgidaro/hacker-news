import React from 'react';
import { StoryCardComponent } from '../StoryCard/StoryCard';
import { useContent } from './Content.hooks';

import './Content.css';

export const Content = () => {
    const { stories } = useContent();
    return (
        <div className="content-container">
            <div className="content">
                {stories.map((s, idx) => <StoryCardComponent key={`story_${s}`} storyId={s} index={idx + 1} />)}
            </div>
        </div>
    );
};
