import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics.data)

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-cols-4  gap-6 m-8 '>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;