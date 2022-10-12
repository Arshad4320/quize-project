import React from 'react';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OPtions = ({ option, handleQuiz }) => {


    return (
        <div className=''>
            <div className=' text-left p-2 text-stone-300'>
                <input onClick={() => handleQuiz(option)} type="radio" name="quiz" value={option} className=' mr-2 px-8 type-radio checked font-xl text-white' />{option}
                <ToastContainer />
            </div>

        </div>
    );
};

export default OPtions;
