import React from 'react';
import OPtions from '../Options/OPtions';

const QuizData = ({ quiz }) => {
    const { question, options } = quiz;
    return (
        <div>
            <div className='bg-teal-700 mx-10 mb-4 rounded-lg '>
                <p className='bg-teal-900 text-white  rounded p-3 text-left text-2xl text-semibold' >{question}</p>
                {
                    options.map(options => <OPtions quiz={quiz} key={quiz.id} option={options}></OPtions>)
                }
            </div>
        </div>
    );
};

export default QuizData;