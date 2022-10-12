import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
const Error = () => {
    return (
        <div className='grid justify-center '>
            <h1 className=' rounded-lg text-center bg-gray-200 font-semibold text-4xl mt-9 p-14'>Page is Not Found 404!Please Try Agin
            </h1>
            <Link to="/topics" className='bg-yellow-200  rounded'><ArrowBack></ArrowBack> <Button className='font-extrabold text-2xl'>Back to home</Button></Link>

        </div>
    );
};

export default Error;