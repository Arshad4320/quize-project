import React from 'react';
import { Link, } from 'react-router-dom';

const Header = () => {

    return (
        <div className='flex justify-around bg-teal-300'>
            <div className="lugo">
                <h2>Lugo</h2>
            </div>
            <div className=''>
                <Link className='p-6 font-2xl' to="/topics">Topics</Link>
                <Link className='p-6 font-2xl' to="/statistics">Statistics</Link>
                <Link className='p-6 font-2xl' to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;