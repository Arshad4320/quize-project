import { Button } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import OPtions from '../Options/OPtions';
import { Swal } from 'sweetalert2/dist/sweetalert2.js';


const QuizData = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
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
    const handleClickEyeButton = () => {
        toast.success(correctAnswer, {
            position: "top-center",
            autoClose: 2000,
        });
    }
    return (
        <div>
            <div className='bg-teal-700 mx-10 mb-4 rounded-lg  '>
                <p className='bg-teal-900 text-white  rounded p-3 text-left text-2xl text-semibold' >{question}</p>
                <div>
                    <Button onClick={handleClickEyeButton}>
                        <EyeIcon className="h-6 w-6 text-gray-200 " />
                    </Button>
                </div>
                {
                    options.map(options => <OPtions handleQuiz={handleQuiz} quiz={quiz} key={quiz.id} option={options}></OPtions>)
                }
            </div>
        </div>
    );
};

export default QuizData;
