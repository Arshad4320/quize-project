import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';



const Quiz = () => {
    const quiz = useLoaderData();
    const { questions, name } = quiz.data

    return (
        <div>
            <div className='grid justify-center bg-yellow-200 rounded-lg mx-10 m-6 p-6 '>
                <h3 className='text-pink-900 font-semibold text-4xl  grid align-center'>{name}</h3>
            </div>
            {
                questions.map(quiz => <QuizData quiz={quiz} key={quiz.id}></QuizData>)
            }
        </div>
    );
};

export default Quiz;