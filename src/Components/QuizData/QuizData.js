import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OPtions from '../Options/OPtions';

const QuizData = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // const handleQuiz = option => {
    //     if (option === correctAnswer) {
    //         alert('your ans is right')
    //     }
    //     else {
    //         alert('your ans is wrong')
    //     }
    // }

    const handleQuiz = (option) => {
        if (option === correctAnswer) {
            toast.success("Congress!Right Ans.", {
                position: "top-center",
                autoClose: 2000,
            });
        } else {
            toast.error("Sorry!Wrong Ans Try Agin", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }






    return (
        <div>
            <div className='bg-teal-700 mx-10 mb-4 rounded-lg '>
                <p className='bg-teal-900 text-white  rounded p-3 text-left text-2xl text-semibold' >{question}</p>
                {
                    options.map(options => <OPtions handleQuiz={handleQuiz} quiz={quiz} key={quiz.id} option={options}></OPtions>)
                }
            </div>
        </div>
    );
};

export default QuizData;
