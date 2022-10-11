import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({ topic }) => {


    const { id, logo, name, total } = topic;
    return (
        <div>
            <div className='cart-container bg-teal-700 ' >
                <img className='  ' src={logo} alt="" />
                <div className="card-content bg-teal-400 flex justify-between p-3 text-black font-xl " >
                    <h4 className='text-xl font-medium'>{name}</h4>
                    <h4 className='text-xl font-medium'>{total}</h4>
                    <Link to={`/quiz/${id}`}> <button className='bg-teal-700 hover:bg-teal-900 font-medium p-2 rounded-lg  text-white'>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;