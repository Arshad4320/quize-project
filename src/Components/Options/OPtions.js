import React from 'react';

const OPtions = ({ option, quiz }) => {
    const { correctAnswer } = quiz;

    return (
        <div className=''>
            <div className=' text-left p-2 text-stone-300'>
                <input type="radio" name="quiz" value={option} className=' mr-2 px-8 type-radio checked font-xl text-white' />{option}
            </div>

        </div>
    );
};

export default OPtions;
