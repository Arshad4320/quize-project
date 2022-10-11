import React from 'react';

const OPtions = ({ option, quiz }) => {
    const { correctAnswer } = quiz;

    return (
        <div className=''>
            <div className=' text-left p-2'>
                <label type="checked" className='flex px-8 type-radio checked'>{option}</label>
            </div>

        </div>
    );
};

export default OPtions;