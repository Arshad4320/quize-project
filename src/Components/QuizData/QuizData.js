import React from 'react';
import OPtions from '../Options/OPtions';

const QuizData = ({ quiz }) => {
    const { question, options } = quiz
    return (
        <div>
            <div className='bg-blue-300 mx-10 mb-4 rounded-lg '>
                <p className='bg-gray-400 rounded p-3 text-left text-xl text-black' >{question}</p>
                {
                    options.map(options => <OPtions quiz={quiz} key={quiz.id} option={options}></OPtions>)
                }
            </div>
        </div>
    );
};

export default QuizData;