import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import pic from '../../img/pic.jpg'

const Topics = () => {
    const topics = useLoaderData();


    return (

        <div>
            <div className='header-container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2    m-8'>
                <div className="header-image "><img className='rounded-lg' src={pic} alt="" /></div>
                <div className="header-text ml-5 bg-blue-200 p-12 text-gray-600 rounded-lg"><p className=' font-medium  '>You can create a question in a quiz that does not include answers or point values. A text (no question) quiz question can be used as a preface to a quiz or a group of questions within a quiz. You may wish to use this type of question to include a passage of text, image, or video that will be referenced in subsequent questions.</p></div>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-6 m-8 '>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div></div>
    );
};

export default Topics;
