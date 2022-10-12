import React from 'react';
import { Link, } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <div className='grid grid-cols-2 bg-teal-500'>
                <div className="lugo">
                    <h2 className='font-extrabold mt-3   md:text-2xl sm:text-xl lg:text-3xl text-red-900'>WebTesty</h2>
                </div>
                <div className='text-xl p-4 font-semibold text-red-900'>
                    <Link className='p-6 font-2xl' to="/topics">Topics</Link>
                    <Link className='p-6 font-2xl' to="/statistics">Statistics</Link>
                    <Link className='p-6 font-2xl' to="/blog">Blog</Link>
                </div>
            </div>


        </div>
    );
};

export default Header;