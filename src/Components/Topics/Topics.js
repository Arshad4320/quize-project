import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div>
            <h2>This is topics page:{topics.length}</h2>
        </div>
    );
};

export default Topics;