import React from 'react';
import { Link, } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <div className='flex justify-around bg-teal-500'>
                <div className="lugo">
                    <h2>Lugo</h2>
                </div>
                <div className='text-xl p-4 font-semibold'>
                    <Link className='p-6 font-2xl' to="/topics">Topics</Link>
                    <Link className='p-6 font-2xl' to="/statistics">Statistics</Link>
                    <Link className='p-6 font-2xl' to="/blog">Blog</Link>
                </div>
            </div>


        </div>
    );
};

export default Header;